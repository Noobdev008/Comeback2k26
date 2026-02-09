import { Link } from "react-router-dom"

const NavBar = ()=>(
    <>
        <Link to='/'>Home</Link>
        <Link to='signup'>Signup</Link>
        <Link to='/signin'>Login</Link>
        <Link to='/userList'>UserList</Link>
        <Link to='/counter'>Counter</Link>
    </>
)

export default NavBar