import * as home from './action-type';

// 保存表单数据
export const saveToken = (value, datatype) => {
  return {
    type: home.SAVE_TOKEN,
    value,
    datatype,
  }
}