import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom' 
import swal from 'sweetalert'

import { axiosAdmin } from '../../../Axios'

function Admintable() {
    const [show,setShow]=useState([])
    const [userData,setUserData]=useState([])
    const [deleteuser,setdeleteuser]=useState(0)
    const [SearchInput, setSearchInput] = useState("")
    const navigate=useNavigate()

    useEffect(()=>{
        axiosAdmin.get(`/getUserDetails`).then((response)=>{
            setUserData(response.data.data)
            setShow(response.data.data)
        }).catch(error => {
            console.log(error);
        })
    },[deleteuser===0])

    const DeleteUser=(id)=>{
        axiosAdmin.delete(`/deleteUser`,{id}).then((response)=>{
            setUserData(response.data.result);
            setShow(response.data.result)
            swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
        }).catch(error => {
            swal(error.message)
            console.log(error);
        })
    }


    const handleChange =(event) => {
         setSearchInput(event.target.value)
        
       if(event.target.value){
        console.log(event.target.value)
        let uppdateUse=show.filter((item)=>item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1  )
        setUserData(uppdateUse)
       }else{
        setUserData(show)
       }
     
    }

  return (
    <div>
        <Container>
                <input
                className='mt-5'
                    type="text"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={SearchInput}
                />
                <Table className="mt-3" striped bordered hover>
                    <thead>
                        <tr>
                            <th>number</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Delete </th>
                            <th>Edit </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                            {userData.map((obj,index)=>{
                                return(
                                    <tr key={obj.id}>
                                    <td key={obj.id}>{index+1}</td>
                                    <td key={obj.id}>{obj.name}</td>
                                    <td key={obj.id}>{obj.email}</td>
                                    <td key={obj.id}>{obj.phone}</td>
                                    <td key={obj.id}>
                                    <Button onClick={() => DeleteUser(obj._id)} variant="danger">Delete</Button>
                                    </td>
                                    <td key={obj.id}>
                                    <Button onClick={() => navigate(`/admin/edit/${obj._id}`)} variant="info">Editprofile</Button>
                                    </td>
                                   
                                </tr>
                                )
                            })}

                    </tbody>
                </Table>
            </Container>

    </div>
  )
}

export default Admintable