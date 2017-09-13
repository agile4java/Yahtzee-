var rollNum;
var dice = [];
var hold = [false, false, false, false, false];
var scoreCard = {
    aces: -1,
    twos: -1,
    threes: -1,
    fours: -1,
    fives: -1,
    sixes: -1,
    upperBonus: -1,
    threeOfA: -1,
    fourOfA: -1,
    fullHouse: -1,
    smStraight: -1,
    lgStraight: -1,
    yahtzee: -1,
    yahtzeeBonus: -1,
    chance: -1,
    upperTotal: -1,
    lowerTotal: -1,
    grandTotal: -1,
    clear: function(){
        aces = -1;
            twos = -1;
            threes = -1;
            fours = -1;
            fives = -1;
            sixes = -1;
            upperBonus = -1;
            threeOfA = -1;
            fourOfA = -1;
            fullHouse = -1;
            smStraight = -1;
            lgStraight = -1;
            yahtzee = -1;
            yahtzeeBonus = -1;
            chance = -1;
            upperTotal = -1;
            lowerTotal = -1;
            grandTotal = -1;
            return;
    },
    updateTotals: function () {
        var tally = 0;
        if(aces == -1){
            tally += 0;
        }else{
            tally += aces;
        }
        if(twos == -1){
            tally+= 0;
        }else{
            tally += twos;
        }
        if(threes == -1){
            tally+= 0;
        }else{
            tally += threes;
        }
        if(fours == -1){
            tally+= 0;
        }else{
            tally += fours;
        }
        if(fives == -1){
            tally+= 0;
        }else{
            tally += fives;
        }
        if(sixes == -1){
            tally+= 0;
        }else{
            tally += sixes;
        }
        if((upperBonus == -1) && (tally <  63)){
            tally += 0;

        }else if((upperBonus == -1) && (tally >=  63)) {
            upperBonus = 35;
            tally += upperBonus;
        }else{
            tally += upperBonus;
        }
        upperTotal = tally;
        tally = 0;

        if(threeOfA == -1){
            tally+= 0;
        }else{
            tally += threeOfA;
        }
        if(fourOfA == -1){
            tally+= 0;
        }else{
            tally += fourOfA;
        }
        if(fullHouse == -1){
            tally+= 0;
        }else{
            tally += fullHouse;
        }
        if(smStraight == -1){
            tally+= 0;
        }else{
            tally += smStraight;
        }
        if(lgStraight == -1){
            tally+= 0;
        }else{
            tally += lgStraight;
        }
        if(yahtzee == -1){
            tally+= 0;
        }else{
            tally +=yahtzee;
        }
        if(yahtzeeBonus == -1){
            tally+= 0;
        }else{
            tally += yahtzeeBonus;
        }
        if(chance == -1){
            tally+= 0;
        }else{
            tally += chance;
        }
        lowerTotal = tally;
        
        grandTotal = upperTotal + lowerTotal;
        return;
    }

};

function  newGame() {



    scoreCard.clear();
    dice = [0, 0, 0, 0, 0];
    var canvas = document.getElementById("diceCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, 560, 120);
    hold = [false, false, false, false, false];
    prepToRoll();

}

function prepToRoll(){
    dice = [0, 0, 0, 0, 0];
    rollNum = 0;

    //disable dice hold buttons and enable roll dice and new game
    var content = document.getElementById("buttonRow");
    var btns = content.getElementsByTagName("button");
    for(i=0; i <5; i++){
        btns[i].disabled = true;

    }
    btns[5].disabled = false;
    btns[6].disabled = false;


    //disable all scoreCards buttons
    var scoreTable = document.getElementById("upperScoreCardTable");
    var scoreBtns = scoreTable.getElementsByTagName("button");
    for(i = 0; i < scoreBtns.length; i++){
        scoreBtns[i].disabled = true;
    }
    scoreTable = document.getElementById("lowerScoreCardTable");
    scoreBtns = scoreTable.getElementsByTagName("button");
    for(i = 0; i < scoreBtns.length; i++){
        scoreBtns[i].disabled = true;
    }

    //updateScoreTotals
    scoreCard.updateTotals();
   return;

}



function getRoll(){
    if(rollNum == 0){
        for(i=0; i<5; i++){
            var roll = rollDie();
            drawDie(roll, (i+1));
            dice[i] = roll;
        }}else if(rollNum == 1 || rollNum == 2){
            for(i=0; i<5; i++){
                if(hold[i] == false){
                    roll = rollDie();
                    drawDie(roll, (i + 1));
                    dice[i] = roll;
                }
            }
        }

    //return filled dice array, draw on canvas
    //if roll == 3, call prepToScore, else call holdScoreRoll

    rollNum++;
    if(rollNum == 3) {
        prepToScore();
    }
    //enable dice hold buttons
    var content = document.getElementById("buttonRow");
    var btns = content.getElementsByTagName("button");
    for(i=0; i <5; i++){
        btns[i].disabled = false;

    }
    return;
}


function rollDie(){
    var roll = Math.floor((Math.random() * 6) + 1);
    return roll;
}


function holdScoreRoll(die){
    if(hold[die]==true){
                hold[die] = false;
                var content = document.getElementById("buttonRow");
                content.getElementsByTagName("button")[die].innerHTML = "Click to Hold";
            }else {
                hold[die] = true;
                var content = document.getElementById("buttonRow");
                content.getElementsByTagName("button")[die].innerHTML = "Click to Roll";
            }

    return;
}

function prepToScore() {
    console.log("entering prepToScore, values of dice array " + dice);
    var content = document.getElementById("buttonRow");
    var btns = content.getElementsByTagName("button");
    for (i = 0; i < 7; i++) {
        btns[i].disabled = true;
    }


    // check4Yahtzee();
    //enable valid  scoreCards buttons
    var scoreTable = document.getElementById("upperScoreCardTable");
    var scoreBtns = scoreTable.getElementsByTagName("button");
    for (j = 0; j < 5; j++) {
        if ((dice[j] == 1) && (scoreCard.aces == -1)) {
            console.log("upperscorecard validation - ones is valid");
            scoreBtns[0].disabled = false;
        }
        if ((dice[j] == 2) && (scoreCard.twos == -1)) {
            console.log("upperscorecard validation - twos is valid");
            scoreBtns[1].disabled = false;
        }
        if ((dice[j] == 3) && (scoreCard.threes == -1)) {
            console.log("upperscorecard validation - threes is valid");
            scoreBtns[2].disabled = false;
        }
        if ((dice[j] == 4) && (scoreCard.fours == -1)) {
            console.log("upperscorecard validation - fours is valid");
            scoreBtns[3].disabled = false;
        }
        if ((dice[j] == 5) && (scoreCard.fives == -1)) {
            console.log("upperscorecard validation - fives is valid");
            scoreBtns[4].disabled = false;
        }
        if ((dice[j] == 6) && (scoreCard.sixes == -1)) {
            console.log("upperscorecard validation - sixes is valid");
            scoreBtns[5].disabled = false;
        }

    }
    scoreTable = document.getElementById("lowerScoreCardTable");
    scoreBtns = scoreTable.getElementsByTagName("button");
    var num = [0, 0, 0, 0, 0, 0, 0];

    for (i = 0; i < 5; i++) {
        switch (dice[i]) {
            case 1:
                num[1]++;
                break;
            case 2:
                num[2]++;
                break;
            case 3:
                num[3]++;
                break;
            case 4:
                num[4]++;
                break;
            case 5:
                num[5]++;
                break;
            case 6:
                num[6]++;
                break;
        }
    }
    console.log("end of switch to tally how many matches, num array is " + num);
    for (i = 0; i < 7; i++) {
        if ((num[i] >= 4) && (scoreCard.fourOfA == -1)) {
            console.log("lowerscorecard - 4 of a kind valid");
            scoreBtns[0].disabled = false;
        }
        if ((num[i] >= 3) && (scoreCard.threeOfA == -1)) {
            console.log("lowerscorecard - 3 of a kind valid");
            scoreBtns[1].disabled = false;
        }
    }

    var numX = [];
    numX = num;
    console.log("verify numX is the same as num before sort, num = " + num);
    console.log("numX is " + numX);
    numX.sort(function (a, b) {
        return a - b
    });
    console.log("results of numX.sort" + numX);
    if ((numX[0] == 3) && (numX[1] == 2)) {
        if (scoreCard.fullHouse == -1) {
            console.log("full housle is valid");
            scoreBtns[2].disabled = false;
        }
    }

    var diceX = [];
    diceX = dice;
    console.log("value of diceX before sort " + diceX);
    diceX.sort(function (a, b) {
        return a - b
    });

    console.log("value of diceX after sort " + diceX);
    smStLow = false;
    smStHi = false;
    lgSt = false;

    if ((diceX[0] + 1) == diceX[1]) {
        if ((diceX[1] + 1) == diceX[2]) {
            if ((diceX[2] + 1) == diceX[3]) {
                smStLow = true;
                if ((diceX[3] + 1) == diceX[4]) {
                    lgSt = true;
                }
            }
        }
    }


    if ((diceX[1] + 1) == diceX[2]) {
        if ((diceX[2] + 1) == diceX[3]) {
            if ((diceX[3] + 1) == diceX[4]) {
                smStHi = true;
            }
        }
    }

    if ((lgSt) && (scoreCard.lgStraight == -1)) {
        scoreBtns[4].disabled = false;
    }
    if ((smStHi || smStLow) && (scoreCard.smStraight == -1)) {
        scoreBtns[3].disabled = false;
    }

}
    //disable controls, enable scoreCard
    //call checkYahtzee
    //call scoreTurn


function check4Yahtzee(){
        isYahtzee = true;
        for(i=0;  i<4; i++){
            if (dice[i] != dice[i + 1]) {
                isYahtzee = false;
            }
        }
        if(isYahtzee){
            //yahtzee scoring logic
        }
        return;
    }


function score(){
    //score, updateTotals
    //call endOfGame
}

function endOfGame(){
    //if yes, display message and final scores
    //else, call prepToRoll
}


function drawDie(diceValue, diceNum){
    var canvas = document.getElementById("diceCanvas");
    var ctx = canvas.getContext("2d");
    radius = 15;
    dicePosX = (diceNum - 1)*110 + 10;
    dicePosY = 10;
    switch (diceValue){
        case 1:
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(dicePosX, dicePosY, 100, 100);

            ctx.beginPath();
            ctx.arc((50+dicePosX),(dicePosY + 50),radius,0,2*Math.PI);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            break;

        case 2:
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(dicePosX, dicePosY, 100, 100);
            ctx.beginPath();
            ctx.arc((83+dicePosX),(dicePosY + 20),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((17+dicePosX),(dicePosY + 80),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            break;

        case 3:
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(dicePosX, dicePosY, 100, 100);
            ctx.beginPath();
            ctx.arc((83+dicePosX),(dicePosY + 20),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((17+dicePosX),(dicePosY + 80),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((50+dicePosX),(dicePosY + 50),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            break;

        case 4:
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(dicePosX, dicePosY, 100, 100);
            ctx.beginPath();
            ctx.arc((17+dicePosX),(dicePosY + 20),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((83+dicePosX),(dicePosY + 20),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((17+dicePosX),(dicePosY + 80),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((80+dicePosX),(dicePosY + 80),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            break;

        case 5:
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(dicePosX, dicePosY, 100, 100);
            ctx.beginPath();
            ctx.arc((17+dicePosX),(dicePosY + 20),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((50+dicePosX),(dicePosY + 50),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((83+dicePosX),(dicePosY + 20),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((17+dicePosX),(dicePosY + 80),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((80+dicePosX),(dicePosY + 80),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            break;

        case 6:
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(dicePosX, dicePosY, 100, 100);
            ctx.beginPath();
            ctx.arc((17+dicePosX),(dicePosY + 20),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((50+dicePosX),(dicePosY + 20),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((83+dicePosX),(dicePosY + 20),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((17+dicePosX),(dicePosY + 80),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((50+dicePosX),(dicePosY + 80),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            ctx.beginPath();
            ctx.arc((83+dicePosX),(dicePosY + 80),radius,0,2*Math.PI);
             ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();;
            break;


    }
}

