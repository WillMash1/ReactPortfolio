import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faSass
  } from '@fortawesome/free-brands-svg-icons'
  import Loader from 'react-loaders'

const About = () => {

    return (
        <>
        <div className="container about-page">
            <div className="text-zone" id='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'b','o', 'u','t', ' ','M', 'e']}
                        idx={15}
                     />

                </h1>
                <p>
                    A web developer focused on front end engineering and building applications.   I love my role as a developer, and the people it has allowed me to meet. 
                    I am experienced in developing and maintaining websites and applications in Javascript, as  well as React. 
                </p>
                <p align="LEFT">
                    I like watching Marvel films, especially Dr. Strange. I also enjoy watching shows like Star Trek, and the Mandalorian. 
                    It’s what I do to relax at the end of the day.
                </p>
                <p>
                    I am a blue belt in Tae Kwon Do, having trained in it since I was a teenager. My training in martial arts is the source of my patience and discipline. 
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon aria-hidden='true' id='cube-icons' icon={faSass} color='#DD0031' />
                        
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon id='cube-icons' icon={faReact } color='#5ED4F4 ' />

                    </div>
                    <div className="face3">
                        <FontAwesomeIcon id='cube-icons' icon={faCss3} color='#28A4D9' />

                    </div>
                    <div className="face4">
                        <FontAwesomeIcon aria-hidden='true' id='cube-icons' icon={faHtml5} color='#F06529' />

                    </div>
                    <div className="face5">
                        <FontAwesomeIcon id='cube-icons' icon={faJsSquare} color='#EFD81D' />

                    </div>
                    <div className="face6">
                        <FontAwesomeIcon  id='cube-icons' icon={faGitAlt} color='#EC4D28' />

                    </div>
                </div>
            </div>

        </div>

        <Loader type="pacman"/>
        </>
    )
    
}



export default About