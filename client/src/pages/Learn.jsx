import React,{useState} from 'react'; 
import Webcam from "react-webcam";

const Learn = ({letter}) => {
    return(
        <div >
            <div>
                <h2>View the image to learn how to sign the letter '{letter}' and practice it.</h2>
                <h1>Letter: {letter}</h1>
            </div>
            <div className='learn_box'>
                <img src={`./Alphabets/${letter}.png`} alt={`${letter} in ALS`}/>
                <Webcam />

            </div>
        </div>
    )
}

export default Learn;