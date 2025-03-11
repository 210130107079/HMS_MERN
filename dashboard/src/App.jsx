import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import AddNewDoctor from './components/AddNewDoctor'
import AddNewAdmin from './components/AddNewAdmin'
import Messages from './components/Messages'
import axios from 'axios'
import Doctors from './components/Doctors'
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useEffect } from 'react'
import {Context} from './main'
import Sidebar from './components/Sidebar'

function App() {

  const {isAuthenticated,setIsAuthenticated,setUser} =useContext(Context)

  useEffect(()=>{
    const fetchUser = async () => {
      try
      {
        const response = await axios.get("http://localhost:4444/api/user/admin/me",{withCredentials:true})
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
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/doctor/addnew' element={<AddNewDoctor/>} />
          <Route path='/admin/addnew' element={<AddNewAdmin/>} />
          <Route path='/messages' element={<Messages/>} />
          <Route path='/doctors' element={<Doctors/>} />
        </Routes>
        <ToastContainer/>
      </Router>
    </>
  )
}

export default App
