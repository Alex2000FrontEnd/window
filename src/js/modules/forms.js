import { postFormData } from './services/services';
import onlyNumbers from './onlyNumbers';

function forms() {
    const formAll = document.querySelectorAll('form'),
          inputsPhone = document.querySelectorAll('[name="user_phone"]');

    inputsPhone.forEach(phone => {
        onlyNumbers(phone);
    });

    const message = {
        load: 'Отправка формы...',
        succuss: 'Спасибо! Скоро с вами свяжутся',
        error: 'Ошибка! Пожалуйста, попробуйте позже'
    };

    function calcForm(formData) {
    // calc page one
        const type = document
            .querySelector('.balcon_icons .balcon_icons_img.do_image_more img')
            .getAttribute('alt');

        formData.append(
            'balcony shape',
            type
        );

        formData.append(
            'width',
            document.querySelector('#width').value
        );

        formData.append(
            'height',
            document.querySelector('#height').value
        );

    // calc page two
        formData.append(
            'glazing type',
            document.querySelector('#view_type').value
        );

        let checkbox;
        document.querySelectorAll('.checkbox').forEach(item => {
            if (item.checked === true) {
                checkbox = item.parentElement.querySelector('.checkbox-custom')
                    .getAttribute('id');
            }
        });

        formData.append(
            'profile',
            checkbox
        );
    }

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

            if (form.hasAttribute('data-calc')) {
                calcForm(formData);
            }

            postFormData('assets/server.php', formData)
                .then(() => {
                    elementMessage.textContent = message.succuss;
                    setTimeout(() => {
                        form.reset();
                        elementMessage.remove();
                        document
                            .querySelector('.popup_calc_end_close[data-close]')
                            .click();
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