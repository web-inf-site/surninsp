document.addEventListener('DOMContentLoaded', function() {
    fetch('shapka.html')
        .then(response => {
            // Проверяем успешность запроса
            if (!response.ok) {
                throw new Error(HTTP error! status: ${response.status});
            }
            return response.text();
        })
        .then(data => {
            // Вставляем содержимое header.html в элемент с id="header"
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Ошибка загрузки шапки:', error);
            document.getElementById('header').innerHTML = 'Ошибка загрузки шапки';
        });
});