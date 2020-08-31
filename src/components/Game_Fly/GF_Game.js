import React, { useState, useEffect } from 'react';
import './index.css';

import fons from './fons';
import pics from './pics';

const GF_Game = ( props ) => {
    const [ curPicsArr, setCurPicsArr ] = useState( [<div    
        className = "GF_pic"
        style = {{ backgroundImage : "url("+pics[0]+")"}}>
        </div>] );

    let GF_but_handler = () => {
        let arr = curPicsArr;
        arr.push(
            <div    
                className = "GF_pic"
                style = {{ backgroundImage : "url("+pics[0]+")"}}>
                </div>
        );
        setCurPicsArr(arr);        
    };  
    return (
        <div 
            className = "GF_Game" 
            style = {{ backgroundImage : "url("+fons[props.back]+")"}}>            
                <input 
                    type = "text"
                    className = "GF_word"
                    />
                <button 
                    className = "GF_but"
                    onClick = {() => GF_but_handler() }>
                        Знайсці
                </button>                
            Game
            { curPicsArr }
        </div>
    )
}

export default GF_Game;