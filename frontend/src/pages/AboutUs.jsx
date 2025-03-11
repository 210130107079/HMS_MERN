import Hero from '../components/Hero'
import {assets} from '../../public/assets.js'
import Biography from '../components/Biography.jsx'

const AboutUs = () => {
  return (
    <>
      <Hero title={"Learn More About MediCare"} imageUrl={assets.About}/>
      <Biography imageUrl={"/whoweare.png"}/>
    </>
  )
}

export default AboutUs