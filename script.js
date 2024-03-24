document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.menu-btn').classList.toggle('open');
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.overlay').classList.toggle('open');
});
