import {createStore, combineReducers, applyMiddleware} from 'redux'
import {counter} from './counter/reducer'
import * as account from './account/reducer'

const store = createStore(combineReducers({counter, ...account}, applyMiddleware()));
window.addEventListener('beforeunload', function () {
  sessionStorage.setItem('unloadString', JSON.stringify(store.getState()))
});

function getOldStore() {
  const UNLOAD_KEY = 'unloadString';
  setTimeout(() => {
    sessionStorage.removeItem(UNLOAD_KEY);
  }, 10000);
  console.log(sessionStorage.getItem(UNLOAD_KEY));
  return JSON.parse(sessionStorage.getItem(UNLOAD_KEY));
}

export default store
export {
  store,
  getOldStore
}
