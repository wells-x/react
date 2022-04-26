import { isArray } from "../../utils/judge-type";

class SudokuMap {
  constructor({ width = 9, height = 9, defaultPoints = [] } = {}) {
    this.width = Number(width) || this.width;
    this.height = Number(height) || this.height;
    this.defaultPoints = isArray(defaultPoints) ? defaultPoints : [];
    this.creatMap()
  }


  width = 9;
  height = 9;
  defaultPoints = null;
  maps = [];

  // 创建数独地图
  creatMap() {
    let maps = [];
    for (let row = 0; row < this.height; row++) {
      let arr = [];
      for (let column = 0; column < this.width; column++) {
        arr[column] = new Point({ value: '', isDefault: false, row, column })
      }
      maps[row] = arr
    }
    maps = this.initDefaultPoints(maps, this.defaultPoints);
    this.maps = maps;
  }

  clearMap() {
    this.creatMap()
  }

  // 初始化原始数独点
  initDefaultPoints(maps, points) {
    points.forEach((item) => {
      let { row, column, value } = item;
      maps[row][column] = new Point({ ...maps[row][column], value, isDefault: true })
    });
    return maps;
  }

  // 获取所有相关点
  getAllPoint(row, col) {
    let rows = this.getPointRow(row);
    let cols = this.getPointCol(col);
    let around = this.getPointAround(row, col);
    let arr = [];
    [...rows, ...cols, ...around].forEach(item => {
      arr.includes(item) || arr.push(item)
    });
    return arr;
  }

  checkAllPoints(row, col, value = 0) {
    let arr = this.getAllPoint(row, col);
    let pointValue = value || this.maps[row][col].value;
    this.maps.forEach(rows => rows.forEach(item => item.status === 'warn' && (item.status = '')));
    let findPoint = arr.find(item => item.value === pointValue && (item.row !== row || item.column !== col));
    findPoint && (findPoint.status = 'warn');
    // findPoint ? (findPoint.status = 'warn') : findPoint.status = '';
    return !findPoint;
  }

  // 获取同行所有点
  getPointRow(row) {
    return this.maps[row]
  }

  // 获取同列所有点
  getPointCol(col) {
    let arr = [];
    this.maps.forEach((row,) => row.forEach((item) => (item.column === col) && arr.push(item)));
    return arr
  }

  // 获取所在3 × 3 格内点
  getPointAround(row, col) {
    let rowStart = Math.floor(row / 3) * 3;
    let colStart = Math.floor(col / 3) * 3;
    let rowEnd = rowStart + 3;
    let colEnd = colStart + 3;
    let arr = [];
    for (let row = rowStart; row < rowEnd; row++) {
      for (let col = colStart; col < colEnd; col++) {
        arr.push(this.maps[row][col])
      }
    }
    return arr
  }

}

class Point {
  constructor(
    { row, column, value = '', isDefault = false, status = '', map = null }:
      {
        row: number, column: number, value?: string | number, isDefault?: boolean,
        status?: string, map?: SudokuMap
      }
  ) {
    this.row = row;
    this.column = column;
    this.value = Number.parseInt(value + '') || '';
    this.isDefault = isDefault;
    this.sodukuMap = map;
    let statusList = ['', 'warn', 'error',];
    this.status = statusList.includes(status) ? status : statusList[0]
  }

  private sodukuMap: SudokuMap = null;

  public set map(v: SudokuMap) {
    this.sodukuMap = v;
    this.getValue();
  }


  public get map(): SudokuMap {
    return this.sodukuMap;
  }

  checkValue = null;

  row = 0;
  column = 0;
  value: number | '' = '';
  isDefault = false;
  status = '';
  getValue() {
    const { row, column, value = '', isDefault = false, status = '', map = null } = this.map.maps?.[this.row][this.column]
    this.row = row;
    this.column = column;
    this.value = Number.parseInt(value + '') || '';
    this.isDefault = isDefault;
    this.sodukuMap = map;
    this.status = status;
    return this.value;
  }
}

export default SudokuMap
export { SudokuMap, Point }
