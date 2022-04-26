import React, { Component } from "react";
import SodukuMap from "./map";
import './index.scss'
import { getGame } from './games-data'
import { AutoFill } from './autoFill'

class Soduku extends Component {
  constructor(props) {
    super(props);
    let map = new SodukuMap({ defaultPoints: this.game });
    this.state = {
      num: 100,
      times: 0,
      map,
      selectPoint: {}
    };
  }
  game = getGame()
  autoFill: AutoFill;

  getPoint(row, col) {
    this.setState({
      selectPoint: { row, col }
    })
  }

  state: {
    selectPoint: { row?: number, col?: number },
    map: SodukuMap,
    times: number,
    num: number,
  }

  chooseNum(i) {
    let { row, col } = this.state.selectPoint;
    let map = this.state.map;
    let currentPoint = map.maps[row][col];
    if (currentPoint.isDefault) return;
    map.maps[row][col].value = i;
    this.setState({ map }, () => {
      let status = this.state.map.checkAllPoints(row, col);
      map.maps[row][col].status = status ? '' : 'error';
      this.setState({ map })
    })
  }

  setClass(column,) {
    let { selectPoint } = this.state;
    return [
      "sudoku-point", column.isDefault && 'default',
      selectPoint.col === column.column && selectPoint.row === column.row && 'select',
      column.status].join(' ')
  }

  startAutoFill() {
    if (!this.autoFill) {
      this.autoFill = new AutoFill(this.state.map);
      const map = this.state.map;
      this.autoFill.mapChangeFn = () => {
        this.setState({ map, times: this.autoFill.times })
      }
    }

    this.autoFill.start();
  }

  render() {
    return (
      <section className="sudoku-box">
        <h3>数独 {this.state.times}</h3>
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
        <div className="sudoku-choose" style={{ margin: '20px 0 0' }}>
          {new Array(9).fill('').map((v, i) =>
            <span onClick={() => this.chooseNum(i + 1)}
              className="sudoku-point" key={i + 1}>{i + 1 || ''}</span>)
          }
          <span onClick={() => this.startAutoFill()} className="sudoku-point">auto</span>
        </div>
      </section>
    )
  }
}

export default Soduku