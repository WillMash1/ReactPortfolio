import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-w.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faTerminal, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

    const closeMenu = ()=> {
        setClick(false)
    }

    
   return (
        <> 
        <div className="hamburger-icon">
            <FontAwesomeIcon onClick={handleClick} className='fas'  icon={click ? faTimes : faBars} color='#4d4d4de'/> 
            <div className={click ? 'mobile-nav-link-times' : 'mobile-nav-link-bars'}>
                <nav className='mobile-nav'>
                    <NavLink exact='true' activeclassname='active' to='/' className='mobile-link about-link' onClick={closeMenu}>
                        {/* <FontAwesomeIcon icon={faHome}  color='#4d4d4de'/>  */}
                        <h2>Home</h2>
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='mobile-link about-link' to='/about' onClick={closeMenu}>
                        {/* <FontAwesomeIcon icon={faUser} color='#4d4d4de'/>  */}
                        <h2>About</h2>
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='mobile-link work-link' to='/work' onClick={closeMenu}>
                        {/* <FontAwesomeIcon icon={faTerminal} color='#4d4d4de'/>  */}
                        <h2>My Work</h2>
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='mobile-link contact-link' to='/contact' onClick={closeMenu}>
                        {/* <FontAwesomeIcon icon={faEnvelope} color='#4d4d4de'/>  */}
                        <h2>Contact</h2>
                    </NavLink>
                </nav>
            </div>
        </div>
        <div className='nav-bar'>
        
        
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4de'/> 
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4de'/> 
                
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='work-link' to='/work'>
                <FontAwesomeIcon icon={faTerminal} color='#4d4d4de'/> 
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4de'/> 
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/will-mashhadi-5bb65b14a/">
                    <FontAwesomeIcon className='icon' icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://github.com/WillMash1">
                    <FontAwesomeIcon className='icon'  icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://twitter.com/MashhadiWill">
                    <FontAwesomeIcon className='icon'  icon={faTwitter} color="#4d4d4e"/>
                </a>
            </li>
            
        </ul>
    </div>
    </> )
}


export default Sidebar