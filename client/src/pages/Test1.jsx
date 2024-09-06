import React, { useState } from "react";

const Test1 = ({ section, number }) => {


    const [buttonStates,setButtonStates] = useState({
        1:'testb',
        2:'testb',
        3:'testb'
    })

    const letter1 = String.fromCharCode(97 + section * 3)
    const letter2 = String.fromCharCode(97 + section * 3 + 1)
    const letter3 = String.fromCharCode(97 + section * 3 + 2)

    const letter = String.fromCharCode(97 + section * 3 + number - 1)

    const handleClick = (select) => {
        setButtonStates(prevState => ({
            ...prevState,
            [select]: select === number ? 'testb_correct' : 'testb_wrong'
        }));
    }


    return (
        <div className="test_box">
            <h1>Select the Correct option for letter: {letter}</h1>
            
            <div>
                <button className={buttonStates[1]} onClick={() => handleClick(1)}>
                    <img src={`./Alphabets/${letter1}.png`} alt={`${letter1} in ALS`}/>
                </button>
                <button className={buttonStates[3]} onClick={() => handleClick(3)}>
                    <img src={`./Alphabets/${letter3}.png`} alt={`${letter3} in ALS`}/>
                </button>
                <button className={buttonStates[2]} onClick={() => handleClick(2)}>
                    <img src={`./Alphabets/${letter2}.png`} alt={`${letter2} in ALS`}/>
                </button>
            </div>
        </div>
    )
}

export default Test1