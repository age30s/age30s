import "../App.css"
import Navbar from "../components/Navbar.jsx"
import Pic from "../assets/me.png"
import Footer from "../components/Footer.jsx"

function Home() {

  return (
    <>
    <div className='rubik-ten'>
    <Navbar/>
    <div className='cont'>
      <div className='container'>
      <div className='backdrop2'>
      </div>
        <div className='backdrop'>
        </div>
        <div>
          <img src={Pic} className="img" alt="me" />
        </div>
      </div>
      <div>
      <div className='text'>
        <h1>Adithya Prasad</h1>
        <h5>CS major + Finance minor at the <b className='highlight'> University of Illinois at Chicago</b></h5>
      </div>
      <p className='bg'>
        Hi there! I'm Adithya, a computer science major minoring in finance at the University of Illinois at Chicago.
        Although it wasn't until high school that I was able to discover the world of technology and programming, I've always 
        held a deep passion for the art of creating. 
      </p>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Home