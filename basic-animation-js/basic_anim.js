//This  will animate the given element to slide linearly from 0px to 200px over a time of 1 second (1000 ms).

//basic animation

function animate(elem,style,unit,from,to,time) {
    if( !elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) clearInterval(timer);
        },25);
    elem.style[style] = from+unit;
}

//Usage

animate(
    document.getElementById('target'),
    "left","px",0,200,1000
);


