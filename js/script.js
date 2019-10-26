'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Все для новичков";                       
menu.appendChild(menuItemLi);                                   


// document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон


title.textContent = "Доверьтесь проффесионалу!"    // Заменить текст

adv.remove();                                                   // Удалить рекламу со страницы

let yourOpinion = prompt("Как вас зовут?");   // Отношение к технике Apple
promptforApple.textContent = yourOpinion;