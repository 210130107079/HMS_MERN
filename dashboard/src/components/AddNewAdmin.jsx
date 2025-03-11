import { useContext, useState } from "react"
import {Context} from '../main'
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"

const AddNewAdmin = () => {

  const {isAuthenticated,setIsAuthenticated} = useContext(Context)

  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [gender,setGender] = useState("")
  const [dob,setDob] = useState("")
  const [nic,setNic] = useState("")

  const navigate = useNavigate()

  const handleAddNewAdmin = async(e) => {
    e.preventDefault()
    try
    {
      const role="Admin"
      const response = await axios.post("http://localhost:4444/api/user/admin/register",
        {firstName,lastName,email,phone,nic,dob,gender,password,confirmPassword,role},
        {withCredentials:true,headers:{"Content-Type": "application/json"}})
      toast.success(response.data.message)
      setIsAuthenticated(true)
      navigate("/")  
    }
    catch(error)
    {
      toast.error(error.response.data.message)
    }
  }

  if(!isAuthenticated){
    return <Navigate to={'/login'} />
  }

  return (
    <>
      <section className="page">
        <div className="container form-component add-admin-form">
          <h2>Add New Admin</h2>
          <form onSubmit={handleAddNewAdmin}>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <button type="submit">Add Admin</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AddNewAdmin