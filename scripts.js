let nenType = "enhancement";
let health = 100;
let bossHealth;
let nenProficiency = "basic";
let attackList = [];
let nenPoints = 30;
let dodgeMove;
let jajakenMove;
let rushMove;
let healPoints = 30;
let attackPoints = [];
let genthruHealth = 50;


//Let do something different and classify the points based on each arc instead of individually.

const digitalMonsterHealth = document.getElementById('monsterHealthDigital');
const monsterStats = document.getElementById('monsterStats');
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
const gonAttacks = document.getElementById('gonAttacks');
const monsterName = document.getElementById('monsterName');

const tester = document.getElementById('tester');

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
        "button text": ['Punch','Dodge', 'Jajanken'],
        "button functions": [goPunch, gododge, gojajaken],
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
        "button functions": [goFightGenthru],
        text: "Choose a boss to battle!"
    }
]

const gonBattles = [
    {
        name: "Genthru",
        "button text" : ['punch', 'Heal', 'jajanken'],
        "button functions": [punchThem],
        text: "Can you win the fight against Genthru? He's a tough opponet!"
    },

    {
        name: "Hisoka",
        "button text": ['punch', 'Heal', 'jajanken'],
        "button functions": [],
        text: "Can you win the fight against Hisoka? He's a tough opponet! "

    },

    {
        name: "Neferpituo",
        "button text": ['punch', 'Heal', 'jajanken'],
        "button functions": [],
        text: "Can you win the fight against Neferpituo? He's a tough opponet! "
    },

]

/*Main menu button options */
gonButton1.onclick = goStartJourney;
gonButton2.onclick = goMovelist;
gonButton3.onclick = goGonBosses;
gonHomeButton.onclick = goGonMenu;

gonHealPoints.innerHTML = healPoints;
gonHealth.innerHTML = health;
gonNenPoints.innerHTML = nenPoints;

/*Put a for loop in here will a <li> for each item to be displayed. 
Set up a way for the points to push to the displayed array along with the actual array for the fight.*/

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
}//I think if I want my fights to work then I need to modify the code here.

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
/*Buttons that navigate the main menu end here*/

function goGonMenu() {
    gonMenu(gonHome[0]);
    monsterStats.style.display = "none";
}

function goStartJourney() {
    update(locations[0]);
    monsterStats.style.display = "none";
}

function goMovelist() {
    buyMoves(moveList[0]);
    monsterStats.style.display = "none";
}

function goGonBosses() {
    gonFights(gonBosses[0]); 
    monsterStats.style.display = "none";
}

function goHunterExam() {
   gonHunterExam(gonExam[0]);
   monsterStats.style.display = "none";
}

function goPhantonTroupe() {
    yorkNewCity(phantomTroupArc[0]);
    monsterStats.style.display = "none";
}

function goChimeraAnt() {
    humansVsAnts(chimerAntArc[0]);
    monsterStats.style.display = "none";
}

function goFightGenthru() {
    gonFights(gonBattles[0]);
    monsterStats.style.display = "block";
    monsterName.innerHTML = "Genthru:";
    digitalMonsterHealth.innerHTML = genthruHealth;
    minorHealthSubtract();
    //gonHealth.innerHTML -= Math.floor((Math.random() * 20)+1);//Use this code inside a new function for Genthru fight.
    //Insert that new function inside here with a timed interval tied to it. 
    //Add some code in here to display health information and this is where ill throw in some code to attack the user...maybe
}//I believe I need to modify this code here as well to reflect the fight at the proper location in the array

function minorHealthSubtract() {
    function startIt() {
        gonHealth.innerHTML -= Math.floor((Math.random() * 5) + 3)
            if (gonHealth.innerHTML <= 50) {
                text.innerHTML = "You have reached half your health";
            }

            if (gonHealth.innerHTML <= 0) {
                text.innerHTML = "You've lost. Try again or continue your journey!";
                clearInterval(minorTimer);
            }
    }
    let minorTimer = setInterval(startIt,1000);
    return minorTimer
}

function goFightHisoka() {
    gonFights(gonBattles[1])
    //Add some code in here to display health information and this is where ill throw in some code to attack the user...maybe
}

function goFightNeferpituo() {
    gonFights(gonBattles[2])
    //Add some code in here to display health information and this is where ill throw in some code to attack the user...maybe
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
    gonButton1.onclick = goStartJourney;
    gonButton2.onclick = goMovelist;
    gonButton3.onclick = goGonBosses;
    gonButton1.innerHTML = "Continue Journey";
    gonButton2.innerHTML = "Buy Moves";
    gonButton3.innerHTML = "Fight Bosses";
}

function pointLoss() {
    let newPoints = nenPoints -= Math.floor((Math.random() * 70)+ 10);
    if (nenPoints < newPoints) {
        text.innerHTML = "You're wrong but you don't have enough points for me to subtract!...Luckyyy";
        gonButton1.onclick = goStartJourney;
        gonButton2.onclick = goMovelist;
        gonButton3.onclick = goGonBosses;
        gonButton1.innerHTML = "Continue Journey";
        gonButton2.innerHTML = "goMoveList";
        gonButton3.innerHTML = "Fight Bosses";

    } else {
    gonNenPoints.innerHTML = newPoints;
    text.innerHTML = "You're wrong, you've had some nen points subtracted from your score.";  
    gonButton1.onclick = goStartJourney;
    gonButton2.onclick = goMovelist;
    gonButton3.onclick = goGonBosses;
    gonButton1.innerHTML = "Continue Journey";
    gonButton2.innerHTML = "Buy Moves";
    gonButton3.innerHTML = "Fight Bosses";
    }
}

function goPunch() {
    if (nenPoints > 75) {
        let newPoints = nenPoints -= 75;
        gonNenPoints.innerHTML = newPoints;
        text.innerHTML = "Punch has now been added to your move list!";
        gonButton1.onclick = goStartJourney;
        gonButton2.onclick = goMovelist;
        gonButton3.onclick = goGonBosses;
        gonButton1.innerHTML = "Continue Journey";
        gonButton2.innerHTML = "Buy Moves";
        gonButton3.innerHTML = "Fight Bosses";
        attackList.push(" Punch "); 
        gonAttacks.innerHTML = attackList;
    } else {
        text.innerHTML = `<strong>You dont have enough points to purchase this move!<h3>Try answering some more questions to build up your points!</h3></strong>`;
        gonButton1.onclick = goStartJourney;
        gonButton2.onclick = goMovelist;
        gonButton3.onclick = goGonBosses;
        gonButton1.innerHTML = "Continue Journey";
        gonButton2.innerHTML = "Buy Moves";
        gonButton3.innerHTML = "Fight Bosses";
    }
    
}
function gododge() {
    if (nenPoints > 100) {
    let newPoints = nenPoints -= 100;
    gonNenPoints.innerHTML = newPoints;
    text.innerHTML = "Dodge has now been added to your move list!";
    gonButton1.onclick = goStartJourney;
    gonButton2.onclick = goMovelist;
    gonButton3.onclick = goGonBosses;
    gonButton1.innerHTML = "Continue Journey";
    gonButton2.innerHTML = "Buy Moves";
    gonButton3.innerHTML = "Fight Bosses";
    attackList.push(" Dodge ");
    gonAttacks.innerHTML = attackList;
    } else {
        text.innerHTML = `<strong>You dont have enough points to purchase this move!<h3>Try answering some more questions to build up your points!</h3></strong>`;
        gonButton1.onclick = goStartJourney;
        gonButton2.onclick = goMovelist;
        gonButton3.onclick = goGonBosses;
        gonButton1.innerHTML = "Continue Journey";
        gonButton2.innerHTML = "Buy Moves";
        gonButton3.innerHTML = "Fight Bosses";
    }
}

function gojajaken() {
    if (nenPoints > 200) {
    let newPoints = nenPoints -= 200;
    gonNenPoints.innerHTML = newPoints;
    text.innerHTML = "Jajaken has now been added to your move list!";
    gonButton1.onclick = goStartJourney;
    gonButton2.onclick = goMovelist;
    gonButton3.onclick = goGonBosses;
    gonButton1.innerHTML = "Continue Journey";
    gonButton2.innerHTML = "Buy Moves";
    gonButton3.innerHTML = "Fight Bosses";
    attackList.push(" Jajaken ");
    gonAttacks.innerHTML = attackList;
    } else {
        text.innerHTML = `<strong>You dont have enough points to purchase this move!<h3>Try answering some more questions to build up your points!</h3></strong>`;
        gonButton1.onclick = goStartJourney;
        gonButton2.onclick = goMovelist;
        gonButton3.onclick = goGonBosses;
        gonButton1.innerHTML = "Continue Journey";
        gonButton2.innerHTML = "Buy Moves";
        gonButton3.innerHTML = "Fight Bosses";
    }
}

//lets start designing out the fighting action

function punchThem() {
  digitalMonsterHealth.innerHTML -= 10;
  if (digitalMonsterHealth.innerHTML == 40) {
    console.log("The is a message for the console to confirm we've reached 40pts!");
    monsterStats.style.width = '80%';
    //ok this is how I need to do it. I need to decreased the width of monsterStats according to the innerHTML of digitalMonsterHealth.
  }

  if (digitalMonsterHealth.innerHTML == 30) {
    console.log("The is a message for the console to confirm we've reached 30pts!");
    monsterStats.style.width = '60%';
  }

  if (digitalMonsterHealth.innerHTML == 20) {
    console.log("The is a message for the console to confirm we've reached 20pts!");
    monsterStats.style.width = '40%';
  }

  if (digitalMonsterHealth.innerHTML == 10) {
    console.log("The is a message for the console to confirm we've reached 10pts!");
    monsterStats.style.width = '20%';
  }

  if (digitalMonsterHealth.innerHTML == 0) {
    console.log("The is a message for the console to confirm we've reached 0pts!");
    monsterStats.style.width = '0%';
    text.innerHTML = "You've beat Genthru, great job! Move onto the next boss.";
    gonButton1.innerHTML = "Continue Journey";
    gonButton2.innerHTML = "Buy More Moves";
    gonButton3.innerHTML = "Fight Again";
    gonButton1.onclick = goStartJourney;
    gonButton2.onclick = goMovelist;
    gonButton3.onclick = goFightGenthru;
  }
}

