import React,{useState} from "react";
import Login from "./pages/Login";
import Modules from "./pages/Modules";

const Content = () =>{
    const [user,setUser] = useState('');
    return(
        <div className="content_box">
            {/* {!user && <Login setUser={setUser}/>}
            {user && <p>Welcome, {user}!</p>} */}
            <Modules user={user}/>
        </div>
    )
}
