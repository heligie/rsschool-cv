const ranges = document.querySelectorAll('.skills__range-bar');
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.header__toggle');

burgerMenu.addEventListener('click', () => header.classList.toggle('is-open'));
const setRangeValue = () => ranges.forEach((range) => range.style.width = range.dataset.percent);

setRangeValue();