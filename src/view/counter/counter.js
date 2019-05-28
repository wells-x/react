import React from 'react'
import {increment, decrement} from '../../store/counter/action'
import {connect} from 'react-redux';

const buttonStyle = {
  margin: "20px"
};

function Counter({caption, Increment, Decrement, value}) {
  console.log(value);
  return (
    <div>
      <button style={buttonStyle} onClick={Increment}>+</button>
      <button style={buttonStyle} onClick={Decrement}>-</button>
      <span>{caption} count :{value}</span>
    </div>
  )
}

function mapState(state, ownProps) {
  console.log(state.counter[ownProps.caption]);
  return {
    value: state.counter[ownProps.caption]
  }
}

function mapDispatch(dispatch, ownProps) {
  return {
    Increment: () => {
      dispatch(increment(ownProps.caption))
    },
    Decrement: () => {
      dispatch(decrement(ownProps.caption))
    }

  }
}

export default connect(mapState, mapDispatch)(Counter)