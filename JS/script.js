var f = document.getElementById("firs"),
    s = document.getElementById("sec"),
    t = document.getElementById("thir");

window.addEventListener("scroll" , showScroll)

function showScroll()
{
    var y = window.scrollY;
    
    if(y >= 0)
    {
        f.style.transition = ".8s ease all";
        f.style.opacity = "1";
    }

    if(y >= 400)
    {
        s.style.transition = ".8s ease all";
        s.style.opacity = "1";
    }
    
    if(y >= 1300)
    {
        t.style.transition = ".8s ease all";
        t.style.opacity = "1";
    }
}