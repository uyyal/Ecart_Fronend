import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify';
import '../Styles/AdminViewItems.css'
import { useNavigate } from 'react-router-dom';
const AdminViewItems = () => {
 
  let[products,setProducts]=useState([])
  let[force,setForce]=useState(0)

  useEffect(()=>{
    function fetchData(){
      axios.get('http://localhost:8080/Items')
      .then((res)=>{
        setProducts(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    fetchData()
  },[force])

  console.log(products)


function deleteProduct(id,productname){
  axios.delete(`http://localhost:8080/Items/${id}`)
  .then(()=>{
    toast.success(`${productname} Deleted Successfully`)
    setForce(force+1)
  })
  .catch(()=>{
    toast.error('Data is not present')
  })
}
console.log(deleteProduct)  


let navi=useNavigate();

function editpage(id)
{
  console.log(id);
     navi(`/AdminHomePage/UpdateProducts/${id}`)
     setForce(force + 1)
}


  return (
    <div className='AdminViewItems'>  
        {products.map((product)=>{
          return(
            

             <div className="card1">

                <div className="Thumbnail">
                  <img className='thumb'src={product.thumbnail} alt="" /> 
                  
                </div>
                <br />

                <div className="description">
                 <h4 className='pn'>{product.productname}</h4>
                 <span id='cost'>M.R.P:<big> <strike>{product.productprice}</strike> </big></span>
                 <h5 className='h'>Offer price:12% off ₹{Math.round(product.productprice*0.88)}</h5>
                 <p className='p'>Description: {product.desc}</p>
                 <span className='sp' >Ratings: <b>{product.ratings}*</b> </span>
                 <br /> <br />

                 <button className='warning' onClick={()=>{editpage(product.id)}}><EditIcon/>Update</button>
                 <button className='danger' onClick={()=>{deleteProduct(product.id,product.productname)}}> <DeleteForeverIcon/> Delete</button>
                </div>
              </div>   

          
    
          )
        })}
      
    </div>
    
  );
}

export default AdminViewItems;
