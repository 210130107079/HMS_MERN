import { useContext, useState } from "react"
import {Context} from '../main'
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const{isAuthenticated,setIsAuthenticated} = useContext(Context)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try
    {
      await axios.post("http://localhost:4444/api/user/login",{email,password,role:"Admin"},
        {
          withCredentials:true,
          headers: {'Content-Type': 'application/json'}
        }
      ).then((res)=>{
        toast.success(res.data.message)
        setIsAuthenticated(true)
        navigate("/")
        setEmail("")
        setPassword("")
      })
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
    <>
    <section className="container form-component">
      <img src="/logo.png" style={{height:"300px"}} alt="" className="logo" />
      <h1>WELCOME TO MEDICARE</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <div style={{ justifyContent:"center",alignItems:"center"}}>
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Login