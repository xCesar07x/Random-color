import { useState } from 'react';
import React from 'react';
import './App.css'
import users from "../src/users.json"
import colors from "../src/colors.json"


const QuoteBox = () => {

    const random = Math.floor(Math.random() * users.length)
    const [index, setIndex] =useState(random)
    
    const colorRandom = Math.floor(Math.random() * colors.length)
    const [color, setColor] = useState(colorRandom)

    const changeUser = () => {
        const clickRandom = Math.floor(Math.random() * users.length);
        setIndex(clickRandom)
        const colorRan = Math.floor(Math.random() * colors.length);
        setColor(colorRan)
    }

    document.body.style = `background: ${colors[color].hex}`
    // document.body.style = {background: "/src/assets/Academlo logo.png"}
    return (
        // className="App" style={{background: "whitesmoke"}}
        <div className="App" style={{background: "whitesmoke"}}>
          {/* <QuoteBox/> */}
          <div className='box'>
    
            <div className='icon-code' >
            {/* fill: "red" */}
            {/* fill: `${colors[color].hex}` */}
            <svg style={{fill: `${colors[color].hex}`}}
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/> </svg>
    
            </div>
    
            <h1 style={{color: [colors[color].hex]}}>
             "{users[index].quote}"
            </h1>
    
          </div>
          <div className="card">
    
            <p className='author'
            style={{color: [colors[color].hex]}}>
              {users[index].author}
            </p>
    
            <button className='button' onClick={changeUser} 
              style={{fill: "whitesmoke", 
              background: [colors[color].hex]}}>
                
                
               Next &hearts;
            </button>
    
          </div>
          
        </div>
    );
};

export default QuoteBox;