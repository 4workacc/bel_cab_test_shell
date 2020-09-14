import React, { useState, useEffect } from 'react';
import './index.css';

import OnePic from './onePic/OnePic';

import fons from './fons';
import pics from './pics';

const GF_Game = ( props ) => {
    let clearDiv = <div className = "GF_pic"></div>;
    const [ curPicsBackArr, changePicsBack ] = useState([pics[0],pics[0],pics[0],pics[0],pics[0],pics[0],pics[0],pics[0],pics[0],pics[0]]);
    const [ curPicsArr, setCurPicsArr ] = useState( );
    const [ curWord, changeCurWord ] = useState("");

    let GF_but_handler = () => {         
       
        if ( curWord != "" ) {
            let searchPic = curWord.toUpperCase();
            let ind = -1;
            for ( let i=0; i<pics.length; i++ ){                                
                if (pics[i].split('.')[0].split('/')[3] === searchPic)
                {
                    ind = i;
                    break;
                }                 
            }            
            if (  ind != -1 )  {
                console.log(pics[ind]);
                let arr = curPicsArr||[];
                arr.push( <OnePic pic = { pics[ ind ]} key = {1}/>);
                setCurPicsArr( arr );
            }            
        }              
    }; 
  
    return (
        <div 
            className = "GF_Game" 
            
            style = {{ backgroundImage : "url("+fons[props.back]+")"}}
            
            >            
                <input 
                    type = "text"
                    className = "GF_word"
                    onChange = {(e)=>{ changeCurWord( e.target.value ) }}
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