import React, { Component } from "react";
import './index.scss'
import { getGame } from './games'

class Soduku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tryData: this.tryData,
      chooseSpan: this.chooseSpan,
    };
  }

  chooseSpan: { x: number, y: number } = null;

  game = getGame()

  tryData = new Array(9).fill('').map((v, i) => new Array(9).fill('').map((v, j) => this.game[i][j] || ''))

  state: {
    tryData: Array<Array<string>>,
    chooseSpan: { x: number, y: number }
  }

  startAutoFill() {
    // console.log(this.tryData);
    console.time();

    // 获取下一个点
    const getNext = ({ x, y }) => {
      if (x === 8) {
        return { x: 0, y: y + 1 }
      }
      return { x: x + 1, y }
    }
    // 获取上一个点
    const getPrev = ({ x, y }) => {
      let prev;
      if (x === 0) {
        prev = { x: 8, y: y - 1 }
      } else {
        prev = { x: x - 1, y }
      }
      if (this.game[prev.y][prev.x]) {
        return getPrev(prev)
      }
      return prev;
    }
    // 判断验证是否成功
    const check = ({ x, y }) => {
      const value = this.tryData[y][x];
      const checkList = this.tryData.map((row, i) => {
        return row.map((v, j) => {
          let rowStart = Math.floor(y / 3) * 3;
          let colStart = Math.floor(x / 3) * 3;
          if (i === y && j === x) return '';

          if (i === y || j === x) return v;
          if (i >= rowStart && i < rowStart + 3 && j >= colStart && j < colStart + 3) return v;
          return '';
        }).filter(v => v !== '');
      }).reduce((a, b) => a.concat(b), []);
      return !checkList.includes(value);

    }
    // 尝试填充
    const doCheck = ({ x, y }) => {
      // 如果默认存在，填充下一个点
      if (this.game[y][x]) {
        this.tryData[y][x] = this.game[y][x];
        doCheck(getNext({ x, y }))
        return;
      }

      const checkValue = (this.tryData[y][x] || 0) + 1;
      if (checkValue > 9) {
        this.tryData[y][x] = '';
        // this.setState({ tryData: this.tryData })
        // setTimeout(() => {
        doCheck(getPrev({ x, y }))
        // }, 0);
        return;
      }

      // 尝试填充当前点
      this.tryData[y][x] = checkValue;
      const checkPass = check({ x, y });
      // console.log(checkValue, checkPass);

      // this.setState({ tryData: this.tryData })
      if (!checkPass) {
        doCheck({ x, y })
        return;
      }
      // console.log('pass:', checkValue);
      if (x === 8 && y === 8) {
        console.timeEnd();
        console.log('success');
        this.setState({ tryData: this.tryData })
        console.log(this.tryData);
        return;
      }
      setTimeout(() => {
        doCheck(getNext({ x, y }))
      }, 0);

    }

    doCheck({ x: 0, y: 0 })
  }

  setValue(x, y, value) {
    this.tryData[y][x] = value;
    this.setState({ tryData: this.tryData })
  }

  chooseNum(y, x) {

    this.chooseSpan = { x, y };
    this.setState({ chooseSpan: this.chooseSpan })
  }

  setIconClass(y, x,) {
    const classList = [
      'sudoku-point',
      this.game[y][x] && 'default',
      this.chooseSpan && x === this.chooseSpan.x && y === this.chooseSpan.y && 'select',
    ]
    if (this.tryData[y][x]) {
      const list = [...this.tryData[y], ...this.tryData.map((row, i) => i === y ? '' : row[x])];
      list.splice(x, 1)
      classList.push(list.filter(v => v).includes(this.game[y][x]) && 'warn')
    }

    return classList.join(' ')
  }

  render() {
    const { tryData, chooseSpan } = this.state;
    return (
      <section className="sudoku-box">
        <h3>数独</h3>
        <div className="sudoku-map">{
          new Array(9).fill('').map((v, i) => {
            return <div className="sudoku-row" key={i}> {
              new Array(9).fill('').map((v, j) => {
                return <span className={this.setIconClass(i, j)} onClick={() => this.chooseNum(i, j)}
                  title={`${i + 1},${j + 1}`} key={j}>{this.game[i][j] || tryData[i][j]}</span>
              })
            } </div>
          })
        }</div>
        <div className="sudoku-choose" style={{ margin: '20px 0 0' }}>
          {new Array(9).fill('').map((v, i) =>
            <span onClick={() => this.setValue(chooseSpan.x, chooseSpan.y, i + 1)} className="sudoku-point" key={i + 1}>{i + 1 || ''}</span>)
          }
          <span onClick={() => this.startAutoFill()} className="sudoku-point">auto</span>
        </div>
      </section>
    )
  }
}

export default Soduku