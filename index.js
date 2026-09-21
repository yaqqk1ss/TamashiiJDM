const buttons = document.querySelectorAll('.inter button');
const hotspots = document.querySelectorAll('.hotspot');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Снимаем active со всех кнопок и абсолютно всех точек
        buttons.forEach(btn => btn.classList.remove('active'));
        hotspots.forEach(spot => spot.classList.remove('active'));

        // 2. Активируем нажатую кнопку
        button.classList.add('active');

        // 3. Получаем название класса группы (например, "motor-spot")
        const targetClass = button.getAttribute('data-target');
        
        // 4. Находим ВСЕ точки, у которых есть этот класс
        const targetHotspots = document.querySelectorAll('.' + targetClass);

        // 5. Показываем каждую найденную точку из группы
        targetHotspots.forEach(spot => {
            spot.classList.add('active');
        });
    });
});