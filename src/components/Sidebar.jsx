const Sidebar = () => {
    return <>
        <div id="sidebar">

            <div className="profile sidebarTab"><i className='bx bxs-user-circle' ></i> Profile</div>

            <div className="seperator"></div>

            <div className="sidebarTab"><i className='bx bxs-user-rectangle'></i> Users</div>
            <div className="sidebarTab"><i className='bx bxs-chat' ></i>Messages</div>
        </div>
    </>
}


export default Sidebar;