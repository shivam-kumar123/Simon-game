var randomNumber = Math.floor(Math.random() * 4);
var simonColors = ["red", "blue", "yellow", "green"];
var simonArray = [];
var userArray = [];
var cnt = 1;
function makeSound(color)
{
    var audio = new Audio("./sounds/" + color + ".mp3");
    audio.play();
}
function addEffect(color)
{
    $("#" + color).addClass("pressed");
    $("#" + color).fadeOut(100).fadeIn(100);
    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    } , 100);
}
function init()
{
    setTimeout(function()
    {
        $("h1").text("level: " + cnt++); 
        for(let i=0;i<8;i++)
        {
            addEffect(simonColors[randomNumber]);
        }
        makeSound(simonColors[randomNumber]);
    }, 2000);
}
simonArray.push(simonColors[randomNumber]);
init();
function checking()
{
    for(var i=0;i<userArray.length;i++)
    {
        if(userArray[i] !== simonArray[i])
        {
            return 0;
        }
    }
    return 1;
}
$(".btn").click(function(event) 
{
    userArray.push(event.target.id);
    makeSound(event.target.id);
    addEffect(event.target.id);
    if(userArray.length === simonArray.length) 
    {
        var check = checking();
        setTimeout(function() 
        {
            if(check === 0)
            {
                $("h1").text("Game Over");
                $("body").addClass("game-over");
                makeSound("wrong");
                userArray = [];
                simonArray = [];
                setTimeout(function()
                {
                    location.reload();
                }, 3000);
            }
            else
            {
                $("h1").text("level: " + cnt++);
                userArray = [];
                randomNumber = Math.floor(Math.random() * 4);
                simonArray.push(simonColors[randomNumber]);
                makeSound(simonColors[randomNumber]);
                addEffect(simonColors[randomNumber]);
            }
        }, 1000);
    }
    else if(checking() === 0)
    {
        $("h1").text("Game Over");
        $("body").addClass("game-over");
        makeSound("wrong");
        userArray = [];
        simonArray = [];
        setTimeout(function(){
            location.reload();
        }, 3000);
    }
});