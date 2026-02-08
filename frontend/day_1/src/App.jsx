import { Route, Routes } from 'react-router-dom'
import './App.css'
import GetUserList from './basicApi/GetUserList'
import Counter from './counter/Counter'
import Login from './loginForm/Login'
import HomePage from './homePage/HomePage'
import NavBar from './NavBar/NavBar'
import { ProtectedRoutes } from './component/ProtectedRoutes'

function App() {
  return <>
    <NavBar/>
    <Routes>
      <Route path='/signin' element={<Login/>}/>
   
      <Route path='/' element={ <HomePage/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='userList' element={<ProtectedRoutes><GetUserList/></ProtectedRoutes>}/>
    </Routes>
  </>
}

export default App
