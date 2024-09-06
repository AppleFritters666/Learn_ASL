import React,{ useState } from "react";
import axios from 'axios';


const Login = ({setUser}) =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async () =>{
        try{
            const response = await axios.post('http://127.0.0.1:5000/logging_in',{username:username,password:password});
            if (response.data.valid) {
                setUser(username); 
            }
            else{
                alert(response.data.message); 
            }
        }
        catch (error){
            alert('An error has occured during login')
        }

    }
    
    const handleSignIn = async () => {
        try{
            const response = await axios.post('http://127.0.0.1:5000/signing_up',{username:username,password:password})
            if (response.data.success){
                setUser(username);
            }
            else{
                alert(response.data.message); 
            }
        }
        catch(error){
            alert(error);
        }
    }

    return(
        <div>
            <div>
                <div className="class1">
                    <h2>Username</h2>
                    <input type="username" placeholder="johnsmith2000" onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div className="class1">
                    <h2>password</h2>
                    <input type='password' onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <div className="class1">
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleSignIn}>Sign-up</button>
                </div>
            </div>
        </div>
    )
}

export default Login