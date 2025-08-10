let inp = document.querySelector("input");
let body = document.querySelector("body");

let CheatSheet = {
    lower: /[a-z]/, 
    Upper: /[A-Z]/,
    Digit: /[0-9]/
};

let li1 = document.querySelector("li:nth-child(1)");
let li2 = document.querySelector("li:nth-child(2)");
let li3 = document.querySelector("li:nth-child(3)");

inp.addEventListener("input", function() 
{
    if (CheatSheet.lower.test(inp.value)) 
    {        
        li1.classList.remove("red");
        li1.classList.add("green");
    }
    else
    {
        li1.classList.remove("green");
        li1.classList.add("red");   
    }

    if(CheatSheet.Upper.test(inp.value))
    {
        li2.classList.remove("red");
        li2.classList.add("green");
    }
    else
    {
        li2.classList.remove("green");
        li2.classList.add("red");
    }

    if(CheatSheet.Digit.test(inp.value))
    {
        li3.classList.remove("red");
        li3.classList.add("green");
    }
    else
    {
        li3.classList.remove("green");
        li3.classList.add("red");
    }
});