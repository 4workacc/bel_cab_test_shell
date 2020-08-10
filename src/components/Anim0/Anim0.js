import React, { useState, useEffect } from 'react';
import './Anim0.css';

import arr from './arr.js';

const Anim0 = () => {
    const [PicsArr, SetPicsArr ] = useState([[[],[],[],[],[]]]);    
    const [curQuest, SetCurQuest] = useState(0); 
    const [rightAnswer, AddRightAnswer ] = useState(0);
    
    useEffect (()=>{         
        let ar = [[],[],[],[],[]];
        let aq = [];
        let ind = 0; 
        while ( ind< 11 ) {
            let ii = Math.floor( Math.random()*arr.length);
            if ( aq.indexOf(ii) == -1 ) {
                aq[ind] = ii;
                ar[ind] = arr[ii];
                ind += 1; 
            }           
        }        
        SetPicsArr( ar );             
    },[]);
    return (
        <div>
            <div className = {curQuest<10?"anim0":"anim0_none"}>                 
                        <div className = {"anim0_pic0 anim0_pic_" + PicsArr[curQuest][4][0] +"_0"}></div>
                        <div className = {"anim0_pic1 anim0_pic_" + PicsArr[curQuest][4][0] +"_1"}></div>
                        <div className = "anim0_circleBar">
                            <div className = {"anim0_circle"}></div>
                            <div className = {"anim0_circle"}></div>
                            <div className = {"anim0_circle"}></div>
                            <div className = {"anim0_circle"}></div>
                            <div className = {"anim0_circle"}></div>
                            <div className = {"anim0_circle"}></div>
                            <div className = {"anim0_circle"}></div>
                            <div className = {"anim0_circle"}></div>
                            <div className = {"anim0_circle"}></div>
                            <div className = {"anim0_circle"}></div>
                        </div>
                        <div className = "anim0_fraz">
                            <p className = "anim0_fraz_fraz0">{PicsArr[curQuest][0][0]}</p>
                            <p className = "anim0_fraz_fraz1">{PicsArr[curQuest][0][1]}</p>
                            <p className = "anim0_fraz_fraz2">{PicsArr[curQuest][0][2]}</p>
                            <p className = "anim0_fraz_fraz3">{PicsArr[curQuest][0][3]}</p>
                        </div>
                        <div className = "anim0_sence">
                            <p className = "anim0_sence_sence0">{PicsArr[curQuest][1][0]}</p>
                            <p className = "anim0_sence_sence1">{PicsArr[curQuest][1][1]}</p>
                            <p className = "anim0_sence_sence2">{PicsArr[curQuest][1][2]}</p>
                            <p className = "anim0_sence_sence3">{PicsArr[curQuest][1][3]}</p>
                        </div>
                        <div 
                            className = "anim0_but"
                            onClick = {()=> SetCurQuest(curQuest + 1)}>                 
                        </div>
                    </div>
            <div className = {curQuest==10?"anim_rez":"anim0_none"}>rez</div>
        </div>
        
    )
}

export default Anim0;