import swal from 'sweetalert'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import { axiosAdmin } from '../../../Axios';

function AdmineditUser() {
    let {id}=useParams()
    let navigate=useNavigate()
    let [name,setName]=useState('')
    let [email,setEmail]=useState('')
    let [phone,setPhone]=useState('')
    const submitEdit =()=>{
        axiosAdmin.put(`/edit`,{id:id,name:name,email:email,phone:phone}).then((response)=>{
            if (response.data.status==='success') {
                swal('Profile Updated').then((result)=>{
                    navigate('/admin/home')
                })
            } else {
                swal('Oops!!Something went wrong').then((result)=>{
                    navigate('/admin/home')
                })
            }
        })
    }
    useEffect(()=>{
        axiosAdmin.get(`/edituser?id=${id}`).then((response)=>{
        setName(response.data.users.name) 
        setEmail(response.data.users.email) 
        setPhone(response.data.users.phone)
        }).catch(error=>{
            console.log(error);
            })
      },[])
  return (
    <div >
    <div className="container ">
            <h1 className="fw-bold mb-5 text-center">Edit Details</h1>

            <div className="form-outline mb-4">
                <label className="form-label" for="form3Example1"> name</label>
                <input name="Name" type="text" id="username"  value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control"  />
            </div>
            <div className="form-outline mb-4 mt-5">
                <label className="form-label" for="form2Example1">Email address</label>
                <input type="email" id="userEmail" className="form-control" name="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" for="form3Example1"> phone</label>
                <input name="Name" type="number" id="username"  className="form-control" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
            </div>

            <div className="text-center">
                <small className="text-danger"></small>
            </div>
            <div className="text-center">
                <button id="btn-submit" onClick={submitEdit} type="button" className="btn btn-primary btn-block mb-4">Edit Details</button>
            </div>
            

    </div>

</div>
  )
}

export default AdmineditUser