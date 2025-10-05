import React, { useState } from 'react';
import '../Styles/AdminAddProducts.css'
import axios from 'axios';
import { toast } from 'react-toastify';
const AdminAddProducts = () => {
  let[Category,setCategory]=useState("")
  let[productname,setProductname]=useState("")
  let[productprice,setProductprice]=useState("")
  let[desc,setDesc]=useState("")
  let[thumbnail,setThumbnail]=useState("")
  let[ratings,setRatings]=useState("")

  let data={Category,productname,productprice,desc,thumbnail,ratings}

  function addProduct(e){
    e.preventDefault();
    axios.post("http://localhost:8080/Items",data)
    .then((res)=>{
         console.log(res);
         toast.success("Data added successfully");
    })
    .catch((err)=>{
      console.log(err);
      toast.error("Invalid Details")

    })
  }

  
  return (
    
    <div>
    <div className='addproducts'>
        <form className='Adminproducts' onSubmit={addProduct}>
            <fieldset className='fieldset-grid'>
                <label className='label5' htmlFor=""> Category:</label>
                <select className='select-field' required value={Category} onChange={(v)=>{setCategory(v.target.value)}}>
                    <option >Dress Material</option>
                    <option>Mobile</option>
                    <option>Mobile Accessories</option>
                    <option >Electronics</option>
                    <option >Groceries</option>
                </select>
                <label className='label5' htmlFor="" >Product Name:</label>
                <input required value={productname} onChange={(v)=>{setProductname(v.target.value)}}className='input5' type="text" placeholder='Enter the productname' />

                <label className='label5' htmlFor="">Product price:</label>
                <input required value={productprice} onChange={(v)=>{setProductprice(v.target.value)}} className='input5' type="number" placeholder='Enter the price' />

                <label className='label5' htmlFor="">Desc:</label>  
                <textarea required value={desc} onChange={(v)=>{setDesc(v.target.value)}}rows='2' cols='30' placeholder='Enter Description'></textarea>

                <label className='label5' htmlFor="">Thumbnail:</label>
                <input required value={thumbnail} onChange={(v)=>{setThumbnail(v.target.value)}} className='input5' type="text" placeholder='Enter the image address' />

                <label className='label5' htmlFor="">Ratings:</label>
                <input required value={ratings} onChange={(v)=>{setRatings(v.target.value)}} className='input5' type="number" placeholder='Enter the ratings' />

                <button className='btn btn-primary'>Add Items</button>

            </fieldset>
        </form>
      
    </div> 
    <br /><br /><br /><br />
    </div>
    
  );
}

export default AdminAddProducts;
