let gameSeq = [];
let userSeq = [];

let gameStarted = false;
let level = 0;

let btns = ["yellow" , "red" , "purple" , "green"];

let highScore;
let userScore = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(gameStarted == false)
    {
        console.log("Game is Started !");
        gameStarted = true;
    }

    levelUp();
})

function levelUp()
{
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random() * 4);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn)
{   
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 400);
}

function btnPress()
{
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click" , btnPress);
}

function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    } , 400);
}

function checkAns(idx)
{
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp , 1000);
        }

        if (level > highScore)
        {
            highScore = level;
            let highScoreElement = document.querySelector("h3");
            highScoreElement.innerHTML = `High Score: ${highScore}`;
        }
    }
    else
    {
        h2.innerHTML = `GAME OVER ! Your Score was <b>${level}</b> <br>Press Any Key to Start !`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor = "white";
        } , 150)
        reset();
    }
}

function reset()
{
    gameStarted = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}