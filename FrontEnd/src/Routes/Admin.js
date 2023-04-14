import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../Pages/Admin/AdminHome'
import Adminlogin from '../Pages/Admin/Adminlogin'
import Adminedite from '../Pages/Admin/Adminedite'

function Admin() {


  let Admin = useSelector(state => { return state.Admin.AdminToken })
  return (
    <div>
        <Routes>
            <Route path='/' element={Admin?<AdminHome/>:<Adminlogin/>}/>
            <Route path='/home' element={Admin?<AdminHome/>:<Adminlogin/>}/>
            <Route path='/edit/:id' element={Admin?<Adminedite/>:<Adminlogin/>}/>
        </Routes>
    </div>
  )
}

export default Admin