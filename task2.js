//создание масок
document.addEventListener('DOMContentLoaded', function() {
    var gos_number_mask = IMask(document.getElementById('gos_number'),
    {mask: 'a000aa'})
    var passport_series_mask = IMask(document.getElementById('passport_series'),
    {mask: '0000'})
    var passport_number_mask = IMask(document.getElementById('passport_number'),
    {mask: '000000'})


    //сохранение данных
    let formData = {};
    const form = document.querySelector('form');
    const LS = localStorage;

    if (form) {
        form.addEventListener('input', function(event) {
            formData[event.target.name] = event.target.value;
            LS.setItem('formData', JSON.stringify(formData));
        });
    } else {
        console.error('Форма не найдена');
    }

    if (LS.getItem('formData')) {
        formData = JSON.parse(LS.getItem('formData'));
        for (let key in formData) {
            const inputElement = form.elements[key];
            if (inputElement) { 
                inputElement.value = formData[key];
            }
        }
    }


    //проверка заполнености полей
    function areInputsFilled(container) {
        const inputs = container.querySelectorAll('input');
        for (let input of inputs) {
            if (!input.value) { 
                return false; 
            }
        }
        return true;
    }

    const container = document.querySelector('.container'); 
    const checkButton = document.querySelector('#send');

    checkButton.addEventListener('click', function() {
        if (areInputsFilled(container)) {
            console.log('Форма отправлена');
        } else {
            console.log('Есть незаполненные поля.');
        }
    });
});