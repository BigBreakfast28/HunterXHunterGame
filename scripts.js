let nenType = "enhancement";
let health = 100;
let punch = 10;
let bossHealth;
let nenProficiency = "basic";
let attackList = [punch];
let nenPoints = 30;
let dodgeMove;
let jajakenMove;
let rushMove;
let healPoints = 30;



//Let do something different and classify the points based on each arc instead of individually.

const gonHealPoints = document.getElementById('gonHealPoints');
const monsterHealth = document.getElementById('#monsterHealth');
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
        "button functions": [gododge, gojajaken, goRush],
        text: `<ul><li class='moves'>Dodge: 30 Nen Points </li><li class='moves'>JajaKen: 60 Nen Points </li><li class='moves'>Limitation Transformation: 140 Nen Points </li></ul>`
    }
]
//Dodge: 30 Nen Points - JajanKen: 60 Nen Points - Limitation Transformation: 14o Nen Points.
const gonExam = [
    {
        name: "Hunter Exam",
        "button text": ['10km', '130km', '80km'],
        "button functions": [pointLoss, pointLoss, pointAdd],
        text: "How many kilometers was the tunnel during the first phase of the hunter exam?"
    }
]

const phantomTroupArc = [
    {
        name: "Kurapika Nen Ability",
        "button text": ['Jajaken', 'lighting flash' , 'Dowsing chain'],
        "button functions" : [pointLoss, pointLoss, pointAdd],
        text : "What Nen ability does Kurapika have?"
    }
]

const chimerAntArc = [
    {
        name: "Evil General",
        "button text": ['King', 'NeferPitou' , 'Youpi'],
        "button functions" : [pointLoss, pointAdd, pointLoss],
        text : "Who is repsonsible for killing kite?"
    }
]

const gonBosses = [
    {
        name: "Gon Bosses",
        "button text": ['Genthru', 'Hisoka', 'Neferpituo'],
        "button functions": [fighting, fighting,fighting],
        text: "Choose a boss to battle!"
    }
]

const gonBattles = [
    {
        name: "Genthru",
        "button text" : ['punch', 'dodge', 'jajanken'],
        "button functions": [],
        text: "Win this battle then return home"
    },

    {
        name: "Hisoka",
        "button text": ['punch', 'dodge', 'jajanken'],
        "button functions": [],
        text: "Win this battle then return home"

    },

    {
        name: "Hisoka",
        "button text": ['punch', 'dodge', 'jajanken'],
        "button functions": [],
        text: "Win this battle then return home"
    },

]

/*Main menu button options */
gonButton1.onclick = goStartJourney;
gonButton2.onclick = goMovelist;
gonButton3.onclick = goGonBosses;
gonHomeButton.onclick = goGonMenu;

gonHealPoints.innerHTML = healPoints;

/*button text and functions for each location*/
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


/*Button that navigate the main menu end here*/
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

/*Buttons that control the addition or subtraction of points in each arc. */
//Come up with a new way to add and subtract points. I need to do all addition within one function somehow. 
//Im going to try and create a class that deals with the adding and subtracting of points 
function pointAdd() { 
    let newPoints = nenPoints += Math.floor(Math.random() * 70);;
    gonNenPoints.innerHTML = newPoints;
    text.innerHTML = "You're correct! You've gained some nen points and health points!";
    let newHealPoints = healPoints += Math.floor((Math.random() * 5) +5);
    gonHealPoints.innerHTML = newHealPoints;
}

function pointLoss() {
    let newPoints = nenPoints -= Math.floor((Math.random() * 70)+ 10);
    gonNenPoints.innerHTML = newPoints;
    text.innerHTML = "You're wrong, you've had some nen points subtracted from your score.";
}

function gododge() {
    if (nenPoints > 70) {
    let newPoints = nenPoints -= 70;
    gonNenPoints.innerHTML = newPoints;
    text.innerHTML = "Dodge has now been added to your move list!";
    attackList.push(dodgeMove);
    } else {
        text.innerHTML = `<strong>You dont have enough points to purchase this move!<h3>Try answering some more questions to build up your points!</h3></strong>`;
    }
}

function gojajaken() {
    let newPoints = nenPoints -= 110;
    gonNenPoints.innerHTML = newPoints;
    text.innerHTML = "Jajaken has now been added to your move list!";
    attackList.push(jajakenMove);
}

function goRush() {
    let newPoints = nenPoints -= 110;
    gonNenPoints.innerHTML = newPoints;
    text.innerHTML = "Rush has now been added to your move list!";
    attackList.push(rushMove);
}

/*function bonusPoints() {
    healPoints += Math.floor(Math.random() * 5);
    gonNenPoints.innerText = gonsNenPts;
}*/
 
//Try making a GENERAL function that deals with/encorprates everything that has to do with adding/subtracting points.

function goBuyhealth() {
    
}

//lets start designing out the fighting action
function fighting() {
    text.innerHTML = "You are now fighting";
}


