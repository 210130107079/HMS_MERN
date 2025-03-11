import { useContext, useState } from "react"
import { Context } from "../main"
import axios from "axios"
import {TiHome} from 'react-icons/ti'
import {RiLogoutBoxFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaUser, FaUserDoctor} from 'react-icons/fa6'
import {MdAddModerator} from 'react-icons/md'
import {IoPersonAddSharp} from 'react-icons/io5'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


const Sidebar = () => {

    const [show,setShow] = useState(false)
    const {isAuthenticated,setIsAuthenticated} = useContext(Context)
    const navigate = useNavigate()

    const gotoHome = () => {
        navigate("/")
        setShow(!show)
    }
    const gotoDoctors = () => {
        navigate("/doctors")
        setShow(!show)
    }
    const gotoMessages = () => {
        navigate("/messages")
        setShow(!show)
    }
    const gotoAddNewDoctor = () => {
        navigate("/doctor/addnew")
        setShow(!show)
    }
    const gotoAddNewAdmin = () => {
        navigate("/admin/addnew")
        setShow(!show)
    }

    const handleLogout = async () => {
        await axios.get("http://localhost:4444/api/user/admin/logout",{withCredentials:true})
           .then((res) => {
                toast.success(res.data.message)
                setIsAuthenticated(false)
                navigate("/login")
            })
           .catch((err)=>{
                toast.error(err.response.data.message)
            })
    }

  return (
    <>
    <nav style={!isAuthenticated ? {display:"none"}:{display:"flex"}} className={show ? "show sidebar" : "sidebar"} >
        <div className="links">
            <TiHome onClick={gotoHome} />
            <FaUserDoctor onClick={gotoDoctors} />
            <MdAddModerator onClick={gotoAddNewAdmin} />
            <IoPersonAddSharp onClick={gotoAddNewDoctor} />
            <AiFillMessage onClick={gotoMessages} />
            <RiLogoutBoxFill onClick={handleLogout} />
        </div>
    </nav>
    <div className="wrapper" style={!isAuthenticated ? {display:"none"} : {display:"flex"}}>
        <GiHamburgerMenu className="hamburger" onClick={()=> setShow(!show)} />
    </div>
    </>
  )
}

export default Sidebar