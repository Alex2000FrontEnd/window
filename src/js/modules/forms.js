import { postFormData } from './services/services';

function forms() {
    const formAll = document.querySelectorAll('form'),
          inputsPhone = document.querySelectorAll('[name="user_phone"]');

    inputsPhone.forEach(phone => {
        phone.addEventListener('input', () => {
            phone.value = phone.value.replace(/\D/ig, '');
        });
    });

    const message = {
        load: 'Отправка формы...',
        succuss: 'Спасибо! Скоро с вами свяжутся',
        error: 'Ошибка! Пожалуйста, попробуйте позже'
    };

    formAll.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const elementMessage = document.createElement('p');
            elementMessage.style.cssText = `
                margin: 15px 0;
                text-align: center;
            `;
            elementMessage.textContent = message.load;
            form.append(elementMessage);
            
            const formData = new FormData(form);
            postFormData('assets/server.php', formData)
                .then(() => {
                    elementMessage.textContent = message.succuss;
                    setTimeout(() => {
                        form.reset();
                        elementMessage.remove();
                    }, 3000);
                })
                .catch(() => {
                    elementMessage.textContent = message.error;
                    elementMessage.style.color = 'red';
                });
        });
    });
}

export default forms;