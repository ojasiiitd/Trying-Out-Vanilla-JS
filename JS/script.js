var h = document.getElementById("heading");
var c = -1;

h.addEventListener("click" , colorbadlo);

function colorbadlo()
{
    c++;
    if(c === 7)
    {
        c = 0;
    }

    var classes = ["is-size-1 has-text-warning" , "is-size-1 has-text-dark" , "is-size-1 has-text-success" , "is-size-1 has-text-info" , "is-size-1 has-text-danger" , "is-size-1 has-text-primary" , "is-size-1 has-text-link"]
    
    h.className = classes[c];
}