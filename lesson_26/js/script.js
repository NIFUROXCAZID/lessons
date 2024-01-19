'use strict';
// СПОЧАТКУ УМОВА ПОТІМ РІШЕННЯ
// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
//   при повторному кліку прибрати клас
let items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener("click", toggleActive)
});

function toggleActive() {
  this.classList.toggle('active');
}

// Задача №2
// Дано в css / scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.
document.addEventListener("DOMContentLoaded", function () {
  let body = document.body;
  body.classList.add("no-transparency");
});

//   Задача №3
// Дано в html: header main footer
// При наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.
// document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".header");
  let footer = document.querySelector(".footer");

  header.addEventListener("mouseover", function () {
    footer.style.backgroundColor = "#c0c0ff";
  });

  header.addEventListener("mouseout", function () {
    footer.style.backgroundColor = "#ffc0d3";
  });

//   Задача №4
// Дано в html: текст, елемент з класом item, текст.Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item(його видно), і не запускатись повторно.

  if (items.length > 0) {
    let observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    items.forEach(item => {
      observer.observe(item);
    });
  }

function handleIntersection(entries, observer) {
  let lastItem = entries[entries.length - 1].target;

  if (entries[entries.length - 1].isIntersecting) {
    startInterval(lastItem);
    observer.unobserve(lastItem);
  }
}

function startInterval(element) {
  let startNumber = parseInt(element.dataset.start, 10) || 1;
  let endNumber = parseInt(element.dataset.end, 10) || 10;

  let interval = setInterval(() => {
    element.textContent = startNumber;
    
    if (startNumber >= endNumber) {
      clearInterval(interval);
    } else {
      startNumber++;
    }
  }, 1000);
}