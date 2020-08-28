import React , { useState, useEffect }from 'react';
import './index.css';

import vocab from './vocab';

const smallFons = [
    require("./fonSmall/smallFon0.png"),
    require("./fonSmall/smallFon1.png"),
    require("./fonSmall/smallFon2.png"),
    require("./fonSmall/smallFon3.png"),
    require("./fonSmall/smallFon4.png"),
    require("./fonSmall/smallFon5.png"),
    require("./fonSmall/smallFon6.png"),
    require("./fonSmall/smallFon7.png"),
    require("./fonSmall/smallFon8.png"),
    require("./fonSmall/smallFon9.png"),
    require("./fonSmall/smallFon10.png"),
    require("./fonSmall/smallFon11.png"),
    require("./fonSmall/smallFon12.png"),
    require("./fonSmall/smallFon13.png"),
    require("./fonSmall/smallFon14.png"),
    require("./fonSmall/smallFon15.png"),
    require("./fonSmall/smallFon16.png"),
    require("./fonSmall/smallFon17.png"),
    require("./fonSmall/smallFon18.png"),
    require("./fonSmall/smallFon19.png"),
    require("./fonSmall/smallFon20.png"),
    require("./fonSmall/smallFon21.png"),
    require("./fonSmall/smallFon22.png"),
    require("./fonSmall/smallFon23.png"),
    require("./fonSmall/smallFon24.png"),
    require("./fonSmall/smallFon25.png"),
    require("./fonSmall/smallFon26.png"),
    require("./fonSmall/smallFon27.png"),
    require("./fonSmall/smallFon28.png"),
    require("./fonSmall/smallFon29.png"),
]
const fons = [
    require("./fon/smallFon0.png"),
    require("./fon/smallFon1.png"),
    require("./fon/smallFon2.png"),
    require("./fon/smallFon3.png"),
    require("./fon/smallFon4.png"),
    require("./fon/smallFon5.png"),
    require("./fon/smallFon6.png"),
    require("./fon/smallFon7.png"),
    require("./fon/smallFon8.png"),
    require("./fon/smallFon9.png"),
    require("./fon/smallFon10.png"),
    require("./fon/smallFon11.png"),
    require("./fon/smallFon12.png"),
    require("./fon/smallFon13.png"),
    require("./fon/smallFon14.png"),
    require("./fon/smallFon15.png"),
    require("./fon/smallFon16.png"),
    require("./fon/smallFon17.png"),
    require("./fon/smallFon18.png"),
    require("./fon/smallFon19.png"),
    require("./fon/smallFon20.png"),
    require("./fon/smallFon21.png"),
    require("./fon/smallFon22.png"),
    require("./fon/smallFon23.png"),
    require("./fon/smallFon24.png"),
    require("./fon/smallFon25.png"),
    require("./fon/smallFon26.png"),
    require("./fon/smallFon27.png"),
    require("./fon/smallFon28.png"),
    require("./fon/smallFon29.png"),
]

const Game_Fly = () => {
   
    
    const [ menuPoint, changeMenuPoint ] = useState( "Menu" );
    const [ curBack, setCurBack ] = useState(0);

    let Menu = 
        <div className = "GF_Menu">
            <div className = "GF_Menu_inner">
                <div 
                    id="GF_fon0" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[0]+")"}} 
                    onClick = {() =>smallFonClickHandler(0)}></div>
                <div 
                    id="GF_fon1" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[1]+")"}}
                    onClick = {() =>smallFonClickHandler(1)}></div>
                <div 
                    id="GF_fon2" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[2]+")"}}
                    onClick = {() =>smallFonClickHandler(2)}></div>
                <div 
                    id="GF_fon3" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[3]+")"}}
                    onClick = {() =>smallFonClickHandler(3)}></div>
                <div 
                    id="GF_fon4" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[4]+")"}}
                    onClick = {() =>smallFonClickHandler(4)}></div>
                <div 
                    id="GF_fon5" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[5]+")"}}
                    onClick = {() =>smallFonClickHandler(5)}></div>
            </div>
            <div className = "GF_Menu_inner">
                <div 
                    id="GF_fon6" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[6]+")"}}
                    onClick = {() =>smallFonClickHandler(6)}></div>
                <div 
                    id="GF_fon7" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[7]+")"}}
                    onClick = {() =>smallFonClickHandler(7)}></div>
                <div 
                    id="GF_fon8" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[8]+")"}}
                    onClick = {() =>smallFonClickHandler(8)}></div>
                <div 
                    id="GF_fon9" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[9]+")"}}
                    onClick = {() =>smallFonClickHandler(9)}></div>
                <div 
                    id="GF_fon10" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[10]+")"}}
                    onClick = {() =>smallFonClickHandler(10)}></div>
                <div 
                    id="GF_fon11" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[11]+")"}}
                    onClick = {() =>smallFonClickHandler(11)}></div>
            </div>
            <div className = "GF_Menu_inner">         
                <div 
                    id="GF_fon12" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[12]+")"}}
                    onClick = {() =>smallFonClickHandler(12)}></div>
                <div 
                    id="GF_fon13" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[13]+")"}}
                    onClick = {() =>smallFonClickHandler(13)}></div>
                <div 
                    id="GF_fon14" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[14]+")"}}
                    onClick = {() =>smallFonClickHandler(14)}></div>
                <div 
                    id="GF_fon15" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[15]+")"}}
                    onClick = {() =>smallFonClickHandler(15)}></div>
                <div 
                    id="GF_fon16" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[16]+")"}}
                    onClick = {() =>smallFonClickHandler(16)}></div>
                <div 
                    id="GF_fon17" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[17]+")"}}
                    onClick = {() =>smallFonClickHandler(17)}></div>
            </div>
            <div className = "GF_Menu_inner">
                <div    
                    id="GF_fon18" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[18]+")"}}
                    onClick = {() =>smallFonClickHandler(18)}> </div>
                <div 
                    id="GF_fon19" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[19]+")"}}
                    onClick = {() =>smallFonClickHandler(19)}></div>           
                <div 
                    id="GF_fon20" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[20]+")"}}
                    onClick = {() =>smallFonClickHandler(20)}></div>
                <div 
                    id="GF_fon21" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[21]+")"}}
                    onClick = {() =>smallFonClickHandler(21)}></div>
                <div 
                    id="GF_fon22" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[22]+")"}}
                    onClick = {() =>smallFonClickHandler(22)}></div>
                <div 
                    id="GF_fon23" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[23]+")"}}
                    onClick = {() =>smallFonClickHandler(23)}></div>
            </div>
            <div className = "GF_Menu_inner">
                <div 
                    id="GF_fon24" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[24]+")"}}
                    onClick = {() =>smallFonClickHandler(24)}></div>   
                <div 
                    id="GF_fon25" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[25]+")"}}
                    onClick = {() =>smallFonClickHandler(25)}></div>
                <div 
                    id="GF_fon26" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[26]+")"}}
                    onClick = {() =>smallFonClickHandler(26)}></div>
                <div 
                    id="GF_fon27" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[27]+")"}}
                    onClick = {() =>smallFonClickHandler(27)}></div>
                <div 
                    id="GF_fon28" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[28]+")"}}
                    onClick = {() =>smallFonClickHandler(28)}></div>
                <div 
                    id="GF_fon30" 
                    class="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[29]+")"}}
                    onClick = {() =>smallFonClickHandler(29)}></div>
             </div>
        </div>;
    let Game = '';
        

    const [ curScreen, setCurScreen ] = useState(Menu);

    let smallFonClickHandler = ( i ) => {        
        setCurBack( i );
        setCurScreen(<div 
            className = "GF_Game" 
            style = {{ backgroundImage : "url('"+fons[i]+"')"}}>Game</div>   );
    };
    
    return (
        <div className = "Game_Fly">           
            { curScreen }
        </div>
    )
}

export default Game_Fly;