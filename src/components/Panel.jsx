import "./panel.css"

export default function Panel ({title, line1, line2, link, img}) {
    return(
        <div className="parent">
            <div className="panel-bg">
                <h2>
                    {title}
                </h2>
                <img className="proj-img" src={img} alt="proj"/>
                <p>{line1} </p>
                <p className="tools">{line2} </p> 
                <p> {link} </p>
            </div>
        </div>
    )
}
