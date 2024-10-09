// Функция для вычисления и установки ширины .menu
function setMenuWidth() {
  const headerWidth = document.querySelector('.nav').offsetWidth;
  const screenWidth = window.innerWidth;

  let menuWidth;

  if (screenWidth > 1800) {
    menuWidth = (screenWidth - headerWidth) / 2 + 105;
  } else {
    menuWidth = 373;
  }

  document.querySelector('.menu').style.width = `${menuWidth}px`;
}

// Вызываем функцию при загрузке страницы и при изменении размера экрана
window.addEventListener('DOMContentLoaded', setMenuWidth);
window.addEventListener('resize', setMenuWidth);


// Получаем ссылки на элементы с помощью метода querySelector()
const burgerButton = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const pacifier = document.querySelector('.pacifier');

// Функция для проверки ширины экрана и добавления/удаления класса "stick" и "show"
function toggleStickClass() {
  if (menu.classList.contains('active') && window.innerWidth < 1800) {
    burgerButton.classList.add('stick');
    pacifier.classList.add('show');
  } else {
    burgerButton.classList.remove('stick');
    pacifier.classList.remove('show');
  }
}

// Добавляем обработчик события клика на кнопку с классом "burger"
burgerButton.addEventListener('click', function () {
  // При клике на кнопку проверяем, есть ли у меню класс "active"
  if (menu.classList.contains('active')) {
    // Если класс уже есть, то удаляем его
    menu.classList.remove('active');
  } else {
    // Если класса нет, то добавляем его
    menu.classList.add('active');
  }

  // Вызываем функцию для проверки ширины экрана и добавления/удаления класса "stick" и "show"
  toggleStickClass();
});

// Добавляем обработчик события изменения размера окна (resize)
window.addEventListener('resize', function () {
  // Вызываем функцию для проверки ширины экрана и добавления/удаления класса "stick" и "show"
  toggleStickClass();
});

// Вызываем функцию при загрузке страницы, чтобы установить начальное состояние класса "stick" и "show"
toggleStickClass();


const navItems = document.querySelectorAll('.nav__list li');

navItems.forEach(item => {
  item.addEventListener('click', function (event) {
    // Удаление класса "active" у всех элементов
    navItems.forEach(navItem => {
      navItem.querySelector('a').classList.remove('active');
    });

    // Добавление класса "active" только к текущей ссылке
    this.querySelector('a').classList.add('active');
  });
});
