document.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.animate');

    boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;

        // Проверяем, виден ли элемент на экране
        if (boxPosition < window.innerHeight && !box.classList.contains('visible')) {
            box.classList.add('visible'); // Добавляем класс для анимации
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.first-screen');

    // Появление анимации через 0.5 секунды после загрузки
    setTimeout(() => {
        heroContent.classList.add('visible');
    }, 500);
});
