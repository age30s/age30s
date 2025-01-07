import "./footer.css"
import github from "../assets/GithubLogo.png"
import linkedin from "../assets/LinkedInLogo.svg"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="b">
           <a href="https://www.github.com/age30s"><img src={github} className="git" alt="github" /></a>
           <a href="https://www.linkedin.com/in/adithya-p-81b054230/"><img src={linkedin} className="lin" alt="linkedin" /></a>
           </div>
        </footer>
    )
}