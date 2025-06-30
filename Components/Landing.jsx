import { Link } from "react-router-dom"
import React from "react"
import '../Styles/Landing.css'
const Landing = () => {
    return (
      <React.Fragment >
        <div id="id">
        <div id="page">
      
        <div className="admin">
        <img src="https://www.bing.com/th/id/OIP.wQFQco1izbZGsWcSyy9aUQHaHa?w=191&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />

           <Link className='link' to='/AdminLogin'>
             
            <h1 className="ad">Admin</h1>
           </Link>
           </div>


           <div className="user">
           <Link to='/UserLogin'>
             <img src="https://th.bing.com/th/id/OIP.-s2xQBsIowKFaw0Lxl8uqAHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
             <h1 className="us">User</h1>
           </Link>
        </div>
        </div>
        </div>
        </React.Fragment>
    )
}
export default Landing
