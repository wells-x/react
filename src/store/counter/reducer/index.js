import {Increment, Decrement} from '../action'

const initValue = {
  'First': 0,
  'Second': 10,
  'Third': 20
};
export default (state = initValue, action) => {
  const {counterCaption} = action;
  switch (action.type) {
    case Increment:
      return {...state, [counterCaption]: state[counterCaption] + 1};
    case Decrement:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}