import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs'
import Appointment from './pages/Appointment'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar'
import { useContext, useEffect } from 'react'
import { Context } from './main'
import axios from 'axios'
import Footer from './components/Footer'


function App() {

  const {isAuthenticated,setIsAuthenticated,setUser} = useContext(Context)

  useEffect(()=>{
    const fetchUser = async () => {
      try
      {
        const response = await axios.get("http://localhost:4444/api/user/patient/me",{withCredentials:true})
        setIsAuthenticated(true)
        setUser(response.data.user)
      }
      catch(error)
      {
        setIsAuthenticated(false)
        setUser({})
      }
    }
    fetchUser()
  },[isAuthenticated])

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
        </Routes>
        <Footer/>
        <ToastContainer />
      </Router>
    </>
  )
}

export default App
