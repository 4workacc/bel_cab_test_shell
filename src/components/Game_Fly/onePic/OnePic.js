import React, { useState, useEffect } from 'react';
import './OnePic.css';

const OnePic = ( props ) => {
    const [ key, setKey ] = useState( props.pic );
    return (
        <div             
            id = {key}
            onClick = {()=>{ alert(key)}}
            className = "OnePic"
            style = {{backgroundImage: `url(${props.pic})`}}>
        </div>
    )
}

export default OnePic;