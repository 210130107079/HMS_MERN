import { useEffect, useState } from "react"
import axios from "axios"
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const AppointmentForm = () => {

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [appointmentDate,setAppointmentDate] = useState("")
    const [gender,setGender] = useState("")
    const [dob,setDob] = useState("")
    const [nic,setNic] = useState("")
    const [department,setDepartment] = useState("")
    const [doctorFirstName,setDoctorFirstName] = useState("")
    const [doctorLastName,setDoctorLastName] = useState("")
    const [address,setAddress] = useState("")
    const [hasVisited,setHasVisited] = useState("")

    const navigate = useNavigate()

    const departmentArray = [
        "Pediatrics",
        "Orthopedics",
        "Cardiology",
        "Neurology",
        "Oncology",
        "Radiology",
        "Physical Therapy",
        "Dermatology",
        "ENT",
    ]

    const [doctors,setDoctors] = useState([])

    useEffect(()=>{
        const fetchDoctors=async () => {
            const {data} = await axios.get("http://localhost:4444/api/user/doctors/all",{withCredentials:true})
            setDoctors(data.doctors)
        }
        fetchDoctors()
    },[])

    const handleAppointment = async (e) => {
        e.preventDefault()
        try
        {
            const hasVisitedBool = Boolean(hasVisited)
            const {data} = await axios.post("http://localhost:4444/api/appointment/book",
                {firstName,lastName,email,phone,appointment_date:appointmentDate,gender,dob,nic,department,doctor_firstName:doctorFirstName,doctor_lastName:doctorLastName,hasVisited:hasVisitedBool,address},
            {withCredentials: true,headers:{'Content-Type':'application/json'}})
            toast.success(data.message)
            navigate("/")
        }
        catch(error)
        {
            toast.error(error.response.data.message)
        }        
    }

  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Book an Appointment</h2>
        <p>Continue Here...</p>
        <form onSubmit={handleAppointment}>
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
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="date" value={appointmentDate} placeholder="Appointment Date" onChange={(e)=>setAppointmentDate(e.target.value)} />
          </div>
          <div>
            <select value={department} onChange={(e)=>{setDoctorFirstName(""),setDoctorLastName(""),setDepartment(e.target.value)}}>\
                {
                    departmentArray.map((department,index)=>{
                        return (
                            <option key={index} value={department}>{department}</option>
                        )
                    })
                }
            </select>
            <select value={`${doctorFirstName} ${doctorLastName}`} onChange={(e)=>{
                const [firstName,lastName] = e.target.value.split(" ")
                setDoctorFirstName(firstName)
                setDoctorLastName(lastName)
            }}
            disabled={!department}>
                <option value="">Select Doctor</option>
                {
                    doctors.filter((doctor) => doctor.doctorDepartment === department).map((doctor, index)=>{
                        return (
                            <option key={index} value={`${doctor.firstName} ${doctor.lastName}`}>{doctor.firstName}{" "}{doctor.lastName}</option>
                        )
                    })
                }
            </select>
          </div>
          <textarea value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address" rows={4}></textarea>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBlock: 0 }}>Have You Visited Before ?</p>
            <input type="checkbox" checked={hasVisited} onChange={(e)=>setHasVisited(e.target.checked)}
            style={{flex:"none",width:"25px"}}/>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Book Appointment</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AppointmentForm