var balls = document.getElementsByClassName("eyeballs");

console.log(balls)

window.addEventListener("mousedown" , colorIt);
window.addEventListener("mouseup" , prevv);
window.addEventListener("mousemove" , move)

function colorIt()
{
    for(var i=0 ; i<balls.length ; i++)
    {
        balls[i].style["background-color"] = "blue";
    }
}

function prevv()
{
    for(var i=0 ; i<balls.length ; i++)
    {
        balls[i].style["background-color"] = "black";
    }
}

function move()
{
    var e = window.event;
    console.log(e.clientX + " " + e.clientY);
    var x = (-e.clientX / 25) , y = (-e.clientY / 10);
    for(var i=0 ; i<balls.length ; i++)
    {
        balls[i].style["transform"] = "translate(" + x + "px" + "," + y + "px)";
    }
}