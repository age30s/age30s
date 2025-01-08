import "./experiences.css"
import Navbar from "../components/Navbar.jsx"
import { useState } from "react"
import snorlax from "../assets/snorlax.gif"

const rawData = [
  {
    id: 0,
    title: 'Software Engineering Intern',
    line1: 'At Relativity, I was a software engineering intern on the front-end team. ',
    line2: '  + I worked on migrating the components from the outdated design system to the new and improved Storybook design system',
    line3: '  + Built additonal components that indicated migration status and stability of working and non-working components',
  },
  {
    id: 1,
    title: 'Undergraduate Research Assistant',
    line1: 'I was a research assistant and front-end developer for Cloudsweeper under Professor Chris Kanich ',
    line2: '  + Built, designed and documented web components on a newly created design system.',
    line3: '  + Worked with developing the intial webpage for users participating in the study',
  },
  {
    id: 2,
    title: 'Honors Ambassador',
    line1: 'I have had the privilege of representing the Honors College through various campus wide events.',
    line2: '  + Volunteered and lead various Honors College intiatives and events such as orientation and new student welcomes.',
    line3: '  + Have actively given insight on opportunities and support for roughly 200 students throughout each semester',
  },
  {
    id: 3,
    title: 'Undergrad TA',
    line1: 'Undergraduate Teaching Assistant for CS 361: Systems Programming',
    line2: '  + Assist students with debugging sessions in office hours',
    line3: '  + Support students in understanding core topics such as virtual memory management, thread synchronization, and compiliation process',
  },
]

function Experiences() {
  const [data] = useState(rawData)
  const [activeTab, setActiveTab] = useState(0)

  const handleRa = (num) => {
    setActiveTab(num);
  }

  return (
    <>
    <div className="rubik-ten">
    <Navbar/>
      <div className="tile">
      <div className="portal">
          {data
            .filter(({ id }) => id === activeTab) 
            .map(({ id, title, line1, line2, line3 }) => ( 
              <div className="views">
                <h1>{title}</h1>
                <div className="inner-p">
                <p>{line1}</p>
                <p className="p-2">{line2}<br></br>{line3}</p>
                </div>
              </div>
            ))
        }
        </div>
        <h2>
          <div className="l1">
            <div className= "wrapper" onClick={() => handleRa(0)}><li className="l2" > Software Engineering Intern </li></div>
            <div className= "wrapper" onClick={() => handleRa(1)}><li className="l2"> Cloudsweeper Research Assistant</li></div>
            <div className= "wrapper" onClick={() => handleRa(2)}><li className="l2"> Honors College Ambassador </li></div>
            <div className= "wrapper" onClick={() => handleRa(3)}><li className="l2"> Undergraduate Teaching Assitant </li></div>
          </div>
        </h2>
      </div>
      <div className="sleeping-img">
          <img src={snorlax} alt="snorlax"/>
        </div>
      </div>
    </>
  )
}

export default Experiences