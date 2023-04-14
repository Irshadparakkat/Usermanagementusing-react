import React, { useState } from 'react'
import classes from './Adminlogin.module.css'
import Button from '../../../Components/User/Button/Button'
import { useNavigate } from 'react-router-dom'


import { useDispatch } from 'react-redux'
import { AdminActions } from '../../../Store/Adminauth'
import { axiosAdmin } from '../../../Axios'

function Adminlogin() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errMessage,setErrMessage]=useState('')

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const adminFormSubmit=(e)=>{
        e.preventDefault()
        let atposition=email.indexOf("@");
       let dotposition=email.lastIndexOf(".")
       if(email.length==0||password.length==0){
        setErrMessage("Please fill all fields")
       }
       
        else if(atposition<1||dotposition<atposition+2||dotposition+2>=email.length){
            setErrMessage("Enter a valid email")
        }
        else if(password.length<5){
            setErrMessage("Enter a password with 6 characters")
        }
        else{
        axiosAdmin.post(`/adminLogin`,{email , password}).then((response)=>{
            const result=response.data.adminResult
            if (result.Status) {
                dispatch(AdminActions.AddAdmin({token:result.token}))
                navigate('/admin/home')
            } else {
                setErrMessage(result.message)
            }
        })
    }
    }
    return (
    <div className='container'>
            <div className={classes.login} >
                <h5 className={classes.filogin} >Admin Login</h5>
                <form onSubmit={adminFormSubmit}>
                    <div className={classes.control} >
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" id="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className={classes.control} >
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className={classes.actions}>
                        <button type="submit" className={classes.button} >
                            Login
                        </button>
                    </div>
                    { errMessage.length>0 && <a style={{ color: 'red' }}  >{errMessage}</a>}
                </form>
            </div>
        </div>
    )
}

export default Adminlogin