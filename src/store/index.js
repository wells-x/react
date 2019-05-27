import {createStore} from 'redux'
import counter from './counter/reducer'

const store = createStore(counter);
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
