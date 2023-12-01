import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/userContext";

const Login = () => {
  const [loginUser, setLoginUser] = useState({});
  const {user,setUser}=useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginUser)
    Login();
  };

  const handleChange = (e) => {
    setLoginUser({...loginUser,[e.target.name]:e.target.value})
  };

  const Login=()=>{
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
  })
})
.then(res => res.json())
.then(res=>{
    console.log(res.token);
    if(res.token){
        setUser(res)
    }

});
  }

  return (
   <form action="" className="flex flex-col w-52 m-auto bg-[#929292] p-4 gap-4" onSubmit={handleSubmit}>
    <input onChange={handleChange} className="outline-none h-8 border text-black" type="text" name="username" id="" />
    <input onChange={handleChange} className="outline-none h-8 border text-black" type="text" name="password" id="" />
    <button className="text-black">Login</button>
   </form>
  );
};

export default Login;
