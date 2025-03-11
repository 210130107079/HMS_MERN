import { useContext, useState } from "react"
import { Context } from "../main"
import { Navigate, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

const Login = () => {

  const {isAuthenticated,setIsAuthenticated} = useContext(Context)

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e) => { 
    e.preventDefault()
    try
    {
      const response = await axios.post("http://localhost:4444/api/user/login",{email,password,role:"Patient"},{
        withCredentials:true,
        headers: {'Content-Type': 'application/json'}
      })
      toast.success(response.data.message)
      setIsAuthenticated(true)
      navigate("/")
    }
    catch(error)
    {
      toast.error(error.response.data.message)
    }
  }

  if(isAuthenticated){
    return <Navigate to={"/"}/> 
  }

  return (
    <div className="container form-component login-form">
      <h2>Log In</h2>
      <p>PLease Login to Continue...</p>
        <form onSubmit={handleLogin}>
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email"/>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password.." />
          <div style={{gap:"10px",justifyContent:"flex-end",flexDirection:"row"}}>
            <p style={{marginBlock:0}}>Not Registered Yet ?</p>
            <Link style={{textDecoration:"none",alignItems:"center"}} to={"/register"} >Register Here...</Link>
          </div>
          <div style={{justifyContent:"center",alignItems:"center"}}>
            <button type="submit">Log In</button>
          </div>
        </form>
    </div>
  )
}

export default Login