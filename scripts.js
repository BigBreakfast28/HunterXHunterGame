let nenType = "enhancement";
let health = 100;
let attacks = [];
let fighting;
let punch = 10;
let bossHealth;
let nenProficiency = "basic";
let gonsNenPts = 50;
let attackList = [punch];
let dodge = 30;
let jajanken = 60;
let limitationTransformation = 140;

const gonButton1 = document.querySelector('#gonButton1');
const gonButton2 = document.querySelector('#gonButton2');
const gonButton3 = document.querySelector('#gonButton3');
const gonHomeButton = document.querySelector('#gonAdventure');

const text = document.querySelector('#gonsText');

const gonNenPoints = document.querySelector('#gonsNenPoints');
const gonNenLevel = document.querySelector('#gonNenLevel');
const gonHealth = document.querySelector('#gonHealth');

const gonHome = [
    {
        name: "Main Menu",
        "button text": ['Continue Journey', 'Learn New Move', 'Boss Fight'],
        "button functions" : [ goStartJourney,goMovelist, goGonBosses],
        text : "Main Menu, continue your journey."
    }
]

const locations = [
    {
        name: "Arc Options",
        "button text": ['Hunter Exam','Phantom Troupe', 'Chimera Ant'],
        "button functions": [goHunterExam, goPhantonTroupe, goChimeraAnt],
        text: "Which Arc are we going for first? I suggest you do them in order."
    },
]

const moveList = [
    {
        name: "Move List",
        "button text": ['Dodge', 'Jajanken', 'Limitation Transformation'],
        "button functions": [goDodge, goJajanken, goLimitationTransformation],
        text: `Dodge: 30 Nen Points - JajanKen: 60 Nen Points - Limitation Transformation: 14o Nen Points.`
    }
]

const gonBosses = [
    {
        name: "Gon Bosses",
        "button text": ['Genthru', 'Hisoka', 'Neferpituo'],
        "button functions": [],
        text: "Choose a boss to battle!"
    }
]

const gonExam = [
    {
        name: "Hunter Exam",
        "button text": ['10km', '130km', '80km'],
        "button functions": [],
        text: "How many kilometers was the tunnel during the first phase of the hunter exam?"
    }
]

const phantomTroupArc = [
    {
        name: "Kurapika Nen Ability",
        "button text": ['Jajaken', 'lighting flash' , 'Dowsing chain'],
        "button functions" : [],
        text : "What Nen ability does Kurapika have?"
    }
]

const chimerAntArc = [
    {
        name: "Evil General",
        "button text": ['King', 'NeferPitou' , 'Youpi'],
        "button functions" : [],
        text : "Who is repsonsible for killing kite?"
    }
]

gonButton1.onclick = goStartJourney;
gonButton2.onclick = goMovelist;
gonButton3.onclick = goGonBosses;
gonHomeButton.onclick = goGonMenu;

function gonMenu(gonHome) {
    gonButton1.innerText = gonHome["button text"][0];
    gonButton2.innerText = gonHome["button text"][1];
    gonButton3.innerText = gonHome["button text"][2];
    gonButton1.onclick = gonHome["button functions"][0];
    gonButton2.onclick = gonHome["button functions"][1];
    gonButton3.onclick = gonHome["button functions"][2];
    text.innerHTML = gonHome.text;
}

function update(location) {
    gonButton1.innerText = location["button text"][0];
    gonButton2.innerText = location["button text"][1];
    gonButton3.innerText = location["button text"][2];
    gonButton1.onclick = location["button functions"][0];
    gonButton2.onclick = location["button functions"][1];
    gonButton3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
}

function buyMoves(moveList) {
    gonButton1.innerText = moveList['button text'][0];
    gonButton2.innerText = moveList['button text'][1];
    gonButton3.innerText = moveList['button text'][2];
    gonButton1.onclick = moveList['button functions'][0];
    gonButton2.onclick = moveList['button functions'][1];
    gonButton3.onclick = moveList['button functions'][2];
    text.innerHTML = moveList.text;
}

function gonFights(gonBosses) {
    gonButton1.innerText = gonBosses['button text'][0];
    gonButton2.innerText = gonBosses['button text'][1];
    gonButton3.innerText = gonBosses['button text'][2];
    gonButton1.onclick = gonBosses['button functions'][0];
    gonButton2.onclick = gonBosses['button functions'][1];
    gonButton3.onclick = gonBosses['button functions'][2];
    text.innerHTML = gonBosses.text;
}

function gonHunterExam(gonExam) {
    gonButton1.innerText = gonExam['button text'][0];
    gonButton2.innerText = gonExam['button text'][1];
    gonButton3.innerText = gonExam['button text'][2];
    gonButton1.onclick = gonExam['button functions'][0];
    gonButton2.onclick = gonExam['button functions'][1];
    gonButton3.onclick =gonExam['button functions'][2];
    text.innerHTML = gonExam.text;
}

function yorkNewCity(phantomTroupArc) {
    gonButton1.innerText = phantomTroupArc["button text"][0];
    gonButton2.innerText = phantomTroupArc["button text"][1];
    gonButton3.innerText = phantomTroupArc["button text"][2];
    gonButton1.onclick = phantomTroupArc["button functions"][0];
    gonButton2.onclick = phantomTroupArc["button functions"][1];
    gonButton3.onclick = phantomTroupArc["button functions"][2];
    text.innerHTML = phantomTroupArc.text;
}

function humansVsAnts(chimeraAnt) {
    gonButton1.innerText = chimeraAnt["button text"][0];
    gonButton2.innerText = chimeraAnt["button text"][1];
    gonButton3.innerText = chimeraAnt["button text"][2];
    gonButton1.onclick = chimeraAnt["button functions"][0];
    gonButton2.onclick = chimeraAnt["button functions"][1];
    gonButton3.onclick = chimeraAnt["button functions"][2];
    text.innerHTML = chimeraAnt.text;
}

function goGonMenu() {
    gonMenu(gonHome[0]);
}

function goStartJourney() {
    update(locations[0]);
}

function goMovelist() {
    buyMoves(moveList[0]);
}

function goGonBosses() {
    gonFights(gonBosses[0]); 
}

function goHunterExam() {
   gonHunterExam(gonExam[0]);
}

function goPhantonTroupe() {
    yorkNewCity(phantomTroupArc[0]);
}

function goChimeraAnt() {
    humansVsAnts(chimerAntArc[0]);
}

function cameronAnswer() {
    let newPoints = gonsNenPts + 5;
    gonNenPoints.innerText = newPoints;
    text.innerHTML = "You have selected the correct answer!";
}

function sashaAnswer() {
    let newPoints = gonsNenPts - 10;
    gonNenPoints.innerText = newPoints;
    text.innerHTML = "Sorry, this answer is incorrect and you've lost nen points.";
}

function mortyAnswer() {
    let newPoints = gonsNenPts - 10;
    gonNenPoints.innerText = newPoints;
    text.innerHTML = "Sorry, this answer is incorrect and you've lost nen points.";
}

function goDodge() {
    if (gonsNenPts<30) {
        text.innerHTML = "You don't have enough points to purchase this move.";
    } else {
        let newPoints = gonsNenPts - dodge;
        gonNenPoints.innerHTML = newPoints;
        text.innerHTML = "You can now dodge attacks in your next fight.";
        attackList.push(dodge);

    }
}

function goJajanken() {
    if (gonNenPoints < 60) {
        text.innerHTML = "You don't have enough points to purchase this move.";
    } else {
        let newPoints = gonNenPoints - 60
        gonNenPoints.innerHTML = newPoints;
        text.innerHTML = "You can now use Jajanken in your next fight.";
        attackList.push(jajanken);
    }
}

function goLimitationTransformation() {
    if (gonNenPoints <160) {
        text.innerHTML = "You don't have enough points to purchase this move.";
    } else {
        let newPoints = gonNenPoints - 160;
        gonNenPoints.innerHTML = newPoints;
        text.innerHTML = "You can now transform in your next fight. Your attack power will be doubled.";
        attackList.push(limitationTransformation);
    }
}

