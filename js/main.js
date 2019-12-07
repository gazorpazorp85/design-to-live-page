'use strict'

function toggleMenu() {
    document.body.classList.toggle('menu-open');
    let elButton = document.querySelectorAll('.menu-btn');
    for (let i = 0; i < elButton.length; i++) {
        elButton[i].classList.toggle('hidden');
    }
}

function onToggleModal() {
    document.body.classList.toggle('modal-open');
}