import { TEST1, TEST2 } from '../constant'


export const createDemo1Action = (value) => ({
  type: TEST1,
  data: value
})

export const createDemo2Action = (value) => ({
  type: TEST2,
  data: value
})