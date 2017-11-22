/*
  fade in/out on "hover"
  (c) 2014 xjurp20@vse.cz
    
  with many thanks to
  Peter-Paul Koch, http://www.quirksmode.org/js/events_mouse.html
*/

function show(a,b,c)
{
    b.style.zIndex = "1000";
    //var relTarg = c.relatedTarget || c.fromElement;
    //if (relTarg.nodeName == "UL" || c.target.nodeName != "DIV")return 0;
    if (a<1 && b.style.opacity != 1) {
        window.setTimeout(
            function() {
                b.style.display = "block";
                b.style.opacity = a;
                return show(a+0.1,b,c);
                },
            20);
    } else {
        b.style.display = "block";
        b.style.opacity = 1;
    }
}

function hide(a,b,c)
{
    b.style.zIndex = "1000";
    var relTarg = c.relatedTarget || c.toElement;
    if ( (relTarg.nodeName == "UL" && relTarg == b) || relTarg.nodeName == "A" ) return 0;
    if (a>0) {
        window.setTimeout(
            function() {
                b.style.opacity = a;
                return hide(a-0.1,b,c)
                },
            20);
    } else {
        b.style.display = "none";
        b.style.opacity = 0;
    }
}
