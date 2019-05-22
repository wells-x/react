import {createStore} from 'redux'
import reducer from './reducer'

const initValue = {
  'First': 0,
  'Second': 10,
  'Third': 20
};
const store = createStore(reducer, initValue);
export default store
export {
  store
}

/*
import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'

// Action
const increaseAction = { type: 'increase' };

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    default:
      return state
  }
}

// Store
const store = createStore(counter);

store.dispatch(increaseAction);
export default store;
export {
  store
}
*/
