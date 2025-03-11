import AppointmentForm from "../components/AppointmentForm"
import Hero from '../components/Hero'

const Appointment = () => {
  return (
    <>
    <Hero title={"Schedule Your Appointment | MediCare"} imageUrl={"/signin.png"}/>
      <AppointmentForm/>
    </>
  )
}

export default Appointment