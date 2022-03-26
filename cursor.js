let Cursor = document.querySelector("#cursor");
let body = document.querySelector("body");

body.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;
     Cursor.style.left = `${x}px`;
     Cursor.style.top = `${y}px`;
    console.log(x,y)
}

/*var div = document.querySelectorAll(".div");


div.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        Cursor.style.backgroundColor="tranparent";
        eCursor.style.display="flex";

    })
    
        elem.addEventListener("mouseleave",function(){
            eCursor.style.display="none";
            Cursor.style.backgroundColor="f76236";
    
        })
    })
 let eCursor = document.querySelector("#ecursor");
*/