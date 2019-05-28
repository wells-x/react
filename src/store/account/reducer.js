import * as home from './action-type';

let defaultState = {
  token: '',
};
// 首页表单数据
export const formData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case home.SAVE_TOKEN:
      return {...state, ...{token: action.value}};
    // case home.SAVEIMG:
    //   return {...state, ...{imgpath: action.path}};
    // case home.CLEARDATA:
    //   return {...state, ...defaultState};
    default:
      return state;
  }
};