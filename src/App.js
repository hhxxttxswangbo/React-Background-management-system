import React from 'react'
import { useRoutes } from 'react-router-dom'
import Routes from './routes/index'

export default function App() {
  const element = useRoutes(Routes)
  return (
    <div className="app">
      {element}
    </div>
  )
}
