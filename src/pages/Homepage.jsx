import LandingPage from '../components/LandingPage'
import Services from '../components/Services'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import NavBar from "../components/NavBar";

const Homepage = () => {
  return (
    <div className='font-montserrat text-gray-300'>
      <NavBar/>
      <div className='mx-6'>
        <LandingPage/>
        <Services/>
        <About/>
        </div>
        <Skills/>
        <div className='mx-6'>
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
    </div>
  )
}

export default Homepage