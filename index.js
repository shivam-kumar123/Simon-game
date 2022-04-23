var randomNumber = Math.floor(Math.random() * 4);
var simonColors = ["red", "blue", "yellow", "green"];
var simonArray = [];
var userArray = [];
var turn = true;
simonArray.push(simonColors[randomNumber]);
makeSound(simonColors[randomNumber]);
addEffect(simonColors[randomNumber]);
function makeSound(color)
{
    var audio = new Audio("sounds/" + color + ".mp3");
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
            }
            else
            {
                userArray = [];
                randomNumber = Math.floor(Math.random() * 4);
                simonArray.push(simonColors[randomNumber]);
                makeSound(simonColors[randomNumber]);
                addEffect(simonColors[randomNumber]);
                console.log(simonArray);
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
    }
});