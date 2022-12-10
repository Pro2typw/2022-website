const navbar = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})
window.addEventListener("scroll", function () {
    const distance = window.scrollY;
    $(".section-two.wrapper.left.container.bg").css('transform', `translateY(${distance *
        0.2}px)`);
    $(".section-two.wrapper.left.container").css('transform', `translateY(${distance * 0.3}px)`);
});

// q: how do I make a new git?
// a: git init