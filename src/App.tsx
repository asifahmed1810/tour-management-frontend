

import { Outlet } from 'react-router'
import './App.css'
import CommonLayOut from './components/layOut/CommonLayOut'

function App() {
  
  return (
    <>
    <CommonLayOut>
      <Outlet></Outlet>
    </CommonLayOut>
    </>
  )
}

export default App
