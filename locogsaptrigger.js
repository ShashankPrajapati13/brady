function abcd(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
abcd();

   gsap.to("#the",{
    scrollTrigger:{
        trigger:"#main5",
        scroller:"#main",
        start: "top 45%",
        scrub:2,
        scroll:"smooth",
        end: "bottom 100%",
    },
    left:"60%",
    duration:10,
   
   })
   


   gsap.to("#drev",{
    scrollTrigger:{
        trigger:"#main5",
        scroller:"#main",
        start: "top 25%",
        end: "bottom 80%",
        scrub:2,
        scroll:"smooth"
        },
    left:"-10%",
    duration:10,
   
   })
   gsap.to("#will",{
    scrollTrigger:{
        trigger:"#main5",
        scroller:"#main",
        start: "top -5%",
        end: "bottom 70%",
        scrub:2,
        scroll:"smooth"
       },
    left:"60%",
    duration:10,
   
   })
   gsap.to("#mimg",{
    scrollTrigger:{
        trigger:"#main5",
        scroller:"#main",
        scrub:2,
        scroll:"smooth"
       },
    rotate:"720deg",
    duration:100,
   
   })

   gsap.to("#digi",{
    scrollTrigger:{
        trigger:"#main5",
        scroller:"#main",
        end: "bottom 60%",
        scrub:2,
        scroll:"smooth",
        start: "top -25%",
       },
    left:"0%",
    duration:10,
   
   })


   var animate = document.querySelectorAll(".animate");
gsap.set(animate,{opacity:0})
animate.forEach(function(elem){
  gsap.to(elem,{
    scrollTrigger:{
      trigger:elem,
      scroller:"#main",
      start:"top 93%",
      
    },
    opacity:1,
    onStart:function(){
      $(elem).textillate({
        in:{
          effect:`fadeInUp`,
          duration:3
        }
      })
    }
  })
});


gsap.to("#nav",{
  scrollTrigger:{
      trigger:"#main1",
      scroller:"#main",
      scroll:"smooth",
  },
  opacity:1,
  y:"55",
  duration:3,
 
 })
 