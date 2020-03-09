import {SudokuMap} from "./map";

class AutoFill {
  constructor(maps) {
    if (!maps instanceof SudokuMap) throw new Error('请传入数独实体类');
    this.maps = maps;
    this.getAllLine();
  }

  maps = new SudokuMap();
  allLineList = [];
  currentLine = {list: [], status: false, errorValue: ''};

  getPrevPoint(currentPoint) {
    let currentRow = currentPoint.row;
    let currentCol = currentPoint.column;
    let point = this.maps.maps[currentRow][currentCol];
    if (!point || !point.isDefault) {
      return point
    }
    if (currentCol <= 0) {
      return this.getPrevPoint({row: currentRow - 1, column: 8})
    }
    return this.getPrevPoint({row: currentRow, column: currentCol - 1})
  }

  getNextPoint(currentPoint) {
    let currentRow = currentPoint.row;
    let currentCol = currentPoint.column;
    let nextPoint = this.maps.maps[currentRow][currentCol + 1];
    nextPoint = nextPoint || (this.maps.maps[currentRow + 1] && this.maps.maps[currentRow + 1][0]);
    return nextPoint || false
  }

  getAllLine() {
    this.getNextLine();
    console.log(this.currentLine);
  }

  getNextLine() {
    this.getOneLine()
    // let prevLineStatus = this.getOneLine();
    // let prevLine = this.currentLine.list;
    // let lastErrorValue = this.currentLine.errorValue;
    // let lastPoint = prevLine[prevLine.length - 1];
    // console.log(lastPoint);
    // let prevPoint = this.getPrevPoint(lastPoint);
    // console.log(prevPoint);
    // if (!prevLineStatus) {
    //   if (lastErrorValue === 9) {
    //     console.log(this.currentLine.list)
    //   }
    // }
    // console.log(this.currentLine);
  }

  getOneLine() {
    console.log(this.maps);
    let checkedList = [];
    let allStatus = true;

    let checkPointAllValue = (point) => {
      if (!point) return;
      let currentPoint = this.maps.maps[point.row][point.column];
      let nextPoint = this.getNextPoint(currentPoint);
      if (currentPoint.isDefault) {
        checkedList.push(currentPoint);
        checkPointAllValue(nextPoint);
        return;
      }
      let pointValueStatus = false;
      for (let value = 1; value <= 9; value++) {
        // 检测当前值是否正常
        let checkStatus = this.maps.checkAllPoints(currentPoint.row, currentPoint.column, value);
        console.log(checkStatus);
        if (checkStatus) {
          pointValueStatus = true;
          this.maps.maps[point.row][point.column].value = value;
          console.log(currentPoint.value);
          checkedList.push(currentPoint);
          break;
        } else {
          // checkedList.push(currentPoint);
          this.currentLine.errorValue = value;
        }
      }
      if (!pointValueStatus) {
        allStatus = false;
        checkedList.push(currentPoint);
        this.currentLine = {...this.currentLine, list: checkedList, status: allStatus};
        this.allLineList.push(JSON.parse(JSON.stringify(this.currentLine)));
        return allStatus;
      }
      setTimeout(() => {
        checkPointAllValue(nextPoint);
      }, 200);
    };

    console.log(allStatus);
    checkPointAllValue({row: 0, column: 0});
  }
}


// export default AutoFill;
export {AutoFill}