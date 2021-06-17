$(function ()
{  
    $(window).on("load",() => $("#loader").css("display","none"));
    
    var height = $("#header").outerHeight();
  $(".body").offset({top:height});
  $("body").css("margin-bottom","+="+height);
 const endd = height;
 
 
    $("#t").on("click",()=> $("#t").css("display","none"));
    
    var hd = gsap.timeline();
    
    
    hd.fromTo("#logo",{y : -100, opacity :0},{opacity:1,ease: "back.out" , y:0})
    .fromTo("nav",{x : -100, opacity :0}, {x:0,opacity :1,  ease: "back.out"})
    .fromTo("#ham-X",{x : -50, rotateZ: -120, opacity :0}, {x:0,opacity :1,  ease: "power4.out(1,0.1)" ,delay :-.4, rotateZ :0})
    
    
    gsap.set(".card-body", {opacity : 0}); ScrollTrigger.batch(".card-body", { interval: 0.1,
    
onEnter: batch => {gsap.from(batch, {y:-100,  stagger: .1, overwrite: true}); gsap.to(batch ,{y:0,opacity :1,overwrite :true, stagger :.1})},

 onLeave: batch => gsap.to(batch, {opacity :0, y: 100, overwrite: true, stagger :.1}), 
 
 onEnterBack: batch => /*{ gsap.from(batch, { x :-100,  stagger: 0.15, overwrite: true}); */gsap.to(batch ,{y:0,opacity :1, overwrite :true , stagger :.1}), 
 
 onLeaveBack: batch => gsap.to(batch, {opacity :0,y:-100, overwrite: true, stagger :.1}), start: "10% bottom", end: "bottom " + (endd + 70)}); 
 
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".card-body", {opacity  :1,x: 0})); 

        gsap.set(".card-img", {opacity : 0}); ScrollTrigger.batch(".card-img", { interval: 0.1, // time window (in seconds) for batching to occur. 
batchMax: 99, // maximum batch size (targets). Can be function-based for dynamic values 
onEnter: batch => {gsap.from(batch, {y:100,  stagger: .1, overwrite: true}); gsap.to(batch ,{y:0,opacity :1,overwrite :true, stagger :.1})},

 onLeave: batch => gsap.to(batch, {opacity :0, y: -100, overwrite: true, stagger :.1}), 
 
 onEnterBack: batch => /*{ gsap.from(batch, { x :-100,  stagger: 0.15, overwrite: true}); */gsap.to(batch ,{x:0,y:0,opacity :1, overwrite :true , stagger :.1}), 
 
 onLeaveBack: batch => gsap.to(batch, {opacity :0,y:100,  overwrite: true, stagger :.1}), start: "10% bottom", end: "bottom " + (endd + 70)}); 
 ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".card-img", {opacity  :1,x: 0})); 
 
 
 
 gsap.set(".imgg", {opacity : 0}); ScrollTrigger.batch(".imgg", { interval: 0.1, // time window (in seconds) for batching to occur. 
batchMax: 99, // maximum batch size (targets). Can be function-based for dynamic values 
onEnter: batch => {gsap.from(batch, {y:-100,scale:0, stagger: .1, overwrite: true}); gsap.to(batch ,{y:0,opacity :1,scale:1,overwrite :true, stagger :.1})},

 onLeave: batch => gsap.to(batch, {opacity :0, y: 100,scale:0, overwrite: true, stagger :.1}), 
 
 onEnterBack: batch => /*{ gsap.from(batch, { x :-100,  stagger: 0.15, overwrite: true}); */gsap.to(batch ,{y:0,scale:1, opacity :1, overwrite :true , stagger :.1}), 
 
 onLeaveBack: batch => gsap.to(batch, {opacity :0,y:-100,scale:0, overwrite: true, stagger :.1}), start: "10% bottom", end: "bottom " + (endd + 70)}); 
 ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".imgg", {opacity  :1,y: 0,scale:1})); 
 
});    

var isply = null;

function playy(a)
{
  
   
     if(isply === null)
    {    isply = document.getElementsByClassName('pl')[a];
         document.getElementsByClassName('pl')[a].play();
         return;
    }
    
    isply.pause();
    isply.currentTime = 0;
    
    document.getElementsByClassName('pl')[a].play();
    isply = document.getElementsByClassName('pl')[a];
  
}

