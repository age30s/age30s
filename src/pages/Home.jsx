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
        Hi, I’m Adithya, a computer science major with a finance minor at the University of Illinois Chicago. I’m passionate about leveraging technology for social good and exploring innovative solutions for global issues. My current interests include large-scale data processing, wearable technology, and crafting engaging, interactive user experiences
      </p>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Home