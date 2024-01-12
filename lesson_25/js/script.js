'use strict';
// СПОЧАТКУ УМОВА ПОТІМ РІШЕННЯ
// Задача №1
// Отримати в константу елемент <body>
const bodyElement = document.querySelector(`body`);
console.log(bodyElement);

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
function LiUpdater(liCount = 1) {
    if (typeof(liCount) !== "number" || liCount < 1) {
        return console.log("Некорректні аргументи, список не додастся! Аргумент має бути додатнім числом більше нуля.");
    }

    const bodyElement = document.querySelector('body');

    let liQuantity = "";
    for (let i = 0; i < liCount; i++) {
        liQuantity += "<li>ඞඞඞAMOGUSඞඞඞ</li>";
    }

    let listUL = `<ul>${liQuantity}</ul>`;
    bodyElement.insertAdjacentHTML("beforeend", listUL);
}

LiUpdater();
LiUpdater(3);
LiUpdater("g");
LiUpdater("5");
LiUpdater(-5);


// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

const bodyElementTusk3 = document.querySelector('body');
bodyElementTusk3.classList.add('loaded'); 
if (bodyElementTusk3.classList.contains('loaded')) {
	bodyElementTusk3.style.color = 'green';
}

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
const items = document.querySelectorAll(".item");
let itemsCount = 1;
items.forEach(item => {
    item.classList.add('active'); 
	item.textContent = `Елемент №${itemsCount}`;
    itemsCount++;
});


// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки
const button = document.querySelector('.button');
function scrollToBlock(element) {
	element.scrollIntoView({
		block: "start",
		inline: "start",
		behavior: "smooth"
	});
}
scrollToBlock(button);

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення атрибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector('.link');
link.setAttribute('hundred', '100');
let hundred = link.getAttribute('hundred');
// console.log(parseFloat(hundred));
if (hundred < 200) {
	link.style.color = 'red';
}