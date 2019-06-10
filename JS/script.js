var h = document.getElementById("heading");
var c = -1;

document.body.addEventListener("keydown" , colorbadlo);

function colorbadlo()
{
    var kc = event.keyCode;
    if(kc == 39)
    {
        c++;
    }
    else if(kc == 37)
    {
        c--;
    }
    else
    {
        kc = null;
    }
    if(c === 7)
    {
        c = 0;
    }
    else if(c == -1)
    {
        c = 6;
    }

    if(kc)
    {
        var classes = ["is-size-1 has-text-warning" , "is-size-1 has-text-dark" , "is-size-1 has-text-success" , "is-size-1 has-text-info" , "is-size-1 has-text-danger" , "is-size-1 has-text-primary" , "is-size-1 has-text-link"] , words = ["are" , "you" , "ready" , "to" , "be" , "fully" , "amazed?"];
        
        h.className = classes[c];
        h.innerHTML = words[c];
}