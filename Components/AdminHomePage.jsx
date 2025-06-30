import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminViewItems from './AdminViewItems'
import { Route,Routes} from 'react-router-dom'
// import Footer from './Footer' 
import AdminAddProducts from './AdminAddProducts'
import UpdateProducts from './UpdateProducts'
import '../Styles/AdminHomepage.css'
import AdminDashBoard from './AdminDashBoard'
import AccountInfo from './AccountInfo'
import Landing from './Landing'



const AdminHomePage = () => 
  {

  
  return (
    <div className='AdminHomePage'>
      
       <AdminNavbar/>
       
    <Routes>
      <Route path='/' element={<AdminDashBoard/>}></Route>
        <Route path="/AdminAddProducts" element={<AdminAddProducts/>}></Route>
        <Route path="/AdminViewItems" element={<AdminViewItems/>}></Route>
        <Route path='/UpdateProducts/:id' element={<UpdateProducts/>}></Route>
        <Route path="/AccountInfo" element={<AccountInfo />} />
        <Route path="/" element={<Landing />} />
       </Routes>
    </div>
    
  )
}

export default AdminHomePage
