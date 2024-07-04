const ranges = document.querySelectorAll('.skills__range-bar');

const setRangeValue = () => ranges.forEach((range) => range.style.width = range.dataset.percent);

setRangeValue();