(function() {
    // Init
    var container = document.getElementById("container");
    var  inner = document.getElementById("circle");
    var  outer = document.getElementById("blur");
  
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = (e.clientX - this._x)*1;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    //-----------------------------------------
  
    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };
  
    //-----------------------------------------
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      inner.style = "";
      outer.style = "";
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //-----------------------------------------
  
    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
       // (mouse.y / outer.offsetHeight / 2).toFixed(2),
       // (mouse.x / outer.offsetWidth / 2).toFixed(2)
      );
    };
  
    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform ="translate(-50%, -50%)"+ style;
      inner.style.webkitTransform ="translate(-50%, -50%)"+style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
       outer.style.transform ="translate(-50%, -50%)"+ style;
       outer.style.webkitTransform ="translate(-50%, -50%)"+style;
       outer.style.mozTransform = style;
       outer.style.msTransform = style;
       outer.style.oTransform = style;
    };
  
    //-----------------------------------------
  
    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
  })();
  
  
  
  

let outerCursor = document.querySelector("#right");
let main3 = document.querySelector("#main3");

main3.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX /20;
    let y = e.clientY/20;
     outerCursor.style.left = `${x}px`;
     outerCursor.style.top = `${y}px`;
    console.log(x,y)
}

let img = document.querySelectorAll("#main2 img");

img.forEach(function(elem){
  elem.addEventListener("mouseover", function(){
    elem.style.transform="rotate(1080deg)";
    elem.style.transition="all cubic-bezier(0.19, 1, 0.22, 1) 2s";
  });
  
    elem.addEventListener("mouseout", function(){
      setTimeout(function(){
      elem.style.transform="rotate(0deg)";
      elem.style.transition="none";
    },1000)
    });
  
    
  
  
})
