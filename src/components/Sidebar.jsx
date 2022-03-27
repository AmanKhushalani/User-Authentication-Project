import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {

    const path = useLocation()

    const logout = () => {
        localStorage.setItem('login', "false");
    }


    let a = useLocation();

    const history = (e) => {
        console.log(a, e.target.innerText)
    }

    return <>
        <div id="sidebar">
            <NavLink className="profile sidebarTab" to={"/dashboard/profile"}>
                <i className='bx bxs-user-circle' ></i>Profile
            </NavLink>
            <div className="seperator"></div>
            <NavLink className="sidebarTab" to={"/dashboard/users"} >
                <i className='bx bxs-user-rectangle'></i>Users
            </NavLink>
            <NavLink className="sidebarTab" to={"/dashboard/messages"}>
                <i className='bx bxs-chat' ></i>Messages
            </NavLink>

            <div className="seperator"></div>
            <NavLink onClick={logout} to={"/login"} className="sidebarTab">
                <i className='bx bx-log-out-circle'></i>Logout
            </NavLink>
        </div>
    </>
}


export default Sidebar;