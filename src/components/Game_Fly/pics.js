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

export default pics;