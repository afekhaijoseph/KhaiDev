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
    <div className='font-sora text-gray-300'>
      <NavBar/>
      <div className='w-11/12
       mx-auto
        md:w-3/4'>
        <LandingPage/>
        <Services/>
        <About/>
        </div>
        <Skills/>
        <div className='w-11/12 mx-auto'>
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
    </div>
  )
}

export default Homepage