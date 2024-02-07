import { useEffect, useState } from "react"

import LoginPage from "./LoginPage";
import ManagementHome from "../ManagmentPage";
import MDetailsStore from "../../Data/Stores/MDetailsStore";

function AdminHome() {
  const [isLogin,setIsLogin]=useState(false);

  const Login=()=>{
    setIsLogin(true);
    MDetailsStore.setManagerEntrance(true);
  }

  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedPassword = localStorage.getItem('password');
    if(savedPassword&&savedName){
        Login();
    }
  },[])

  return (
    <> 
    {!isLogin?
    <LoginPage onLogin={Login}/>:
    <ManagementHome/>}
    </>
  )
}

export default AdminHome
