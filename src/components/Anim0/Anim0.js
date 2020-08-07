import React, { useState, useEffect } from 'react';
import './Anim0.css';

import arr from './arr.js';

const Anim0 = () => {
    const [PicsArr, SetPicsArr ] = useState([[]]);    
    let shuffle = (a) => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }
    useEffect (()=>{    
        shuffle(arr); 
        SetPicsArr( arr );             
    },[]);
    return (
        <div className = "anim0">      
             {PicsArr[0][0]}
        </div>
    )
}

export default Anim0;