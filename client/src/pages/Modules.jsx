import React,{useState} from "react"
import arrow from '../assets/arrow.svg'
import Section from './Section.jsx'


const Modules = ({user}) => {

    const [section,setSection] = useState(null); 

    const alphabets = ['a,b,c','d,e,f','g,h,i','j,k,l','m,n,o','p,q,r','s,t,u','v,w,x','y,z']
    return(
        <div>
            <div className="modules_box">
                {section === null && alphabets.map((alpha,index) => {
                    return(
                    <div className="box" key={index}>
                        <div>Module {index+1} : {alpha}</div>
                        <button onClick={() => setSection(index)}>
                        <img src = {arrow} className="arrow_logo"></img>
                        </button>
                    </div> 
                    ) 
                })}
            </div>
            {section !== null && <Section section={section} setSection = {setSection}/>}
        </div>
    )
} 



export default Modules ; 
