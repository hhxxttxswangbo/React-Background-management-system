import { SAVE_USER_INFO } from '../constant'


export const createSaveUserInfoAction = (value) => ({
  type: SAVE_USER_INFO,
  data: value
})
