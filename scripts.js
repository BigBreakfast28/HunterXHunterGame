let health = 100;
let bossHealth;
let nenProficiency = "basic";
let attackList = [];
let displayAttacks = ["Punch","Jajanken"];
let nenPoints = 30;
let healPoints = 30;
let genthruHealth = 50;
let hisokaHealth = 200;
let pitouHealth = 500;
let wins = ["Genthru", "Hisoka", "NeferPituo"];
let lives = 3;
//Let do something different and classify the points based on each arc instead of individually.

const digitalMonsterHealth = document.getElementById('monsterHealthDigital');
const monsterStats = document.getElementById('monsterStats')
const genthruStats = document.getElementById('genthruStats');
const hisokaStats = document.getElementById('hisokaStats');
const pitouStats = document.getElementById('pitouStats');
const gonHealPoints = document.getElementById('gonHealPoints');
const monsterHealth = document.getElementById('#monsterHealth');
const gonAttacks = document.getElementById('gonAttacks');
const monsterName = document.getElementById('monsterName');
const restoreHealth = document.getElementById('restoreHealth');
const bossesDefeated = document.getElementById('bossesdefeated');
const heart1 = document.getElementById('heart1');
const heart2 = document.getElementById('heart2');
const heart3 = document.getElementById('heart3');

const gonButton1 = document.querySelector('#gonButton1');
const gonButton2 = document.querySelector('#gonButton2');
const gonButton3 = document.querySelector('#gonButton3');
const gonHomeButton = document.querySelector('#gonAdventure');
const text = document.querySelector('#gonsText');
const gonNenPoints = document.querySelector('#gonsNenPoints');
const gonNenLevel = document.querySelector('#gonNenLevel');
const gonHealth = document.querySelector('#gonHealth');
const gonBg = document.querySelector('.gon-bg');


//If this doesn't work I can just set 'bossesDefeated.innerHTML to be equal to the updated array!

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
        "button text": ['Punch','Heal Points', 'Jajanken'],
        "button functions": [goPunch, buyHealPoints, gojajaken],
        text: `<ul><li class='moves'>Punch: 75 Nen Points </li><li class='moves'>Heal Points: 100 Nen Points for 40 heal points </li><li class='moves'>Jajanken: 200 Nen Points </li></ul>`
    }
]
//Dodge: 30 Nen Points - JajanKen: 60 Nen Points - Limitation Transformation: 14o Nen Points.
const gonExam = [
    {
        name: "Hunter Exam",
        "button text": ['10km', '130km', '80km'],
        "button functions": [pointLoss, pointLoss, pointAdd],
        text: "How many kilometers was the tunnel during the first phase of the hunter exam?"
    },
    {
        name: "Hunter Exam",
        "button text": ['Cooking Exam', 'Endurance Test', 'Trick Tower'],
        "button functions": [pointAdd, pointLoss, pointLoss],
        text: "What is the second phase of the hunter exam?"
    },
    {
        name: "Hunter Exam",
        "button text": ['Son', 'Daughter', 'Silence'],
        "button functions": [pointLoss, pointLoss, pointAdd],
        text: "Who would you save from a kidnapping, your son or daughter?"
    },
    {
        name: "Hunter Exam",
        "button text": ['Shape Shift', 'Super Healing', 'Latent Nen Powers'],
        "button functions": [pointAdd, pointLoss, pointLoss],
        text: "What special ability did the Kiriko have?"
    },
    {
        name: "Hunter Exam",
        "button text": ['311th', '287th', '425th'],
        "button functions": [pointLoss, pointAdd, pointLoss],
        text: "What is the number of the hunter exam that Gon attended?"
    }
]

const phantomTroupArc = [
    {
        name: "York New City",
        "button text": ['Jajaken', 'lighting flash' , 'Dowsing chain'],
        "button functions" : [pointLoss, pointLoss, pointAdd],
        text : "What Nen ability does Kurapika have?"
    },
    {
        name: "York New City",
        "button text": ['Sacred Necklas', 'Nen Powers' , 'Scarlet Eyes'],
        "button functions" : [pointLoss, pointLoss, pointAdd],
        text : "What did the Phantom Troupe steal from Kurapika's clan."
    },
    {
        name: "York New City",
        "button text": ['Assasin', 'Body Guard' , 'Priest'],
        "button functions" : [pointLoss, pointAdd, pointLoss],
        text : "What was Kurapika's first job in York New City?"
    },
    {
        name: "York New City",
        "button text": ['Massacre', 'Underground Auction' , 'Kurapika Fights'],
        "button functions" : [pointAdd, pointLoss, pointLoss],
        text : "what happened at he Underground Auction?"
    }
]

const chimerAntArc = [
    {
        name: "Evil General",
        "button text": ['King', 'NeferPitou' , 'Youpi'],
        "button functions" : [pointLoss, pointAdd, pointLoss],
        text : "Who is repsonsible for killing kite?"
    },
    {
        name: "Evil General",
        "button text": ['Underground', 'Dark Continent' , 'The Ocean'],
        "button functions" : [pointLoss, pointAdd, pointLoss],
        text : "Where did the chimera ants come from?"
    },
    {
        name: "Evil General",
        "button text": ['Phagogenesis', 'Fermentation' , 'Refluctuation'],
        "button functions" : [pointAdd, pointLoss, pointLoss],
        text : "What is the Chimera Ant Queen method of reproduction called?"
    },
    {
        name: "Evil General",
        "button text": ['The Elites', 'Strong Ant' , 'Royal Guards'],
        "button functions" : [pointLoss, pointLoss, pointAdd],
        text : "What were the elites of the Queens army called?"
    }
]

const gonBosses = [
    {
        name: "Gon Bosses",
        "button text": ['Genthru', 'Hisoka', 'Neferpituo'],
        "button functions": [goFightGenthru, goFightHisoka, goFightNeferpituo],
        text: "Choose a boss to battle!"
    }
]

const gonBattles = [
    {
        name: "Genthru",
        "button text" : ['punch', 'Heal', 'jajanken'],
        "button functions": [punchThem, healGon,useJajanken],
        text: "Can you win the fight against Genthru? He's a tough opponet!"
    },

    {
        name: "Hisoka",
        "button text": ['punch', 'Heal', 'jajanken'],
        "button functions": [punchThem, healGon,useJajanken],
        text: "Can you win the fight against Hisoka? He's a tough opponet! "

    },

    {
        name: "Neferpituo",
        "button text": ['punch', 'Heal', 'jajanken'],
        "button functions": [punchThem, healGon,useJajanken],
        text: "Can you win the fight against Neferpituo? He's a tough opponet! "
    },

]

/*Main menu button options */
gonButton1.onclick = goStartJourney;
gonButton2.onclick = goMovelist;
gonButton3.onclick = goGonBosses;
gonHomeButton.onclick = goGonMenu;
restoreHealth.onclick = restoreGonHealth;

gonHealPoints.innerHTML = healPoints;
gonHealth.innerHTML = health;
gonNenPoints.innerHTML = nenPoints;

/*Put a for loop in here will a <li> for each item to be displayed. 
Set up a way for the points to push to the displayed array along with the actual array for the fight.*/

function goHome() {
    window.location.href = "index.html"
}

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
   gonHunterExam(gonExam[Math.floor(Math.random() * 5)]);
   monsterStats.style.display = "none";
}

function goPhantonTroupe() {
    yorkNewCity(phantomTroupArc[Math.floor(Math.random() * 4)]);
    monsterStats.style.display = "none";
}

function goChimeraAnt() {
    humansVsAnts(chimerAntArc[Math.floor(Math.random() * 4)]);
    monsterStats.style.display = "none";
}

function goFightGenthru() {
    gonFights(gonBattles[0]);
    monsterStats.style.display = "block";
    monsterName.innerHTML = "Genthru:";
    digitalMonsterHealth.innerHTML = genthruHealth;
    monsterStats.style.width = '100%';
    minorHealthSubtract();
    if (digitalMonsterHealth == 0) {
        text.innerHTML = `<strong>You have beat Genthru! Excellent job!!</strong>`;
    }
}


function goFightHisoka() {
    gonFights(gonBattles[1])
    majorHealthSubtract();
    monsterStats.style.display = "block";
    monsterName.innerHTML = "Hisoka:";
    digitalMonsterHealth.innerHTML = hisokaHealth;
    monsterStats.style.width = '100%';
    if (digitalMonsterHealth == 0) {
        text.innerHTML = `<strong>You have beat Hisoka! Excellent job!!</strong>`;
    }
    //Add some code in here to display health information and this is where ill throw in some code to attack the user...maybe
}

function goFightNeferpituo() {
    gonFights(gonBattles[2])
    extremeHealthSubtract();
    monsterStats.style.display = "block";
    monsterName.innerHTML = "NeferPituo:";
    digitalMonsterHealth.innerHTML = pitouHealth;
    monsterStats.style.width = '100%';
    if (digitalMonsterHealth == 0) {
        text.innerHTML = `<strong>You have beat Pituo! Excellent job!!</strong>`;
    }
    
    //Add some code in here to display health information and this is where ill throw in some code to attack the user...maybe
}
//I believe I need to modify this code here as well to reflect the fight at the proper location in the array
//gonHealth.innerHTML -= Math.floor((Math.random() * 20)+1);//Use this code inside a new function for Genthru fight.
//Insert that new function inside here with a timed interval tied to it. 
//Add some code in here to display health information and this is where ill throw in some code to attack the user...maybe

function minorHealthSubtract() {
    function startIt() {
        gonHealth.innerHTML = health -= Math.floor((Math.random() * 5) + 3)
            if (gonHealth.innerHTML <= 50) {
                text.innerHTML = "You have reached half your health";
            }

            if (gonHealth.innerHTML <= 0) {
                text.innerHTML = "You've lost. Try again or continue your journey!";
                clearInterval(minorTimer);
                gonButton1.onclick = goStartJourney;
                gonButton2.onclick = goMovelist;
                gonButton3.onclick = goGonBosses;
                gonButton1.innerHTML = "Continue Journey";
                gonButton2.innerHTML = "Buy Moves";
                gonButton3.innerHTML = "Fight Bosses";
                lives -= 1;
                if (lives == 2) {
                    heart3.style.display = "none";
                }

                if (lives ==1 ) {
                    heart2.style.display = "none";
                }

                if (lives ==0 ) {
                    heart1.style.display = "none";
                    text.innerHTML = `<h1 class='gameOver'>Game Over</h1>`;
                    document.body.onclick = setTimeout(goHome, 3000);
                    alert(`You are about to be taken to the home screen! You can start the game over from there!`);
                }
            }

            if (digitalMonsterHealth.innerHTML <= 0) {
                text.innerHTML = "You've beat Genthru!! Good job!";
                digitalMonsterHealth.innerHTML = 0;
                clearInterval(minorTimer);
                for (i=0; i<1; i++) {
                    bossesDefeated.innerHTML += wins[0] + "<br>";
                }
                gonButton1.onclick = goStartJourney;
                gonButton2.onclick = goMovelist;
                gonButton3.onclick = goGonBosses;
                gonButton1.innerHTML = "Continue Journey";
                gonButton2.innerHTML = "Buy Moves";
                gonButton3.innerHTML = "Fight Bosses";
            }
    }
    let minorTimer = setInterval(startIt,1000);
    return minorTimer
} 

function majorHealthSubtract() {
    function startIt() {
        gonHealth.innerHTML -= Math.floor((Math.random() * 35) + 3)
            if (gonHealth.innerHTML <= 50) {
                text.innerHTML = "You have reached half your health";
            }

            if (gonHealth.innerHTML <= 0) {
                text.innerHTML = "You've lost. Try again or continue your journey!";
                clearInterval(minorTimer);
                gonButton1.onclick = goStartJourney;
                gonButton2.onclick = goMovelist;
                gonButton3.onclick = goGonBosses;
                gonButton1.innerHTML = "Continue Journey";
                gonButton2.innerHTML = "Buy Moves";
                gonButton3.innerHTML = "Fight Bosses";
                lives -= 1;
                if (lives == 2) {
                    heart3.style.display = "none";
                }

                if (lives ==1 ) {
                    heart2.style.display = "none";
                }

                if (lives ==0 ) {
                    heart1.style.display = "none";
                    text.innerHTML = `<h1 class='gameOver'>Game Over</h1>`;
                    document.body.onclick = setTimeout(goHome, 3000);
                    alert(`You are about to be taken to the home screen! You can start the game over from there!`);
                }
            }

            if (digitalMonsterHealth.innerHTML <= 0) {
                text.innerHTML = "You've beat Hisoka!! Good job!";
                digitalMonsterHealth.innerHTML = 0;
                clearInterval(minorTimer);
                for (i=0; i<1; i++) {
                    bossesDefeated.innerHTML += wins[1] + "<br>";
                }
                gonButton1.onclick = goStartJourney;
                gonButton2.onclick = goMovelist;
                gonButton3.onclick = goGonBosses;
                gonButton1.innerHTML = "Continue Journey";
                gonButton2.innerHTML = "Buy Moves";
                gonButton3.innerHTML = "Fight Bosses";
            }
    }
    let minorTimer = setInterval(startIt,1000);
    return minorTimer
}

function extremeHealthSubtract() {
    function startIt() {
        gonHealth.innerHTML -= Math.floor((Math.random() * 50) + 3)
            if (gonHealth.innerHTML <= 50) {
                text.innerHTML = "You have reached half your health";
            }

            if (gonHealth.innerHTML <= 0) {
                text.innerHTML = "You've lost. Try again or continue your journey!";
                clearInterval(minorTimer);
                gonButton1.onclick = goStartJourney;
                gonButton2.onclick = goMovelist;
                gonButton3.onclick = goGonBosses;
                gonButton1.innerHTML = "Continue Journey";
                gonButton2.innerHTML = "Buy Moves";
                gonButton3.innerHTML = "Fight Bosses";
                lives -= 1;
                if (lives == 2) {
                    heart3.style.display = "none";
                }

                if (lives ==1 ) {
                    heart2.style.display = "none";
                }

                if (lives ==0 ) {
                    heart1.style.display = "none";
                    text.innerHTML = `<h1 class='gameOver'>Game Over</h1>`;
                    document.body.onclick = setTimeout(goHome, 3000);
                    alert(`You are about to be taken to the home screen! You can start the game over from there!`);
                }
            }

            if (digitalMonsterHealth.innerHTML <= 0) {
                text.innerHTML = "You've beat Pituo!! Good job!";
                digitalMonsterHealth.innerHTML = 0;
                clearInterval(minorTimer);
                for (i=0; i<1; i++) {
                    bossesDefeated.innerHTML += wins[2] + "<br>";
                }
                gonButton1.onclick = goStartJourney;
                gonButton2.onclick = goMovelist;
                gonButton3.onclick = goGonBosses;
                gonButton1.innerHTML = "Continue Journey";
                gonButton2.innerHTML = "Buy Moves";
                gonButton3.innerHTML = "Fight Bosses";
            }
    }
    let minorTimer = setInterval(startIt,1000);
    return minorTimer
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
        if (attackList.includes("Punch")) {
            text.innerHTML = `<h2>You already know this move!</h2>`
        } else {
        attackList.push("Punch"); 
        for (i=0; i< 1; i++) {
            gonAttacks.innerHTML += `<li>${displayAttacks[0]}</li>`;
            let newPoints = nenPoints -= 75;
            gonNenPoints.innerHTML = newPoints;
            text.innerHTML = "Punch has now been added to your move list!";
            gonButton1.onclick = goStartJourney;
            gonButton2.onclick = goMovelist;
            gonButton3.onclick = goGonBosses;
            gonButton1.innerHTML = "Continue Journey";
            gonButton2.innerHTML = "Buy Moves";
            gonButton3.innerHTML = "Fight Bosses";
            }
        }
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

function buyHealPoints() {
    if (nenPoints > 100) {
    let newPoints = nenPoints -= 100;
    gonNenPoints.innerHTML = newPoints;
    gonHealPoints.innerHTML = healPoints += 40;
    text.innerHTML = "Heal Points have been added to your inventory!";
    gonButton1.onclick = goStartJourney;
    gonButton2.onclick = goMovelist;
    gonButton3.onclick = goGonBosses;
    gonButton1.innerHTML = "Continue Journey";
    gonButton2.innerHTML = "Buy Moves";
    gonButton3.innerHTML = "Fight Bosses";
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
        if (attackList.includes("Jajanken")) {
            text.innerHTML = `<h2>You already know this move!</h2>`;
        } else {
        attackList.push("Jajanken");
        for (i=0; i< 1; i++) {
            gonAttacks.innerHTML += `<li>${displayAttacks[1]}</li>`;
            let newPoints = nenPoints -= 200;
            gonNenPoints.innerHTML = newPoints;
            text.innerHTML = "Jajaken has now been added to your move list!";
            gonButton1.onclick = goStartJourney;
            gonButton2.onclick = goMovelist;
            gonButton3.onclick = goGonBosses;
            gonButton1.innerHTML = "Continue Journey";
            gonButton2.innerHTML = "Buy Moves";
            gonButton3.innerHTML = "Fight Bosses";
        } 
        }   
    } 
    else {
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
    if (attackList.includes("Punch")) {
        digitalMonsterHealth.innerHTML -= 3;
        if (digitalMonsterHealth.innerHTML <= 40) {
        console.log("The is a message for the console to confirm we've reached 40pts!");
        monsterStats.style.width = '80%';
        //ok this is how I need to do it. I need to decreased the width of monsterStats according to the innerHTML of digitalMonsterHealth.
        }

        if (digitalMonsterHealth.innerHTML <= 30) {
        console.log("The is a message for the console to confirm we've reached 30pts!");
        monsterStats.style.width = '60%';
        }

        if (digitalMonsterHealth.innerHTML <= 20) {
        console.log("The is a message for the console to confirm we've reached 20pts!");
        monsterStats.style.width = '40%';
        }

        if (digitalMonsterHealth.innerHTML <= 10) {
        console.log("The is a message for the console to confirm we've reached 10pts!");
        monsterStats.style.width = '20%';
        }

        if (digitalMonsterHealth.innerHTML <= 0) {
        console.log("The is a message for the console to confirm we've reached 0pts!");
        monsterStats.style.width = '0%';
        gonButton1.innerHTML = "Continue Journey";
        gonButton2.innerHTML = "Buy More Moves";
        gonButton3.innerHTML = "Fight Again";
        gonButton1.onclick = goStartJourney;
        gonButton2.onclick = goMovelist;
        gonButton3.onclick = goFightGenthru;
        }
    } else {
        text.innerHTML = `<strong>You dont have this move in your attack list!!</strong>`;
    }
}

function healGon() {
    gonHealth.innerHTML = health += 5;
    if (healPoints <= 9) {
        text.innerHTML = `<strong>You don't have any more heal points!!!</strong>`
    } else {
        let newHealPoints = healPoints -= 10;
        gonHealPoints.innerHTML = newHealPoints;
    }
    if (gonHealth.innerHTML >= 100) {
        gonHealth.innerHTML = health;
        text.innerHTML = "You are already at MAX health!!";
    }
}

function useJajanken() {
    if (attackList.includes("Jajanken")) {
        digitalMonsterHealth.innerHTML -= 90;
        if (digitalMonsterHealth.innerHTML <= 40) {
        console.log("The is a message for the console to confirm we've reached 40pts!");
        monsterStats.style.width = '80%';
        //ok this is how I need to do it. I need to decreased the width of monsterStats according to the innerHTML of digitalMonsterHealth.
        }

        if (digitalMonsterHealth.innerHTML <= 30) {
        console.log("The is a message for the console to confirm we've reached 30pts!");
        monsterStats.style.width = '60%';
        }

        if (digitalMonsterHealth.innerHTML <= 20) {
        console.log("The is a message for the console to confirm we've reached 20pts!");
        monsterStats.style.width = '40%';
        }

        if (digitalMonsterHealth.innerHTML <= 10) {
        console.log("The is a message for the console to confirm we've reached 10pts!");
        monsterStats.style.width = '20%';
        }

        if (digitalMonsterHealth.innerHTML == 0) {
        console.log("The is a message for the console to confirm we've reached 0pts!");
        monsterStats.style.width = '0%';
        gonButton1.innerHTML = "Continue Journey";
        gonButton2.innerHTML = "Buy More Moves";
        gonButton3.innerHTML = "Fight Again";
        gonButton1.onclick = goStartJourney;
        gonButton2.onclick = goMovelist;
        gonButton3.onclick = goFightGenthru;
        }
    } else {
        text.innerHTML = `<strong>You dont have this move in your attack list!!</strong>`;
    }
}

function restoreGonHealth() {
    if (healPoints >= 250) {
        gonHealth.innerHTML = 100;
        let newHealPoints = healPoints -= 250;
        gonHealPoints.innerHTML = newHealPoints;
    } else {
        text.innerHTML = `<strong class='criticalMessage'>It cost 250 heal points to restore full health.</strong>`;
    }
    
}

if (lives <=0) {
    gonBg.style.color = "black";
    alert("You have lost the game and will be returned to the home screen...");
}