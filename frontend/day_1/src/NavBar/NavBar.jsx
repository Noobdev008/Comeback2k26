import { Link } from "react-router-dom"

const NavBar = ()=>(
    <>
        <Link to='/'>Home</Link>
         <Link to='/login'>Login</Link>
          <Link to='/userList'>UserList</Link>
    </>
)

export default NavBar