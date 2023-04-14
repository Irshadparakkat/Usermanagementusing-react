import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Axios } from '../../../Axios'
import styles from './Signup.module.css'


function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [Errmessage, setErrmessage] = useState("")

    const navigate = useNavigate()

    const signUpform = (e) => {
        e.preventDefault();
        let atposition=email.indexOf("@");
       let dotposition=email.lastIndexOf(".")
       if(email===""||password===""||name===""||phone===null){
        setErrmessage("Please fill all fields")
       }
       else if(name.length<3){
        setErrmessage("Please enter valid name")
       }
       else if(phone.length!=10){
        setErrmessage("Please enter valid phone")
       }
       
        else if(atposition<1||dotposition<atposition+2||dotposition+2>=email.length){
            setErrmessage("Enter a valid email")
        }
        else if(password.length<5){
            setErrmessage("Enter a password with 6 characters")
        }
        else{
        Axios.post(`/register`, { name, email, phone, password }).then((res) => {
            if (res.data.token) {
                navigate('/login')
            } else {
                setErrmessage('Email already defined')
            }
        })
    }
    }
    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="button" className={styles.white_btn}>
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={signUpform}>
                        <h1>Create Account</h1>
                        <input
                            type="text" placeholder='Full Name' id="name"  value={name} onChange={(e) => { setName(e.target.value) }}
                            className={styles.input}
                        />


                        <input type="email" placeholder='Email Id' id="email"  value={email} onChange={(e) => { setEmail(e.target.value) }}
                            className={styles.input} />
                        <input type="number"  value={phone} placeholder='Mobile Number' onChange={(e) => { setPhone(e.target.value) }}
                            className={styles.input}
                        />
                        
                        <input type="password" placeholder='Password'  id="password" value={password} onChange={(e) => { setPassword(e.target.value) }}
                            className={styles.input}
                        />
                        {Errmessage.length > 0 && <div className={styles.error_msg}>{Errmessage}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup


