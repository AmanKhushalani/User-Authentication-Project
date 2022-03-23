import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Error from "./components/Error";

const App = ()=>{
    return <>

    <Routes>
        <Route exact path="/"  element={<Login />} />
        
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />}></Route>
    </Routes>
    </>;
}

export default App;