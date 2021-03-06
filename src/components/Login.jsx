import { useState } from "react";
import { Navigate, withRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {verifyUser} from '../Js/verifyUser'

const Login = () => {

    const [formData, changeFormData] = useState({
        userid: "",
        password: ""
    })


    const updateFormData = (e) => {
        changeFormData((prevValue) => {
            return {
                ...prevValue,
                [e.target.name]: e.target.value
            }
        })
    }

    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        if (formData.userid == "aman" && formData.password == "aman") {
            localStorage.setItem("login" , "true")
            navigate('/dashboard/profile')
        }
    }

    if(verifyUser() == "true")
    {
        return <Navigate replace to={'/dashboard/profile'} />;
    }

    return <>
        <div className="login">
            <div className="logo_container"><i className='bx bxs-user-circle'></i>Admino</div>
            <form action="" onSubmit={submit} method="POST">
                <div className="form_div_holder">
                    <div className="form_label">User-ID</div>
                    <input type="text" className="form_input" required spellCheck="false" name="userid" value={formData.userid} onChange={updateFormData} />
                </div>
                <div className="form_div_holder">
                    <div className="form_label">Password</div>
                    <input type="password" className="form_input" required name="password" value={formData.password} onChange={updateFormData} />
                </div>
                <div className="form_div_holder">
                    <button className="authenticate_button">Submit</button>
                </div>
            </form>
        </div>
    </>
}

export default Login;