import { SAVE_USER_INFO } from '../constant'

//reducers是用来初始化状态和加工
const initState = {
  user: {},
  token: "",
  isLogin: false
};
export default function test(preState = initState, action) {
  const { type, data } = action;
  let newState;
  switch (type) {
    case SAVE_USER_INFO:
      newState = { user: data.user, token: data._id, isLogin: true };
      return newState
    default:
      return preState
  }
}