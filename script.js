const navbar = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
});
navbar.classList.add("hidden");
// onload add navbar
window.onload = (event) => {
  if (window.scrollY > 75) {
        
        
        
        setTimeout(function(){
          
          navbar.classList.add('scrolled')
          $(".nav").css('transform', "translateY(0%)");
          
        }, 400);
    } else {
        navbar.classList.remove("hidden");
        $(".nav").css('transform', "translateY(-100%)");
        setTimeout(function(){
        
        navbar.classList.remove('scrolled');
        $(".nav").css('transform', "translateY(0%)");
        }, 400);
      
        
    }
};
window.onbeforeunload = function() {

  $(".nav").css('transform', "translateY(-100%)");

  return undefined;
}
window.addEventListener("scroll", function (event) {
   
    const distance = window.scrollY;
    $(".section-two.wrapper.left.container.bg").css('transform', `translateY(${distance *
        0.2}px)`);
    $(".section-two.wrapper.left.container").css('transform', `translateY(${distance * 0.3}px)`);
});
document.addEventListener("scroll", onScroll);
function onScroll(event){
  var element = document.querySelector('#in-title');
  var line = document.querySelector('#in-line');
  var btn = document.querySelector('#in-button');
  var y = window.pageYOffset;
  
  if(y >= 700)
  {
    setTimeout(function(){
    element.classList.add("left--state-in");
      element.classList.remove("hidden");
  }, 100)
    setTimeout(function(){
    line.classList.add("left--state-in");
      line.classList.remove("hidden");
  }, 200)
    setTimeout(function(){
    btn.classList.add("left--state-in");
      btn.classList.remove("hidden");
  }, 300)
    
  }
}

// q: how do I make a new git?
// a: git init



