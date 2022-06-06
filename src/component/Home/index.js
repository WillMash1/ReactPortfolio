import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetter from '../AnimatedLetters'
import './index.scss'
import Projects from './Projects'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','W', 'i', 'l', 'l', '.']
    const jobArray = ['W', 'e', 'b', ' ',  'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']


    useEffect(() => {
         setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

      const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };


      const particlesOptions =  {
        background: {
          color: {
            value: "#2c2c2c",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 2500,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }

    return (
        <>
            
            <div className="container home-page" id='particle-js'>
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}>,</span>
                         <br/> 
                         <span className={`${letterClass} _14`}>I</span>
                         <span className={`${letterClass} _15`}>'</span>
                         <span className={`${letterClass} _16`}>m</span>

                    {/* <img src={LogoTitle} alt="developer" /> */}
                    <AnimatedLetter letterClass={letterClass}
                     strArray={nameArray}
                     idx={17}
                    />
                    <br/> 
                    <AnimatedLetter letterClass={letterClass}
                     strArray={jobArray}
                     idx={22}
                    />
                   
                    <br/>
                   
                    </h1>
                    <h2>
                        {/* Frontend Developer */}
                    </h2>
                    <Link id='contact-button' to='/contact' className='flat-button'>Contact Me</Link>
                </div>
                {/* <Logo/> */}
                <Projects/>
            </div>
           
            
                    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
            />

        <Loader type='pacman' /> 
        </>
    )
}


export default Home