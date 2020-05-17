let menu = document.querySelectorAll('.menu');
let menuItems = document.querySelectorAll('.menu-item');
let menuItem5 = document.createElement('li');
let title = document.getElementById('title');
let adv = document.querySelector('.adv');
let promptBlock = document.querySelector('#prompt');


menuItem5.classList.add('menu-item');
menuItem5.innerText = 'пункт 5';
menu[0].insertBefore(menuItems[2], menuItems[1]);
menu[0].appendChild(menuItem5);
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

promptBlock.innerText = prompt('Чё как?');