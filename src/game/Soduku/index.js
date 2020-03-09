import React, {Component} from "react";
import SodukuMap from "./map";
import './index.scss'
import {AutoFill} from './autoFill'

class Soduku extends Component {
  constructor(props) {
    super(props);
    let defaultPoints = [
      {row: 0, column: 0, value: 5},
      {row: 0, column: 5, value: 7},
      {row: 0, column: 6, value: 6},
      {row: 0, column: 7, value: 4},
      {row: 1, column: 3, value: 4},
      {row: 1, column: 6, value: 1},
      {row: 1, column: 8, value: 2},
      {row: 2, column: 1, value: 9},
      {row: 2, column: 4, value: 1},
      {row: 2, column: 6, value: 7},
      {row: 3, column: 1, value: 8},
      {row: 3, column: 2, value: 7},
      {row: 3, column: 4, value: 2},
      {row: 3, column: 6, value: 5},
      {row: 3, column: 7, value: 1},
      {row: 3, column: 8, value: 6},
      {row: 4, column: 1, value: 3},
      {row: 4, column: 2, value: 5},
      {row: 4, column: 3, value: 8},
      {row: 4, column: 4, value: 6},
      {row: 4, column: 7, value: 7},
      {row: 4, column: 8, value: 9},
      {row: 5, column: 0, value: 6},
      {row: 5, column: 4, value: 7},
      {row: 5, column: 5, value: 1},
      {row: 5, column: 6, value: 8},
      {row: 5, column: 7, value: 3},
      {row: 5, column: 8, value: 4},
      {row: 6, column: 0, value: 2},
      {row: 6, column: 2, value: 6},
      {row: 6, column: 4, value: 9},
      {row: 6, column: 5, value: 3},
      {row: 6, column: 6, value: 4},
      {row: 6, column: 7, value: 5},
      {row: 6, column: 8, value: 8},
      {row: 7, column: 0, value: 9},
      {row: 7, column: 1, value: 4},
      {row: 7, column: 2, value: 1},
      {row: 7, column: 3, value: 2},
      {row: 7, column: 4, value: 5},
      {row: 7, column: 5, value: 8},
      {row: 8, column: 0, value: 8},
      {row: 8, column: 2, value: 3},
      {row: 8, column: 3, value: 7},
      {row: 8, column: 6, value: 9},
      {row: 8, column: 7, value: 2},
    ];
    let map = new SodukuMap({defaultPoints});
    this.state = {
      num: 100,
      map,
      selectPoint: {}
    };
    new AutoFill(map)
  }

  getPoint(row, col) {
    this.setState({
      selectPoint: {row, col}
    })
  }

  chooseNum(i) {
    let {row, col} = this.state.selectPoint;
    let map = this.state.map;
    let currentPoint = map.maps[row][col];
    if (currentPoint.isDefault) return;
    map.maps[row][col].value = i;
    this.setState({map}, () => {
      let status = this.state.map.checkAllPoints(row, col);
      map.maps[row][col].status = status ? '' : 'error';
      this.setState({map})
    })
  }

  setClass(column,) {
    let {selectPoint} = this.state;
    return [
      "sudoku-point", column.isDefault && 'default',
      selectPoint.col === column.column && selectPoint.row === column.row && 'select',
      column.status].join(' ')
  }

  render() {
    return (
      <section className="sudoku-box">
        <h3>数独</h3>
        <div className="sudoku-map">
          {this.state.map.maps.map((row, i) => (
            <div className="sudoku-row" key={i}>{
              row.map((column, j) =>
                <span
                  className={this.setClass(column,)}
                  onClick={() => this.getPoint(i, j)}
                  key={j}>{column.value || ''}</span>
              )
            }</div>))
          }
        </div>
        <div className="sudoku-choose" style={{margin: '20px 0 0'}}>
          {new Array(10).fill('').map((v, i) =>
            <span onClick={() => this.chooseNum(i)}
                  className="sudoku-point" key={i}>{i || ''}</span>)}
        </div>
      </section>
    )
  }
}

export default Soduku