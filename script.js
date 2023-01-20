const navbar = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 75) {

    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
});
var lastScrollTop = 0;

var scrollingToAnchor = false;

function scrollToAnchor(anchor) {
  $('html,body').animate({ scrollTop: $(`#${anchor}`).offset().top }, 'slow');
  setTimeout(function () {
    $(".nav").css('transform', "translateY(0%)");
  }, 1100);
}

window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    $(".nav").css('transform', "translateY(-100%)");
  } else {
    $(".nav").css('transform', "translateY(0%)");
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

  
}, false);
navbar.classList.add("hidden");
// onload add navbar
window.onload = (event) => {

  if (window.scrollY > 75) {
    navbar.classList.remove("hidden");
    $(".nav").css('transform', "translateY(-100%)");


    setTimeout(function () {

      navbar.classList.add('scrolled')
      $(".nav").css('transform', "translateY(0%)");

    }, 400);
  } else {
    navbar.classList.remove("hidden");
    $(".nav").css('transform', "translateY(-100%)");
    setTimeout(function () {

      navbar.classList.remove('scrolled');
      $(".nav").css('transform', "translateY(0%)");
    }, 400);


  }
};
window.onbeforeunload = function () {

  $(".nav").css('transform', "translateY(-100%)");

  return undefined;
}


// animations load and unload

window.addEventListener("load", function (event) {
  $(".header-wrapper .text-wrapper .text .title").removeClass("hidden");
  $(".header-wrapper .text-wrapper .text .title").addClass('animate__fadeInUp');
  $(".header-wrapper .text-wrapper .text .subtitle").removeClass("hidden");
  $(".header-wrapper .text-wrapper .text .subtitle").addClass('animate__fadeInUp');

});

window.addEventListener("scroll", function (event) {

  const distance = window.scrollY;
  $(".section-two.wrapper.left.container.bg").css('transform', `translateY(${distance *
    0.2}px)`);
  $(".section-two.wrapper.left.container").css('transform', `translateY(${distance * 0.3}px)`);
});
document.addEventListener("scroll", onScroll);
function onScroll(event) {
  var element = document.querySelector('#in-title');
  var line = document.querySelector('#in-line');
  var btn = document.querySelector('#in-button');
  var y = window.pageYOffset;

  if (y >= 2754) {
    var element2 = document.querySelector('#in-ourteam');
    setTimeout(function () {
      element2.classList.add("left--state-in");
      element2.classList.remove("hidden");
    }, 100)
    var element3 = document.querySelector('#in-desc');
    setTimeout(function () {
      element3.classList.add("left--state-in");
      element3.classList.remove("hidden");
    }, 200)
  }

  if (y >= 700) {
    setTimeout(function () {
      element.classList.add("left--state-in");
      element.classList.remove("hidden");
    }, 100)
    setTimeout(function () {
      line.classList.add("left--state-in");
      line.classList.remove("hidden");
    }, 200)
    setTimeout(function () {
      btn.classList.add("left--state-in");
      btn.classList.remove("hidden");
    }, 300)

  }
}

// q: how do I make a new git?
// a: git init



