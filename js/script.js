const mobileNav = document.getElementById('menu__icon');
const mainNav = document.getElementById('main__nav');
const mask = document.getElementById('mask');

mobileNav.addEventListener('click', () => {

    anime({
        targets: '.main__nav',
        translateX: [-300, 0],
        easing: 'easeInOutExpo'
    });

    mobileNav.classList.toggle('menu__icon--close')
    mainNav.classList.toggle('show--menu')
    mask.classList.toggle('show--mask')

})