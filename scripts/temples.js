const menu = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menu.classList.toggle('open');
});
