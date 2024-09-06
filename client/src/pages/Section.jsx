import React,{useState} from 'react'; 
import Learn from './Learn.jsx';
import Test1 from './Test1.jsx'; 
import Test2 from './Test2.jsx';

const Section = ({section,setSection}) => {
    const [page,setPage] = useState(1);

    const letter1 = String.fromCharCode(97 + section*3)
    const letter2 = String.fromCharCode(97 + section*3 + 1)
    const letter3 = String.fromCharCode(97 + section*3 + 2)

    return(
        <div className='content_box'>
            {page === 1 && <Learn letter={letter1}/>}
            {page === 2 && <Learn letter={letter2}/>}
            {page === 3 && <Learn letter={letter3}/>}

            {page === 4 && <Test1 section={section} number = {1}/>}
            {page === 5 && <Test1 section={section} number = {2}/>}
            {page === 6 && <Test1 section={section} number = {3}/>}

            {page === 7 && <Test2 letter={letter1}/>}
            {page === 8 && <Test2 letter={letter2}/>}
            {page === 9 && <Test2 letter={letter3}/>}
            
            <button onClick={()=>setSection(null)}>Back</button>
            {page > 1 && <button onClick={() => setPage(page-1)}>Prev</button>}
            {page < 9 && <button onClick={() => setPage(page+1)}>Next</button>}
        </div>
    )
}

export default Section; 