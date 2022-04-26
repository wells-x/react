import { Point, SudokuMap } from "./map";

class AutoFill {
  constructor(maps) {
    this.maps = maps;
  }

  timer = 0;
  times = 0;
  maps: SudokuMap;
  allLineList = [];
  currentLine = { list: [], status: false, checkValue: null };

  mapChangeFn = () => { };
  start() {

    this.getOneLine1();

  }

  getPrevPoint(currentPoint: Point): Point | null {
    if (currentPoint.row === 0 && currentPoint.column === 0) {
      return null;
    }
    let prevPoint = null;


    let currentRow = currentPoint.row;
    let currentCol = currentPoint.column;
    if (currentCol <= 0) {
      prevPoint = (this.getPoint({ row: currentRow - 1, column: 8 }))
    } else {
      prevPoint = (this.getPoint({ row: currentRow, column: currentCol - 1 }))
    }
    if (prevPoint) {
      if (prevPoint.isDefault || prevPoint.checkValue === 9) {
        if (!prevPoint.isDefault) {
          prevPoint.checkValue = null;
          prevPoint.value = null;
        }
        return this.getPrevPoint(prevPoint);
      }
    }

    return prevPoint;
  }

  getNextPoint(point: Point): Point | null {

    const currentPoint = this.getPoint(point);
    currentPoint.map = this.maps;
    let currentRow = currentPoint.row;
    let currentCol = currentPoint.column;

    let nextPoint = this.getPoint({ row: currentRow, column: currentCol + 1 });
    nextPoint = nextPoint || this.getPoint({ row: currentRow + 1, column: 0 });
    if (nextPoint && nextPoint.isDefault) {
      return this.getNextPoint(nextPoint);
    }
    return nextPoint;
  }

  fillLine() {
    this.getNextLine();
    console.log(this.currentLine);
  }

  getNextLine() {

  }

  checkAllPoint(currentPoint: Point): Point | null {
    return;
  }

  getPoint(point: { row: number, column: number }): Point {
    if (!point.row && !point.column) {
      return this.maps.maps[0][0];
    }
    return this.maps.maps[point.row] ? this.maps.maps[point.row][point.column] : null || null;
  }

  getOneLine1() {
    const checkedList = [];
    const time = new Date().getTime();
    console.log(time);
    const doCheckPoint = (point: Point | { row: number, column: number }): void => {

      const currentPoint = this.getPoint(point);
      if (!currentPoint) {
        return;
      }
      currentPoint.map = this.maps;
      let nextPoint = this.getNextPoint(currentPoint);
      if (!nextPoint) {
        this.mapChangeFn();
        console.log(new Date().getTime() - time);
        return;
      }
      if (currentPoint.isDefault) {
        checkedList.push(currentPoint);
        doCheckPoint(nextPoint);
        return;
      }
      this.times ++;

      // 单条检测
      const checkingValue = (currentPoint.checkValue || 0) + 1;
      // 是否最后可用值
      if (checkingValue > 9) {
        currentPoint.checkValue = null;
        currentPoint.value = null;
        doCheckPoint(this.getPrevPoint(currentPoint));
        return;
      }
      let checkStatus = this.maps.checkAllPoints(currentPoint.row, currentPoint.column, checkingValue);
      currentPoint.checkValue = checkingValue;
      currentPoint.value = checkingValue;
      if (checkStatus) {
        checkedList.push(currentPoint);
      } else {
        // this.mapChangeFn();

        setTimeout(() => {
          doCheckPoint(currentPoint);
        }, this.timer);
        // doCheckPoint(currentPoint);
        return;
      }
      // setTimeout(() => {
      //   nextPoint && doCheckPoint(nextPoint);
      // }, this.timer);
      nextPoint && doCheckPoint(nextPoint);

    }

    // start as 0,0 point
    doCheckPoint({ row: 0, column: 0 });
  }
}


export { AutoFill }