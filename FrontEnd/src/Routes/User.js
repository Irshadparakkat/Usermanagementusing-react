import { Routes, Route,redirect, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import SignupPage from '../Pages/User/SignupPage';
import LoginPage from '../Pages/User/LoginPage';
import HomePage from '../Pages/User/HomePage';
import Myaccount from '../Pages/User/Myaccount';
import EditprofilePage from '../Pages/User/EditprofilePage';


function User() {

    let user = useSelector((state) => state.user)
    return (
        <div>
            <Routes>
                <Route path='/' element={  <HomePage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/login' element={user.userToken ? <Navigate replace to="/" /> : <LoginPage />} />
                <Route path='/myaccount' element={user.userToken ? <Myaccount /> : <Navigate replace to="/login" />} />
                <Route path='/editaccount' element={user.userToken ? <EditprofilePage /> : <Navigate replace to="/login" />} />
            </Routes>
        </div>
    )
}







export default User

