import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'
import {assets} from '../../public/assets.js'
const Home = () => {
  return (
    <>
      <Hero title={"Welcome to Medi Care Medical Institute | Your Trusted Healthcare Provider."} imageUrl={assets.Hero} />
      <Biography imageUrl={assets.About}/>
      <Departments />
      <MessageForm />
    </>
  )
}

export default Home