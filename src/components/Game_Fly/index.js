import React , { useState, useEffect }from 'react';
import './index.css';

import vocab from './vocab';
import GF_Game from './GF_Game';

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
];

const pics = [
    require("./pics/АКУЛА.png"),
    require("./pics/АЛЕНЬ.png"),
    require("./pics/АЛЕНЯНЯ.png"),
    require("./pics/АЛІСА.png"),
    require("./pics/АНЁЛ.png"),
    require("./pics/АЎТАМАТ.png"),
    require("./pics/АСЁЛ.png"),
    require("./pics/АНЁЛАК.png"),
    require("./pics/БАБА_ЯГА.png"),
    require("./pics/БАБКА.png"),
    require("./pics/БАБУЛЯ.png"),
    require("./pics/БАБЁР.png"),
    require("./pics/БАРАВІК.png"),
    require("./pics/БАРАН.png"),
    require("./pics/БЕГЕМОТ.png"),
    require("./pics/БЕЛЫ_МЯДЗВЕДЗЬ.png"),
    require("./pics/БУЛЬБА.png"),
    require("./pics/БУРАЦІНА.png"),
    require("./pics/БЯРОЗА.png"),
    require("./pics/ВАВЁРКА.png"),
    require("./pics/ВАДЗЯНІК.png"),
    require("./pics/ВАРОНА.png"),
    require("./pics/ВАСЬМІНОГ.png"),
    require("./pics/ВАСІЛЬКІ.png"),
    require("./pics/ВЕРАБЕЙ.png"),
    require("./pics/ВОБЛАКА.png"),
    require("./pics/ВОЖЫК.png"),
    require("./pics/ВОЎК.png"),
    require("./pics/ВУСЕНЬ.png"),
    require("./pics/ВЯДЗЬМАРКА.png"),
    require("./pics/ГЕРКУЛЕС.png"),
    require("./pics/ГНОМ.png"),
    require("./pics/ГОЛУБ.png"),
    require("./pics/ГРЫБ.png"),
    require("./pics/ГРЫБНІК.png"),
    require("./pics/ДЗЕД.png"),
    require("./pics/ДЗЕД_МАРОЗ.png"),
    require("./pics/ДЗЯЎЧЫНКА.png"),
    require("./pics/ДЗІК.png"),
    require("./pics/ДОКТАР.png"),
    require("./pics/ДРАКОН.png"),
    require("./pics/ДЭЛЬФІН.png"),
    require("./pics/ЕЛКА.png"),
    require("./pics/ЖАБА.png"),
    require("./pics/ЖАНЧЫНА.png"),
    require("./pics/ЖАСМІН.png"),
    require("./pics/ЖЫРАФА.png"),
    require("./pics/ЗАЙЧАНЯ.png"),
    require("./pics/ЗАЙЧАНЁ.png"),
    require("./pics/ЗАМАК.png"),
    require("./pics/ЗАЯЦ.png"),
    require("./pics/ЗЕБРА.png"),
    require("./pics/ЗМЕЙ_ГАРЫНЫЧ.png"),
    require("./pics/ЗМЯЯ.png"),
    require("./pics/ЗОЛУШКА.png"),
    require("./pics/ЗУБР.png"),
    require("./pics/ЗЯЗЮЛЯ.png"),
    require("./pics/КАЛАБОК.png"),
    require("./pics/КАНЁК_ГАРБУНОК.png"),
    require("./pics/КАПІТАН_КРУК.png"),
    require("./pics/КАРАЛЕВА.png"),
    require("./pics/КАРАЛЕВІЧ.png"),
    require("./pics/КАРАЛІ.png"),
    require("./pics/КАРЛСАН.png"),
    require("./pics/КАРОВА.png"),
    require("./pics/КАРОЛЬ.png"),
    require("./pics/КАЦЯНЯ.png"),
    require("./pics/КАЧКА.png"),
    require("./pics/КАШЧЭЙ.png"),
    require("./pics/КЕНТАЎР.png"),
    require("./pics/КОНЬ.png"),
    require("./pics/КОТ.png"),
    require("./pics/КРАКАДЗІЛ.png"),
    require("./pics/КУРЫЦА.png"),
    require("./pics/ЛЕЎ.png"),
    require("./pics/ЛОСЬ.png"),
    require("./pics/ЛЯСУН.png"),
    require("./pics/ЛІЛІЯ.png"),
    require("./pics/ЛІСА.png"),
    require("./pics/ЛІСЯНЯ.png"),
    require("./pics/ЛІСЯНЁ.png"),
    require("./pics/МАЛЕНЬКІ_ПРЫНЦ.png"),
    require("./pics/МАЛПА.png"),
    require("./pics/МАЛЬВІНА.png"),
    require("./pics/МАМАНЦЯНЯ.png"),
    require("./pics/МАМАНЦЯНЁ.png"),
    require("./pics/МАТЫЛЁК.png"),
    require("./pics/МУЖЧЫНА.png"),
    require("./pics/МУРАШ.png"),
    require("./pics/МУХА.png"),
    require("./pics/МУХАМОР.png"),
    require("./pics/МЫШ.png"),
    require("./pics/МЯДЗВЕДЗЬ.png"),
    require("./pics/МІНАТАЎР.png"),
    require("./pics/НЛА.png"),
    require("./pics/ПАВУК.png"),
    require("./pics/ПАДБЯРОЗАВІК.png"),
    require("./pics/ПАЛЯЎНІЧЫ.png"), 
    require("./pics/ПАПУГАЙ.png"),
    require("./pics/ПАПУГАЙ.png"),
    require("./pics/ПАШТАЛЬЁН.png"),
    require("./pics/ПЕВЕНЬ.png"),
    require("./pics/ПЕГАС.png"),
    require("./pics/ПЕНЬ.png"),
    require("./pics/ПРЫНЦ.png"),
    require("./pics/ПРЫНЦЭСА.png"),
    require("./pics/ПУГАЧ.png"),
    require("./pics/ПЧАЛА.png"),
    require("./pics/ПЯТАЧОК.png"),
    require("./pics/ПІНГВІН.png"),
    require("./pics/ПІРАТ.png"),
    require("./pics/ПІТАР_ПЭН.png"),
    require("./pics/РАК.png"),
    require("./pics/РАПУНЦЕЛЬ.png"), 
    require("./pics/РУЖА.png"),
    require("./pics/РУСАЛКА.png"),
    require("./pics/РЫБА.png"),
    require("./pics/РЫБАЛОЎ.png"),
    require("./pics/РЫСЬ.png"),
    require("./pics/САБАКА.png"),
    require("./pics/САВА.png"),
    require("./pics/САМАЛЁТ.png"),
    require("./pics/СВІННЯ.png"),
    require("./pics/СЛОН.png"),
    require("./pics/СМОЎЖ.png"),
    require("./pics/СМУРФ.png"),
    require("./pics/СНЕГАВІК.png"),
    require("./pics/СНЕЖНАЯ_КАРАЛЕВА.png"),
    require("./pics/СНЯГУРАЧКА.png"),
    require("./pics/СНЯГІР.png"), 
    require("./pics/СТРАУС.png"),
    require("./pics/ТАРЗАН.png"),
    require("./pics/ТРУС.png"),
    require("./pics/ТУКАН.png"),
    require("./pics/ТЫГР.png"),
    require("./pics/ФЕЯ.png"),
    require("./pics/ФІЁНА.png"),
    require("./pics/ХАМЯК.png"),
    require("./pics/ХАТКА.png"),
    require("./pics/ХЛОПЧЫК.png"),
    require("./pics/ЦАР.png"),
    require("./pics/ЧАБУРАШКА.png"),
    require("./pics/ЧАРАПАХА.png"),
    require("./pics/ЧОРТ.png"),
    require("./pics/ЧЫПАЛІНА.png"),
    require("./pics/ЧЫРВОНАЯ_ШАПАЧКА.png"), 
    require("./pics/ШРЭК.png"),
    require("./pics/ШЧАНЯ.png"),
    require("./pics/ШЧАНЁ.png"),
    require("./pics/ЯНОТ.png"),
    require("./pics/ІЛЬВЯНЯ.png"),
    require("./pics/ІЛЬВЯНЁ.png")
];
const Game_Fly = () => {
   
    
    const [ menuPoint, changeMenuPoint ] = useState( "Menu" );
    const [ curBack, setCurBack ] = useState(-1);
    const [ picArr, changePicArr ] = useState([]);
    const [ curWord, setCurWord ] = useState(''); 
    let smallFonClickHandler = ( i ) => {        
        setCurBack( i );            
    };
    
    let Menu = 
        <div className = "GF_Menu">
            <div className = "GF_Menu_inner">
                <div 
                    id="GF_fon0" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[0]+")"}} 
                    onClick = {()=>smallFonClickHandler(0)}></div>
                <div 
                    id="GF_fon1" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[1]+")"}}
                    onClick = {() =>smallFonClickHandler(1)}></div>
                <div 
                    id="GF_fon2" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[2]+")"}}
                    onClick = {() =>smallFonClickHandler(2)}></div>
                <div 
                    id="GF_fon3" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[3]+")"}}
                    onClick = {() =>smallFonClickHandler(3)}></div>
                <div 
                    id="GF_fon4" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[4]+")"}}
                    onClick = {() =>smallFonClickHandler(4)}></div>
                <div 
                    id="GF_fon5" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[5]+")"}}
                    onClick = {() =>smallFonClickHandler(5)}></div>
            </div>
            <div className = "GF_Menu_inner">
                <div 
                    id="GF_fon6" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[6]+")"}}
                    onClick = {() =>smallFonClickHandler(6)}></div>
                <div 
                    id="GF_fon7" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[7]+")"}}
                    onClick = {() =>smallFonClickHandler(7)}></div>
                <div 
                    id="GF_fon8" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[8]+")"}}
                    onClick = {() =>smallFonClickHandler(8)}></div>
                <div 
                    id="GF_fon9" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[9]+")"}}
                    onClick = {() =>smallFonClickHandler(9)}></div>
                <div 
                    id="GF_fon10" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[10]+")"}}
                    onClick = {() =>smallFonClickHandler(10)}></div>
                <div 
                    id="GF_fon11" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[11]+")"}}
                    onClick = {() =>smallFonClickHandler(11)}></div>
            </div>
            <div className = "GF_Menu_inner">         
                <div 
                    id="GF_fon12" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[12]+")"}}
                    onClick = {() =>smallFonClickHandler(12)}></div>
                <div 
                    id="GF_fon13" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[13]+")"}}
                    onClick = {() =>smallFonClickHandler(13)}></div>
                <div 
                    id="GF_fon14" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[14]+")"}}
                    onClick = {() =>smallFonClickHandler(14)}></div>
                <div 
                    id="GF_fon15" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[15]+")"}}
                    onClick = {() =>smallFonClickHandler(15)}></div>
                <div 
                    id="GF_fon16" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[16]+")"}}
                    onClick = {() =>smallFonClickHandler(16)}></div>
                <div 
                    id="GF_fon17" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[17]+")"}}
                    onClick = {() =>smallFonClickHandler(17)}></div>
            </div>
            <div className = "GF_Menu_inner">
                <div    
                    id="GF_fon18" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[18]+")"}}
                    onClick = {() =>smallFonClickHandler(18)}> </div>
                <div 
                    id="GF_fon19" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[19]+")"}}
                    onClick = {() =>smallFonClickHandler(19)}></div>           
                <div 
                    id="GF_fon20" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[20]+")"}}
                    onClick = {() =>smallFonClickHandler(20)}></div>
                <div 
                    id="GF_fon21" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[21]+")"}}
                    onClick = {() =>smallFonClickHandler(21)}></div>
                <div 
                    id="GF_fon22" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[22]+")"}}
                    onClick = {() =>smallFonClickHandler(22)}></div>
                <div 
                    id="GF_fon23" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[23]+")"}}
                    onClick = {() =>smallFonClickHandler(23)}></div>
            </div>
            <div className = "GF_Menu_inner">
                <div 
                    id="GF_fon24" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[24]+")"}}
                    onClick = {() =>smallFonClickHandler(24)}></div>   
                <div 
                    id="GF_fon25" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[25]+")"}}
                    onClick = {() =>smallFonClickHandler(25)}></div>
                <div 
                    id="GF_fon26" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[26]+")"}}
                    onClick = {() =>smallFonClickHandler(26)}></div>
                <div 
                    id="GF_fon27" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[27]+")"}}
                    onClick = {() =>smallFonClickHandler(27)}></div>
                <div 
                    id="GF_fon28" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[28]+")"}}
                    onClick = {() =>smallFonClickHandler(28)}></div>
                <div 
                    id="GF_fon30" 
                    className="GF_fon" 
                    style = {{backgroundImage : "url("+smallFons[29]+")"}}
                    onClick = {() =>smallFonClickHandler(29)}></div>
             </div>
        </div>;          

    return (
        <div className = "Game_Fly">           
            { curBack === -1 ?
                Menu :
                <GF_Game back = { curBack } /> }           
        </div>
    )
}

export default Game_Fly;