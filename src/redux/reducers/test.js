import { TEST1, TEST2 } from '../constant'

//reducers是用来初始化状态和加工
const initState = "hello";
export default function test(preState = initState, action) {
  const { type, data } = action;
  let newState;
  switch (type) {
    case TEST1:
      newState = preState + data;
      return newState
    case TEST2:
      return preState + + data + "!"
    default:
      return preState
  }
}