import React from "react";
import { Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";

import Sidebar from './components/Sidebar'
import Error from './components/Error'
import Login from './components/Login'
import Profile from './components/Profile'
import Users from "./components/Users";
import Messages from "./components/Messages";

const App = () => {

    const initialiseStorage = ()=>{
        if(localStorage.getItem('login') == undefined)
            localStorage.setItem('login' , "false");
    }
    initialiseStorage();

    
    
    return <>
        <Routes>
            <Route exact path="/" element={ <Login /> } />
            <Route exact path="/login" element={ <Login /> } />
            <Route exact path="/dashboard" element={ <Navigate replace to={'/dashboard/profile'} /> } />
            <Route exact path="/dashboard/profile" element={ <Profile /> } />
            <Route exact path="/dashboard/users" element={ <Users /> } />
            <Route exact path="/dashboard/messages" element={ <Messages /> } />
            <Route path="*" element={<Error />}></Route>
        </Routes>
    </>;
}

export default App;