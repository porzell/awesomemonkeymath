window.onload = loadPage;
/* variables */
var playerStats = new Array(2); //holds cur branch #, # bananas, and # lives
var playerNames = new Array(2); //names of players
var curPlayer; //current player, either 0 or 1
var endGame; //boolean to tell us if game is at end yet
var isChallenge; //tells us if current game is in challenge mode or not

var curProblem; //current problem; multi fields

/* startGame function sets up the actual game */
function startGame(){
    curPlayer = 0;
    endGame = 0;
    isChallenge = 0;
    for(var cnt1 = 0; cnt1 < 2; cnt1++)
    {
        playerStats[cnt1] = new Array(3);
        for(var cnt2 = 0; cnt2 < 3; cnt2++)
        {                            
            playerStats[cnt1][cnt2] = 0;
        }
    }
    playGame();
}
		
/* playGame function sets up the question */
function playGame(){
    
	    //set first text area
	    document.getElementById("cur_player").innerHTML = playerNames[curPlayer];
	
	    //get question & set question text area
        setUpQuestion();
        
        //clear text box
        document.getElementsByName("user_answer").innerHTML = "";
        
        //update current player stats
        var strP1 = playerNames[0] + ":<br>     Number of bananas: " + playerStats[0][1] + "<br>";
        strP1 += "     Number of lives: " + playerStats[0][2];
        var strP2 = playerNames[1] + ":<br>     Number of bananas: " + playerStats[1][1] + "<br>";
        strP2 += "     Number of lives: " + playerStats[1][2];
        
        document.getElementById("p1_stats").innerHTML = strP1;
        document.getElementById("p2_stats").innerHTML = strP2;
}

/* loadPage loads the initial welcome page */
function loadPage()
{
    var button = document.getElementById("word_problem_btn");
    button.onclick = setUpQuestion;
    
	//document.getElementById("btn_enter").style.visibility = "hidden";
	//document.getElementById("btn_skip").style.visibility = "hidden";
	//document.getElementById("btn_challenge").style.visibility = "hidden";
    //startGame();
    //loadScript("name_generator.js",null);
}

function setUpQuestion()
{
    var txt = document.getElementById("txt");
    if(!txt)
        alert("Could not find txt!");
    
    //Get new problem.
    curProblem = genProblem();
    
    //txt.innerHTML = "<br><br>" + generate_word_problem({operation:operation,value1:v1,value2:v2}) + "<br>Ans: " + curProblem.answer;
    txt.innerHTML = "<br><br>" + curProblem.text;
}

function challenge(){
    if(isChallenge != 2)
    {
        if(playerStats[curPlayer][1] < 5)
        {    
            alert("Need 5 bananas to challenge");
            return;
        }
        isChallenge = 1;
        playerStats[curPlayer][1] -= 5;
    }
    //set first text area
    document.getElementById("cur_player").innerHTML = playerNames[curPlayer];
    
    //get question & set question text area        
    setUpQuestion();
        
    //clear text box
    document.getElementsByName("user_answer").innerHTML = "";
    
    //update current player stats
    var strP1 = playerNames[0] + ":<br>     Number of bananas: " + playerStats[0][1] + "<br>";
    strP1 += "     Number of lives: " + playerStats[0][2];
    var strP2 = playerNames[1] + ":<br>     Number of bananas: " + playerStats[1][1] + "<br>";
    strP2 += "     Number of lives: " + playerStats[1][2];
        
    document.getElementById("p1_stats").innerHTML = strP1;
    document.getElementById("p2_stats").innerHTML = strP2;
}

function skip(){
    var extra ="";
    
    for(var i = 0; i < curProblem.tags.length; i++)
        saveStudentScore(playerNames[curPlayer], curProblem.tags[i], false);
                
    if(playerStats[curPlayer][1] > 0)
    {
        extra = "Your monkey dropped a banana!";
        (playerStats[curPlayer][1]) -= 1;
    }
    alert("The answer was " + curProblem.answer + ". " + extra);    
    
    //update stats info
    var strP1 = playerNames[0] + ":<br>     Number of bananas: " + playerStats[0][1] + "<br>";
    strP1 += "     Number of lives: " + playerStats[0][2];
    var strP2 = playerNames[1] + ":<br>     Number of bananas: " + playerStats[1][1] + "<br>";
    strP2 += "     Number of lives: " + playerStats[1][2];
        
    document.getElementById("p1_stats").innerHTML = strP1;
    document.getElementById("p2_stats").innerHTML = strP2;
    
    //next question
    if(curPlayer == 0)
        curPlayer = 1;
    else                
        curPlayer = 0;
    playGame();
}

function answerEntered(){
    var answerCorrect;
    var usersAns = document.getElementById("user_answer").value;
    if(usersAns == curProblem.answer)
        answerCorrect = 1;
    else
        answerCorrect = 0;
    
    if(isChallenge && answerCorrect)
    {
        if(isChallenge == 1)
        {
            for(var i = 0; i < curProblem.tags.length; i++)
                saveStudentScore(playerNames[curPlayer], curProblem.tags[i], true);
                
            alert("Correct! You got a life!");
            (playerStats[curPlayer][2])++;
            isChallenge = 2;
            if(curPlayer == 0)
                curPlayer = 1;
            else
                curPlayer = 0;
            challenge();
        }
        else
        {
            for(var i = 0; i < curProblem.tags.length; i++)
                saveStudentScore(playerNames[curPlayer], curProblem.tags[i], true);
                
            alert("Correct! You got 5 bananas!");
            (playerStats[curPlayer][1]) += 5;
            isChallenge = 0;
            if(curPlayer == 0)
                curPlayer = 1;
            else
                curPlayer = 0;
            playGame();
        }
    }
    else if(isChallenge && !answerCorrect)
    {
        if(isChallenge == 1)
        {
            for(var i = 0; i < curProblem.tags.length; i++)
                saveStudentScore(playerNames[curPlayer], curProblem.tags[i], false);
                
            alert("Incorrect. The answer was " + curProblem.answer);
            isChallenge = 2;
            if(curPlayer == 0)
                curPlayer = 1;
            else
                curPlayer = 0;
            challenge();
        }
        else
        {
            for(var i = 0; i < curProblem.tags.length; i++)
                saveStudentScore(playerNames[curPlayer], curProblem.tags[i], false);
                
            alert("Incorrect. The answer was " + curProblem.answer);
            isChallenge = 0;
            if(curPlayer == 0)
                curPlayer = 1;
            else
                curPlayer = 0;
            playGame();
        }
    }
    else
    {
        if(answerCorrect == 1)
        {
            //alert("Correct! You got a banana!");
            (playerStats[curPlayer][1])++;
            (playerStats[curPlayer][0])++;
            
            for(var i = 0; i < curProblem.tags.length; i++)
                saveStudentScore(playerNames[curPlayer], curProblem.tags[i], true);
            
            //animate monkey moving up
            monkeyJump(curPlayer, true);
            
            if(playerStats[curPlayer][0] == 19)
            {
                alert("Monkey reached the flag! " + playerNames[curPlayer] + " wins!");
                endGame();
            }
        }
        else
        {
            var extra ="";
            if(playerStats[curPlayer][1] > 0)
            {
                extra = "Your monkey dropped a banana!";
                (playerStats[curPlayer][1]) -= 1;
                
                for(var i = 0; i < curProblem.tags.length; i++)
                    saveStudentScore(playerNames[curPlayer], curProblem.tags[i], false);
                
                //monkeyJump(curPlayer, false);
            }
            
            alert("Incorrect! The answer was " + curProblem.answer + ". " + extra);
        }
    }
    
    //update stats info
    var strP1 = playerNames[0] + ":<br>     Number of bananas: " + playerStats[0][1] + "<br>";
    strP1 += "     Number of lives: " + playerStats[0][2];
    var strP2 = playerNames[1] + ":<br>     Number of bananas: " + playerStats[1][1] + "<br>";
    strP2 += "     Number of lives: " + playerStats[1][2];
        
    document.getElementById("p1_stats").innerHTML = strP1;
    document.getElementById("p2_stats").innerHTML = strP2;
    
    //next question
    if(curPlayer == 0)
        curPlayer = 1;
    else                
        curPlayer = 0;
    playGame();
}

/* function to end game */
function endGame(){
    //stuff to save stats
    //end game
    alert("End of game");
}

/* function for if game is quit early */
function quitGame(){
    //dont bother to save student stats
    alert("Game quit");
}