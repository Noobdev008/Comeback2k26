import { Route, Routes } from 'react-router-dom'
import './App.css'
import GetUserList from './basicApi/GetUserList'
import Counter from './counter/Counter'
import Login from './loginForm/Login'
import HomePage from './homePage/HomePage'
import NavBar from './NavBar/NavBar'

function App() {
  return <>
    <NavBar/>
    <Routes>
     <Route path='/' element={<HomePage/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='userList' element={<GetUserList/>}/>
    </Routes>
  </>
}

export default App
