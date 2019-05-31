import * as home from './action-type';
import {getOldStore} from "../index";

let token = '';
try {
  let {app: {token: token1}} = getOldStore();
  token = token1;
} catch (e) {
  console.log(e);
}
let defaultState = {
  token: token || '',
};
console.log(defaultState);
// 首页表单数据
export const app = (state = defaultState, action = {}) => {
  switch (action.type) {
    case home.SAVE_TOKEN:
      return {...state, ...{token: action.value}};
    case home.CLEAR_TOKEN:
      return {...state, ...{token: ''}};
    default:
      return state;
  }
};

