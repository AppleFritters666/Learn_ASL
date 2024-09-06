import React,{ useState } from "react";
import Webcam from "react-webcam";

const Test2 = ({letter}) => {
    return (
        <div>
            <h1>Show the correct Sign for the letter {letter}</h1>
            <Webcam />
        </div>
    )
}

export default Test2; 