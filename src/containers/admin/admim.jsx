import React from 'react'
import { connect } from 'react-redux'
import { createDemo1Action, createDemo2Action } from '../../redux/actions/test'

function Admim() {
  return (
    <div>admim</div>
  )
}

export default connect(
  state => ({
    demo: state.testKey  //reducers中index里
  }),
  {
    demo1: createDemo1Action,  //actions里
    demo2: createDemo2Action,
  }
)(Admim)
