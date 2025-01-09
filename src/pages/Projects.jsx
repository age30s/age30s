import "./projects.css"
import Panel from "../components/Panel.jsx"
import patientflow from "../assets/patientflow.png"

export default function Projects(){
    return(
        <div>
            <Panel title={'Patient Flow'} line1={'Patient tracker with directory management for hospitals and physcians'} line2={'React, TailWind CSS, TSQL, C#'} img={patientflow} link={''}/>
            <Panel title={'Messager'} line1={'Patient tracker with directory management for hospitals and physcians'} line2={'React, TailWind CSS, TSQL, C#'} img={patientflow} link={''}/>
            <Panel title={'Spark Quest'} line1={'Patient tracker with directory management for hospitals and physcians'} line2={'React, TailWind CSS, TSQL, C#'} img={patientflow} link={''}/>
        </div>
    )
}