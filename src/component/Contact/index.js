import { useEffect, useRef, useState } from 'react'
import AnimatedLetter from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(()=> {
        setTimeout(() => {

            return  setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_jzfi4x4',
            'template_jenu0vd',
            refForm.current,
            'pV0hhCf4Mpo9co2BR'
            
        )
        .then(
            ()=> {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }
    return (
        <>
            <div id='contact-text' className="container contact-page">
                <div  className="text-zone" id='contact-text-zone'>
                    <h1>
                        <AnimatedLetter 
                        letterClass={letterClass}
                         strArray={['C', 'o','n', 't','a','c','t', ' ','M', 'e']} 
                        idx={12}
                        />
                    </h1>
                    <p>
                        I am open to new roles in tech. 
                        I am particularly interested in web development but if you have any opportunities you feel I may be suitable for feel free to reach out.
                    </p>
                    <div className="contact-form">
                        
                            <form ref={refForm} onSubmit={sendEmail} >
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder='message' required ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"/>
                                </li>
                        </ul>
                        </form>
                    </div>
                </div>
                <div className="icon-zone">
                    <div className="icon-container">
                    <a className='media-icon' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/will-mashhadi-5bb65b14a/">
                    <FontAwesomeIcon className='icon' icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                    <a className='media-icon' target='_blank' rel='noreferrer' href="https://github.com/WillMash1">
                    <FontAwesomeIcon className='icon' icon={faGithub} color="#4d4d4e"/>
                    </a>
                    <a className='media-icon' target='_blank' rel='noreferrer' href="skype:live:.cid.379bac90ded7b82e">
                    <FontAwesomeIcon className='icon' icon={faSkype} color="#4d4d4e"/>
                    </a>
                    </div>
                    <div className="contact-info">
                        <p id='mobile'>Mobile: 01752110253</p>
                        <p id='email'>Email: wmashhadi@gmail.com</p>
                    </div>
                </div>
            
            </div>
            {/* <Loader type='pacman' /> */}
        
        </>
    )
}


export default Contact