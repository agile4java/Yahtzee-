var rollNum;
var dice = [];
var hold = [false, false, false, false, false];
var noMatches;
var isYahtzee = false;

var scoreCard = {
    aces: -1,
        twos: -1,
        threes: -1,
        fours: -1,
        fives: -1,
        sixes: -1,
        upperTotalBeforeBonus: -1,
        upperBonus: -1,
        threeOfA: -1,
        fourOfA: -1,
        fullHouse: -1,
        smStraight: -1,
        lgStraight: -1,
        yahtzee: -1,
        chance: -1,
        upperTotal: -1,
        lowerTotal: -1,
        grandTotal: -1,

};

function clearScoreCard(){
    scoreCard.aces = -1;
    scoreCard.twos = -1;
    scoreCard.threes = -1;
    scoreCard.fours = -1;
    scoreCard.fives = -1;
    scoreCard.sixes = -1;
    scoreCard.upperTotalBeforeBonus = -1;
    scoreCard.upperBonus =  -1;
    scoreCard.threeOfA = -1;
    scoreCard.fourOfA = -1;
    scoreCard.fullHouse = -1;
    scoreCard.smStraight = -1;
    scoreCard.lgStraight = -1;
    scoreCard.yahtzee = -1;
    scoreCard.chance= -1;
     scoreCard.upperTotal= -1;
     scoreCard.lowerTotal= -1;
     scoreCard.grandTotal= -1;

}

function clearScoreTable(){

        document.getElementById("aceScore").innerHTML = null;
    

        document.getElementById("twoScore").innerHTML = null;


        document.getElementById("threeScore").innerHTML = null;


        document.getElementById("fourScore").innerHTML =null;


        document.getElementById("fiveScore").innerHTML = null;


        document.getElementById("sixScore").innerHTML =null;


        document.getElementById("upperScoreBeforeBonus").innerHTML = null;


        document.getElementById("upperBonus").innerHTML = null;


        document.getElementById("totalUpperScore").innerHTML = null;



        document.getElementById("3oakScore").innerHTML = null;


        document.getElementById("4oakScore").innerHTML = null;


        document.getElementById("fullHouseScore").innerHTML =null;;


        document.getElementById("smStraightScore").innerHTML = null;


        document.getElementById("lgStraightScore").innerHTML =null;


        document.getElementById("yahtzeeScore").innerHTML = null;


        document.getElementById("chanceScore").innerHTML = null;


        document.getElementById("lowerScore").innerHTML = null;


        document.getElementById("upperScoreRepeat").innerHTML = null;

        document.getElementById("grandTotalScore").innerHTML = null;


}


function totalScoreCard(){
    var upperScore = 0;
    var lowerScore = 0;
    var upperBeforeBonus = 0;
    if(scoreCard.aces != (-1)){
        upperBeforeBonus += scoreCard.aces;
    }
    if(scoreCard.twos != (-1)){
        upperBeforeBonus += scoreCard.twos;
    }
    if(scoreCard.threes != (-1)){
        upperBeforeBonus += scoreCard.threes;
    }
    if(scoreCard.fours != (-1)){
        upperBeforeBonus += scoreCard.fours;
    }
    if(scoreCard.fives != (-1)){
        upperBeforeBonus += scoreCard.fives;
    }
    if(scoreCard.sixes != (-1)){
        upperBeforeBonus += scoreCard.sixes;
    }
    if(upperBeforeBonus >= 63){
        upperScore = upperBeforeBonus + 35;
        scoreCard.upperBonus = 35;
    } else{
        upperScore = upperBeforeBonus;
    }
    scoreCard.upperTotalBeforeBonus = upperBeforeBonus;
    scoreCard.upperTotal = upperScore;
    if(scoreCard.threeOfA != -1){
        lowerScore += scoreCard.threeOfA;
    }
    if(scoreCard.fourOfA != -1){
        lowerScore += scoreCard.fourOfA;
    }
    if(scoreCard.fullHouse != -1){
        lowerScore += scoreCard.fullHouse;
    }
    if(scoreCard.smStraight != -1){
        lowerScore += scoreCard.smStraight;
    }
    if(scoreCard.lgStraight != -1){
        lowerScore += scoreCard.lgStraight;
    }
    if(scoreCard.yahtzee != -1){
        lowerScore += scoreCard.yahtzee;
    }
    if(scoreCard.chance != -1){
        lowerScore += scoreCard.chance;
    }
    scoreCard.lowerTotal = lowerScore;
    scoreCard.grandTotal = upperScore + lowerScore;
    return;
}

function cardIsFull(){
    if(scoreCard.aces == (-1)){
       return false;
    }
    if(scoreCard.twos == (-1)){
        return false;
    }
    if(scoreCard.threes == (-1)){
        return false;
    }
    if(scoreCard.fours == (-1)){
        return false;
    }
    if(scoreCard.fives == (-1)){
        return false;
    }
    if(scoreCard.sixes == (-1)){
        return false;
    }
    if(scoreCard.threeOfA == (-1)){
        return false;
    }
    if(scoreCard.fourOfA == (-1)){
        return false;
    }
    if(scoreCard.fullHouse == (-1)){
        return false;
    }
    if(scoreCard.smStraight == (-1)){
        return false;
    }
    if(scoreCard.lgStraight == (-1)){
        return false;
    }
    if(scoreCard.yahtzee == (-1)){
        return false;
    }
    if(scoreCard.chance == (-1)) {
        return false;
    }
    return true;
}

function  newGame(){



    clearScoreTable();
    clearScoreCard();
    dice = [0, 0, 0, 0, 0];
    var canvas = document.getElementById("diceCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, 560, 120);
    hold = [false, false, false, false, false];
    var inst = document.getElementById("inst1");
    inst.innerHTML = "New Game!  Press Roll Dice to begin your first turn!";
    prepToRoll();

}

function prepToRoll(){
    dice = [0, 0, 0, 0, 0];
    rollNum = 0;
    //set all dice to roll
    hold = [false, false, false, false, false];
    //disable dice hold buttons and enable roll dice and new game
    disableDieBtns();

    var inst = document.getElementById("inst2");
    inst.innerHTML = " ";

    var content = document.getElementById("buttonRow");
    var btns = content.getElementsByTagName("button");
    for(i=0; i <5; i++){
       
        btns[i].innerHTML = "Click to Keep";

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
    document.getElementById("rollDiceBtn").disabled = false;


   return;

}

function enableDieBtns(){
    var dieBtns = document.getElementsByClassName("dieBtn");
    for(i = 0; i < 5; i++){
        dieBtns[i].disabled = false;
    }
}

function disableDieBtns(){
    var dieBtns = document.getElementsByClassName("dieBtn");
    for(i = 0; i < 5; i++){
        dieBtns[i].disabled = true;
    }
}

function getRoll(){
    if(rollNum == 0){
        for(i=0; i<5; i++){
            var roll = rollDie();
            drawDie(roll, (i+1));
            dice[i] = roll;
            var inst = document.getElementById("inst1");
            inst.innerHTML = "First Roll!  Click buttons below dice to keep any dice." +  "<br>Then click Roll Dice " +
                "or click button to stop rolling and choose scoring.";
        }}else if(rollNum == 1 || rollNum == 2){
        var inst = document.getElementById("inst1");
        inst.innerHTML = "Second Roll!  Click buttons below dice to keep any<br> dice and click Roll Dice, " +
            "or click button to stop rolling and choose scoring.";
            for(i=0; i<5; i++){
                if(hold[i] == false){
                    roll = rollDie();
                    drawDie(roll, (i + 1));
                    dice[i] = roll;
                }
            }
        }else{
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
    enableDieBtns();
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
                content.getElementsByTagName("button")[die].innerHTML = "Click to Keep";
            }else {
                hold[die] = true;
                var content = document.getElementById("buttonRow");
                content.getElementsByTagName("button")[die].innerHTML = "Keep This Die";
            }

    return;
}

function prepToScore() {
    console.log("entering prepToScore, scoreCard.yahtzee = " + scoreCard.yahtzee);
    disableDieBtns();
    document.getElementById("rollDiceBtn").disabled = true;

    noMatches = true;
   
    //enable valid  scoreCards buttons
    var scoreTable = document.getElementById("upperScoreCardTable");
    var scoreBtns = scoreTable.getElementsByTagName("button");
    for (j = 0; j < 5; j++) {
        if ((dice[j] == 1) && (scoreCard.aces == -1)) {
            //console.log("upperscorecard validation - ones is valid");
            scoreBtns[0].disabled = false;
            noMatches = false;
        }
        if ((dice[j] == 2) && (scoreCard.twos == -1)) {
            //console.log("upperscorecard validation - twos is valid");
            scoreBtns[1].disabled = false;
            noMatches = false;
        }
        if ((dice[j] == 3) && (scoreCard.threes == -1)) {
            //console.log("upperscorecard validation - threes is valid");
            scoreBtns[2].disabled = false;
            noMatches = false;
        }
        if ((dice[j] == 4) && (scoreCard.fours == -1)) {
            //console.log("upperscorecard validation - fours is valid");
            scoreBtns[3].disabled = false;
            noMatches = false;
        }
        if ((dice[j] == 5) && (scoreCard.fives == -1)) {
            //console.log("upperscorecard validation - fives is valid");
            scoreBtns[4].disabled = false;
            noMatches = false;
        }
        if ((dice[j] == 6) && (scoreCard.sixes == -1)) {
            //console.log("upperscorecard validation - sixes is valid");
            scoreBtns[5].disabled = false;
            noMatches = false;
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

    num.sort(function (a, b) {
        return a - b
    });
    console.log("results of num.sort" + num);

        if(num[6] == 5){
            noMatches = false;
            check4Yahtzee();

        }
        if ((num[i] >= 4) && (scoreCard.fourOfA == -1)) {
            //console.log("lowerscorecard - 4 of a kind valid");
            scoreBtns[1].disabled = false;
            noMatches = false;
        }
        if ((num[i] >= 3) && (scoreCard.threeOfA == -1)) {
            //console.log("lowerscorecard - 3 of a kind valid");
            scoreBtns[0].disabled = false;
            noMatches = false;
        }

    if(!isYahtzee) {


        if ((num[6] == 3) && (num[5] == 2)) {
            if (scoreCard.fullHouse == -1) {
                //console.log("full housle is valid");
                scoreBtns[2].disabled = false;
                noMatches = false;
            }
        }

        var diceX = [];
        diceX = dice;
        //console.log("value of diceX before sort " + diceX);
        diceX.sort(function (a, b) {
            return a - b
        });

        //console.log("value of diceX after sort " + diceX);
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
            noMatches = false;
        }
        if ((smStHi || smStLow) && (scoreCard.smStraight == -1)) {
            scoreBtns[3].disabled = false;
            noMatches = false;
        }
        if (scoreCard.chance == -1) {
            scoreBtns[6].disabled = false;
            noMatches = false;
        }

        isYahtzee = false;
        //console.log("function PrepToScore, out of brackets before 'if noMatches button enabling");
        //if no matches, enable empty slots and score zero for selection
        if (noMatches == true) {
            //console.log("function Prep to Score, beginning of 'if' statement to enable buttons on empty rows");

            if (scoreCard.aces == (-1)) {
                document.getElementById("acesButton").disabled = false;
            }
            if (scoreCard.twos == (-1)) {
                document.getElementById("twosButton").disabled = false;
            }
            if (scoreCard.threes == (-1)) {
                document.getElementById("threesButton").disabled = false;
            }
            if (scoreCard.fours == (-1)) {
                document.getElementById("foursButton").disabled = false;
            }
            if (scoreCard.fives == (-1)) {
                document.getElementById("fivesButton").disabled = false;
            }
            if (scoreCard.sixes == (-1)) {
                document.getElementById("sixesButton").disabled = false;
            }

            if (scoreCard.threeOfA == (-1)) {
                document.getElementById("threeOfABtn").disabled = false;
            }

            if (scoreCard.fourOfA == (-1)) {
                document.getElementById("fourOfABtn").disabled = false;
            }


            if (scoreCard.fullHouse == (-1)) {
                document.getElementById("fullHouseBtn").disabled = false;
            }


            if (scoreCard.smStraight == (-1)) {
                document.getElementById("smStraightBtn").disabled = false;
            }


            if (scoreCard.lgStraight == (-1)) {
                document.getElementById("lgStraightBtn").disabled = false;
            }

            if (scoreCard.yahtzee == (-1)) {
                //   console.log("function PrepToScore inside noMatches 'if' inside yahtzee if, scoreCard.yahtzee = " + scoreCard.yahtzee);
                document.getElementById("yahtzeeBtn").disabled = false;

            }

        }
    }
    score();
}

function check4Yahtzee(){
            console.log("entering function check 4 yahtzee, scoreCard.yahtzee = " + scoreCard.yahtzee);
            noMatches = false;
            var inst = document.getElementById("inst2");
            //yahtzee scoring logic
            if(scoreCard.yahtzee == -1){
                //no yahtzee scored

                inst.innerHTML = "YAHTZEE! YAHTZEE! YAHTZEE!";
                document.getElementById("yahtzeeBtn").disabled = false;
                return;
            }else{
                if(scoreCard.yahtzee > 0) {
                //yahtzee already scored and entered as yahtzee
                //add 100 to bonus, joker rules
                //joker rules
                  inst.innerHTML = "ANOTHER YAHTZEE!  100 POINT BONUS!";
             
                console.log("in check 4 yahtzee before add 100, scoreCard.yahtzee = " + scoreCard.yahtzee);
                scoreCard.yahtzee += 100;
                    console.log("in check 4 yahtzee after add 100, scoreCard.yahtzee = " + scoreCard.yahtzee);
                }
            
                //yahtzee already score 0, no bonus
                
                //if upper section that matches yahtzee dice is open fill it in
                
                if ((dice[0] == 1) && (scoreCard.aces == -1)) {
                  
                    inst.innerHTML = "yahtzee scoring joker rules - score in ones";
                    scoreCard.aces = 5;
                    endOfGame();
                }
                if ((dice[0] == 2) && (scoreCard.twos == -1)) {
                    
                    inst.innerHTML = "yahtzee scoring joker rules - score in twos";
                    scoreCard.twos = 10;
                    endOfGame();
                }
                if ((dice[0] == 3) && (scoreCard.threes == -1)) {
                    
                    inst.innerHTML = "yahtzee scoring joker rules - score in threes";
                    scoreCard.threes = 15;
                    endOfGame();
                }
                if ((dice[0] == 4) && (scoreCard.fours == -1)) {
                    
                    inst.innerHTML = "yahtzee scoring joker rules - score in fours";
                    scoreCard.fours = 20;
                    endOfGame();
                }
                if ((dice[0] == 5) && (scoreCard.fives == -1)) {
                    
                    inst.innerHTML = "yahtzee scoring joker rules - score in fives";
                    scoreCard.fives = 25;
                    endOfGame();
                }
                if ((dice[0] == 6) && (scoreCard.sixes == -1)) {
                    
                    inst.innerHTML = "yahtzee scoring joker rules - score in sixes";
                    scoreCard.sixes = 30;
                    endOfGame();
                }
                isYahtzee = true;
                scoreTable = document.getElementById("lowerScoreCardTable");
                scoreBtns = scoreTable.getElementsByTagName("button");
            
                if(scoreCard.threeOfA == -1) {
                    scoreBtns[0].disabled = false;
                }
                if(scoreCard.fourOfA == -1) {
                    scoreBtns[1].disabled = false;
                }
                if(scoreCard.fullHouse == -1){
                    scoreBtns[2].disabled = false;
                }
                if(scoreCard.smStraight == -1){
                    scoreBtns[3].disabled = false;
                }
                if(scoreCard.lgStraight == -1){
                    scoreBtns[4].disabled = false;
                }
                if(scoreCard.chance == -1){
                    scoreBtns[6].disabled = false;
                }
            }
    console.log("end of check 4 yahtzee, scoreCard.yahtzee = " + scoreCard.yahtzee);
            return;
        }

function score(){
    if(noMatches == true){
        var inst = document.getElementById("inst1");
        inst.innerHTML = "No matches!! <br> Buttons are enabled next to empty rows, select a row to enter a 0 in.";
        return;
    } else {
        var inst = document.getElementById("inst1");
        inst.innerHTML = "Please select a category to score your dice. <br> Buttons are enabled next to valid rows.";
        return;
    }

}

function scoreUpper(choice){
    var score = 0;
    var choice;
    var diceValue = 0;
    switch (choice){
        case 0:
            diceValue = 1;
            for(i=0; i < 5; i++) {
                if (dice[i] == diceValue) {
                    score += diceValue;
                }
            }
            if(noMatches == true){score = 0}
            scoreCard.aces = score;
            break;
        case 1:
            diceValue = 2;
            for(i=0; i < 5; i++) {
                if (dice[i] == diceValue) {
                    score += diceValue;
                }
            }
            if(noMatches == true){score = 0}
            scoreCard.twos = score;
            break;
        case 2:
            diceValue = 3;
            for(i=0; i < 5; i++) {
                if (dice[i] == diceValue) {
                    score += diceValue;
                }
            }
            if(noMatches == true){score = 0}
            scoreCard.threes = score;
            break;
        case 3:
            diceValue = 4;
            for(i=0; i < 5; i++) {
                if (dice[i] == diceValue) {
                    score += diceValue;
                }
            }
            if(noMatches == true){score = 0}
            scoreCard.fours = score;
            break;
        case 4:
            diceValue = 5;
            for(i=0; i < 5; i++) {
                if (dice[i] == diceValue) {
                    score += diceValue;
                }
            }
            if(noMatches == true){score = 0}
            scoreCard.fives = score;
            break;
        case 5:
            diceValue = 6;
            for(i=0; i < 5; i++) {
                if (dice[i] == diceValue) {
                    score += diceValue;
                }
            }
            if(noMatches == true){score = 0}
            scoreCard.sixes = score;
            break;
    }

    endOfGame();
}

function lowerScore(choice){
    var score = 0;
    var choice;
    var diceTotal = 0;
    for(i=0; i < 5; i++){
        diceTotal += dice[i];
    }

    switch (choice){
        case 0:
            score = diceTotal;
            if(noMatches == true){score = 0}
            scoreCard.threeOfA = score;
            break;
        case 1:
            score = diceTotal;
            if(noMatches == true){score = 0}
            scoreCard.fourOfA = score;
            break;
        case 2:
            score = 25;
            if(noMatches == true){score = 0}
            scoreCard.fullHouse = score;
            break;
        case 3:
            score = 30;
            if(noMatches == true){score = 0}
            scoreCard.smStraight = score;
            break;
        case 4:
            score = 40;
            if(noMatches == true){score = 0}
            scoreCard.lgStraight = score;
            break;
        case 5:
            score = 50;
            if(noMatches == true){score = 0}
            scoreCard.yahtzee = score;
            break;
        case 6:
            score = diceTotal;
            scoreCard.chance = score;
            break;
    }


    endOfGame();
}

function endOfGame(){
    //if yes, display message and final scores
    //else, call prepToRoll
    totalScoreCard();
    updateScoreView();
    var gameOver = cardIsFull();
    if(gameOver) {
        var inst = document.getElementById("inst1");
        inst.innerHTML = "Game Over!  Your final score is<br> shown in the Score Card";
        return;
    } else {
        var inst = document.getElementById("inst1");
        inst.innerHTML = "Score recorded!  Press Roll Dice to begin next turn.";
    }
    //console.log("endOfGame before updateScoreView, scoreCard array = " + scoreCard);

    prepToRoll();
    return;
}

function updateScoreView(){

    if(scoreCard.aces != -1){
        document.getElementById("aceScore").innerHTML = scoreCard.aces;
    }
    if(scoreCard.twos != -1){
        document.getElementById("twoScore").innerHTML = scoreCard.twos;
    }
    if(scoreCard.threes != -1){
        document.getElementById("threeScore").innerHTML = scoreCard.threes;
    }
    if(scoreCard.fours != -1){
        document.getElementById("fourScore").innerHTML = scoreCard.fours;
    }
    if(scoreCard.fives != -1){
        document.getElementById("fiveScore").innerHTML = scoreCard.fives;
    }
    if(scoreCard.sixes != -1){
        document.getElementById("sixScore").innerHTML = scoreCard.sixes;
    }
    if(scoreCard.upperTotalBeforeBonus != -1){
        document.getElementById("upperScoreBeforeBonus").innerHTML = scoreCard.upperTotalBeforeBonus;
    }
    if(scoreCard.upperBonus != -1) {
        document.getElementById("upperBonus").innerHTML = scoreCard.upperBonus;
    }
    if(scoreCard.upperTotal != -1) {
        document.getElementById("totalUpperScore").innerHTML = scoreCard.upperTotal;
    }

    if(scoreCard.threeOfA != -1){
        document.getElementById("3oakScore").innerHTML = scoreCard.threeOfA;
    }
    if(scoreCard.fourOfA != -1){
        document.getElementById("4oakScore").innerHTML = scoreCard.fourOfA
    }
    if(scoreCard.fullHouse != -1){
        document.getElementById("fullHouseScore").innerHTML = scoreCard.fullHouse;
    }
    if(scoreCard.smStraight != -1){
        document.getElementById("smStraightScore").innerHTML = scoreCard.smStraight;
    }
    if(scoreCard.lgStraight != -1){
        document.getElementById("lgStraightScore").innerHTML = scoreCard.lgStraight;
    }
    if(scoreCard.yahtzee != -1){
        document.getElementById("yahtzeeScore").innerHTML = scoreCard.yahtzee;
    }
    if(scoreCard.chance != -1){
        document.getElementById("chanceScore").innerHTML = scoreCard.chance;
    }
    if(scoreCard.lowerTotal != -1) {
        document.getElementById("lowerScore").innerHTML = scoreCard.lowerTotal;
    }
    if(scoreCard.upperTotal != -1){
        document.getElementById("upperScoreRepeat").innerHTML = scoreCard.upperTotal;
    }
    if(scoreCard.grandTotal != -1){
        document.getElementById("grandTotalScore").innerHTML = scoreCard.grandTotal;
    }
    return;
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

function testFillUpper() {
    if (scoreCard.aces == (-1)) {
        scoreCard.aces = 5
    }
    if (scoreCard.twos == (-1)) {
        scoreCard.twos = 5;
    }
    if (scoreCard.threes == (-1)) {
        scoreCard.threes = 5;
    }
    if (scoreCard.fours == (-1)) {
        scoreCard.fours = 5;
    }
    if (scoreCard.fives == (-1)) {
        scoreCard.fives = 5;
    }
    if (scoreCard.sixes == (-1)) {
        scoreCard.sixes = 5;
    }
    endOfGame();
}

function testFillLower(){
    if(scoreCard.threeOfA == (-1)){
        scoreCard.threeOfA = 5;
    }
    if(scoreCard.fourOfA == (-1)){
        scoreCard.fourOfA = 5;
    }
    if(scoreCard.fullHouse == (-1)){
        scoreCard.fullHouse = 5;
    }
    if(scoreCard.smStraight == (-1)){
        scoreCard.smStraight = 5;
    }
    if(scoreCard.lgStraight == (-1)){
        scoreCard.lgStraight = 5;
    }
    if(scoreCard.chance == (-1)) {
        scoreCard.chance = 5;
    }
    endOfGame()
}

function testRollYahtzee(){
    for(i=0; i<5; i++) {
        var roll = 6;
        drawDie(roll, (i + 1));
        dice[i] = roll;
    }
}
