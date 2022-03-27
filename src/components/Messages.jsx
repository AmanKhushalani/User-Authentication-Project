import { Navigate } from 'react-router-dom';
import { verifyUser } from '../Js/verifyUser';
import Sidebar from './Sidebar'
const Messages = () => {

    if(verifyUser() == "false")
    {
        return <Navigate replace to={'/login'} />;
    }
    
    return <div id="dashboard">

                <Sidebar />            
                <div id="mainContainer">
                    this is messages !
                </div>

            </div>
}

export default Messages;