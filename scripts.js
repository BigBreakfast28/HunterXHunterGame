let nenType = "enhancement";
let health = 100;
let attacks = [];
let fighting;
let bossHealth;
let nenProficiency = "basic";
let gonsNenPts = 50;

const gonButton1 = document.querySelector('#gonButton1');
const gonButton2 = document.querySelector('#gonButton2');
const gonButton3 = document.querySelector('#gonButton3');d

const text = document.querySelector('#gonsText');

const gonNenPoints = document.querySelector('#gonsNenPoints');
const gonNenLevel = document.querySelector('#gonNenLevel');
const gonHealth = document.querySelector('#gonHealth');



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
        "button functions": [],
        text:"Dodge: 30 Nen Points , JajanKen: 60 Nen Points, Limitatio Transformation: 14o Nen Points "
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




gonButton1.onclick = goHunterExam;
gonButton2.onclick = goMovelist;
gonButton3.onclick = goGonBosses;

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
    gonButton1.onclick = moveList['button function'][0];
    gonButton2.onclick = moveList['button function'][1];
    gonButton3.onclick = moveList['button function'][2];
    text.innerHTML = moveList.text;
}

function gonFights(gonBosses) {
    gonButton1.innerText = gonBosses['button text'][0];
    gonButton2.innerText = gonBosses['button text'][1];
    gonButton3.innerText = gonBosses['button text'][2];
    gonButton1.onclick = gonBosses['button function'][0];
    gonButton2.onclick = gonBosses['button function'][1];
    gonButton3.onclick = gonBosses['button function'][2];
    text.innerHTML = gonBosses.text;
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
    gonButton3.onclick = pchimeraAnt["button functions"][2];
    text.innerHTML = chimeraAntc.text;
}

function goHunterExam() {
    update(locations[0]);
}

function goMovelist() {
    buyMoves(moveList[0]);
}

function goGonBosses() {
    gonBosses(gonBosses[0]); 
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





