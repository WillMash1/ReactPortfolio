
import {React,  useState} from 'react'
import './index.scss'

// import ProjectTwo from 'react/portfolio/src/assets/images/ProjectTwo.PNG'
function Projects() {
  const [isShown, setIsShown] = useState(false);
  const [buttonTwoShown, setButtonTwoShown] = useState(false)
  

 const removeButton = function () {
    setIsShown(bool => false);
  }
 const showButton = function () {
    setIsShown(bool => true);
  }
 const removeButtonTwo = function () {
    setButtonTwoShown(bool => false);
  }
 const showButtonTwo = function () {
    setButtonTwoShown(bool => true);
  }







  return (
    <>
    <div  className="projects-section">
    <div className="projects_container">
    <div className="projects-container-react">

                    <div className="react-projects" id='react-projects-display'> 
                <div onMouseEnter={ showButton} onMouseLeave={removeButton}   className="flip-card project-one" id='project-one-flip-card'>
                    <div className="front one" id='project-one-home' style={{backgroundImage: require('./ProjectOne.PNG') }}>
                    <h1 id='main-project-title-one' className="text-shadow">React Feedback App</h1>
                    </div>
                    <div className="back" id='backOne'>
                    <h2  id='project-title'>Travel Site</h2>
                    <p  id='project-text' >Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    <a style={{display: isShown ? 'block' : 'none'}} id='project-link' target='_blank' rel="noreferrer"  href='https://stellar-cendol-76b2f2.netlify.app/'  className="flat-button">View Site  </a>
                    </div>
                </div>
                <div onMouseEnter={ showButtonTwo} onMouseLeave={removeButtonTwo} className="flip-card project-two" id='project-two'>
                    <div className="front two"  id='project-two-home'>
                    <h1 id='main-project-title-two' className="text-shadow">Javascript Memory Game</h1>
                    </div>
                    <div className="back" id='backTwo'>
                    <h2  id='project-title'>Feedback App</h2>
                    <p  id='project-text'>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    <a style={{display: buttonTwoShown ? 'block' : 'none'}} id='project-link' target='_blank'  rel="noreferrer" href='https://willmash1.github.io/MemoryGame/'  className="flat-button">View Site  </a>
                    
                    </div>
                </div>
                </div>
            </div>
        
    </div>
           <a  className="flat-button" id='projects-button' href="/work">Full Portfolio</a>
    </div>
    </>
  )
}

export default Projects