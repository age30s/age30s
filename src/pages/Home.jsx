import "../App.css"
import Navbar from "../components/Navbar.jsx"
// import Pic from "../assets/me.png"
import Footer from "../components/Footer.jsx"
import Pic from "../assets/pngme.png"

function Home() {

  return (
    <>
    <div className='rubik-ten'>
    <Navbar/>
    <div className='cont'>
      <div className='container'>
        <div>
          <img src={Pic} className="pic" alt="me" />
        </div>
      </div>
      <div>
      <div className='text'>
        <h1>Adithya Prasad</h1>
        <h2>CS major + Finance minor at the <b className='highlight'> University of Illinois at Chicago</b></h2>
      </div>
      <p className='p-cl'>
        Hi there! I'm Adithya, a computer science major minoring in finance <br></br>at the University of Illinois at Chicago.<br></br>
        Although it wasn't until high school that I was able to discover <br></br>the world of technology and programming, <br></br>I've always 
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