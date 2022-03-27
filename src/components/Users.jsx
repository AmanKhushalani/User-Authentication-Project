import { Navigate } from "react-router-dom";
import { verifyUser } from "../Js/verifyUser";
import Sidebar from "./Sidebar";

const Users = () => {

    if (verifyUser() == "false") {
        return <Navigate replace to={'/login'} />;
    }

    return <div id="dashboard">
    
                <Sidebar />
                <div id="mainContainer">
                    this is users !
                </div>

            </div>
}

export default Users;