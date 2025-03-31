import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedinIn, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import Logo from './Logo';
const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-3 my-3 text-sm">
         <div>
            <Logo/>
        </div>
        <div className="flex gap-2 text-accent">
            <p className='hover:text-pritext'>Home</p>
            <p className='hover:text-pritext'>About</p>
            <p className='hover:text-pritext'>Services</p>
            <p className='hover:text-pritext'>Work Tools</p>
            <p className='hover:text-pritext'>Projects</p>
            <p className='hover:text-pritext'>Contact</p>
        </div>
           <div className="flex justify-around w-full">
                      <FontAwesomeIcon icon={faXTwitter} size='2x'/>
                      <FontAwesomeIcon icon={faGithub} size='2x'/>
                      <FontAwesomeIcon icon={faLinkedinIn} size='2x'/>
                      <FontAwesomeIcon icon={faWhatsapp} size='2x'/>
            </div>
            <div className='flex gap-2 text-xs'>
            <p>All rights reserved.<span className='font-bold'>ⓒ</span> 2025</p>
            <p>Afekhai Joseph ofuje</p>
            </div>
    </div>
  )
}

export default Footer