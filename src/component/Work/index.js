import {useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'


function Work() {
    const [isShown, setIsShown] = useState(false);
    const [buttonTwoShown, setButtonTwoShown] = useState(false)
    const [buttonThreeShown, setButtonThreeShown] = useState(false)
    const [buttonFourShown, setButtonFourShown] = useState(false)
    const [buttonFiveShown, setButtonFiveShown] = useState(false)
    const [buttonSixShown, setButtonSixShown] = useState(false)
    
    
  
   const removeButton = function () {
      setIsShown(bool => false);
      setButtonTwoShown(bool => false);
      setButtonThreeShown(bool => false);
      setButtonFourShown(bool => false);
      setButtonFiveShown(bool => false);
      setButtonSixShown(bool => false);
    }



   const showButton = function () {
    setIsShown(bool => true);
    }
   const showButtonTwo = function () {
    setButtonTwoShown(bool => true);
    }
   const showButtonThree = function () {
    setButtonThreeShown(bool => true);
    }
   const showButtonFour = function () {
    setButtonFourShown(bool => true);
    }
   const showButtonFive = function () {
    setButtonFiveShown(bool => true);
    }
   const showButtonSix = function () {
    setButtonSixShown(bool => true);
    }
//    const removeButtonTwo = function () {
//       setButtonTwoShown(bool => false);
//     }
//    const showButtonTwo = function () {
//       setButtonTwoShown(bool => true);
//     }
  
  
  

  return (
    <>
        <div className="all-projects">
                <div id='react-projects-row' className="projects-container react">
                    <h1 id='react-title'>React Projects</h1>
                    <div className="react-projects"> 
                <div onMouseEnter={ showButton} onMouseLeave={removeButton}  className="flip ">
                    <div className="front one" style={{backgroundImage: require('./ProjectOne.PNG') }}>
                    <h1 className="text-shadow">Travel Site</h1>
                    </div>
                    <div className="back">
                    <h2>Travel Site</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    <a style={{display: isShown ? 'block' : 'none'}}  target='_blank' rel="noreferrer" href='https://luminous-unicorn-b685e2.netlify.app/'  className="flat-button">View Site</a>
                    </div>
                </div>
                <div onMouseEnter={ showButtonTwo}  onMouseLeave={removeButton}  className="flip ">
                    <div className="front two">
                    <h1 className="text-shadow">Feedback App</h1>
                    </div>
                    <div className="back">
                    <h2>Feedback App</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    <a style={{display: buttonTwoShown ? 'block' : 'none'}}  target='_blank' rel="noreferrer" href='https://stellar-cendol-76b2f2.netlify.app' className="flat-button">View Site</a>
                    </div>
                </div>
                <div onMouseEnter={showButtonThree} onMouseLeave={removeButton}  className="flip ">
                    <div className="front three">
                    <h1 className="text-shadow">To Do List</h1>
                    </div>
                    <div className="back">
                    <h2>To Do List</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    <a  style={{display: buttonThreeShown ? 'block' : 'none'}} target='_blank' rel="noreferrer" href='https://serene-pika-0c70fe.netlify.app/' className="flat-button">View Site</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="projects-container javascript">
                <h1 id='javascript-title'>Javascript Projects</h1>
                <div className="javascript-projects">
            <div onMouseEnter={ showButtonFour}  onMouseLeave={removeButton}  className="flip ">
                <div className="front one" style={{backgroundImage: require('./ProjectOne.PNG') }}>
                <h1 className="text-shadow">Restaurant Site</h1>
                </div>
                <div className="back">
                <h2>Restaurant Site</h2>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                <a style={{display: buttonFourShown ? 'block' : 'none'}}  target='_blank' rel="noreferrer" href='https://willmash1.github.io/Restaurant-Site/'  className="flat-button">View Site</a>
                </div>
            </div>
            <div onMouseEnter={ showButtonFive} onMouseLeave={removeButton}  className="flip ">
                <div className="front two">
                <h1 className="text-shadow">Memory Game</h1>
                </div>
                <div className="back">
                <h2>Memory Game</h2>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                <a style={{display: buttonFiveShown ? 'block' : 'none'}}  target='_blank' rel="noreferrer"  href='https://willmash1.github.io/MemoryGame/' className="flat-button">View Site</a>
                </div>
            </div>
            <div onMouseEnter={ showButtonSix} onMouseLeave={removeButton}  className="flip ">
                <div className="front three">
                <h1 className="text-shadow">Video Game Netflix</h1>
                </div>
                <div className="back">
                <h2>Video Game Netflix</h2>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                <a style={{display: buttonSixShown ? 'block' : 'none'}}  target='_blank' rel="noreferrer" href='https://merry-faloodeh-822b91.netlify.app/' className="flat-button">View Site</a>
                </div>
            </div>
            </div>
            </div>
        </div>
       <Loader type='pacman' />
    </>
  )
}

export default Work