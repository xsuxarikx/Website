// Функция для генерации случайного цвета в формате HEX
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Обработчик события для кнопки
document.getElementById('changeColorButton').addEventListener('click', function() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor; // Меняем цвет фона
    document.getElementById('colorDisplay').textContent = `Цвет фона: ${newColor}`; // Отображаем новый цвет
});