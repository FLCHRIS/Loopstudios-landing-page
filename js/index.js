const buttonHambuger = document.querySelector('.nav__button');

buttonHambuger.addEventListener('click', () => {
    document.querySelector('.nav__menu').classList.toggle('nav__menu-show');
    document.getElementById('show').classList.toggle('button__icon-close');
    document.getElementById('close').classList.toggle('nav__button-visible');
});

AOS.init();