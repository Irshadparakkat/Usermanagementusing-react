
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAPI } from '../../../Constant'
import styles from './login.module.css'
import { UserActions } from '../../../Store/Userauth'
import { Axios } from '../../../Axios'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Errmessage, setErrmessage] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginFormsubmit = (e) => {
    e.preventDefault();
    let atposition=email.indexOf("@");
       let dotposition=email.lastIndexOf(".")
       if(email.length==0||password.length==0){
        setErrmessage("Please fill all fields")
       }
       
        else if(atposition<1||dotposition<atposition+2||dotposition+2>=email.length){
          setErrmessage("Enter a valid email")
        }
        else if(password.length<5){
          setErrmessage("Enter a password with 6 characters")
        }
        else{
    Axios.post(`/login`, { email, password }).then((response) => {
      const result = response.data.userSignUpp
      if (result.Status) {
        dispatch(UserActions.userAddDetails({ name: result.name, token: result.token }))
        navigate('/')
      } else {
        setErrmessage(result.message)
      }
    })
  }
  }
  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={loginFormsubmit}>
            <h1>Login to Your Account</h1>
            <input type="email" id="email" placeholder='Email Id'  value={email} onChange={(e) => { setEmail(e.target.value) }}
              className={styles.input}
            />
            <input
              type="password" id="password" placeholder='Password'  value={password} onChange={(e) => { setPassword(e.target.value) }}
              className={styles.input}
            />
            {Errmessage.length > 0 && <div className={styles.error_msg}>{Errmessage}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login