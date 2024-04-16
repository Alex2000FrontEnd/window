import onlyNumbers from './onlyNumbers';

function calc() {
    const triggersOpenCalc = document.querySelectorAll('.popup_calc_btn'),
          calcPageOne = document.querySelector('.popup_calc'),
          calcPageTwo = document.querySelector('.popup_calc_profile'),
          calcPageThree = document.querySelector('.popup_calc_end'),

          width = calcPageOne.querySelector('#width'),
          height = calcPageOne.querySelector('#height'),

          checkboxes = document.querySelectorAll('.checkbox');

    function openCalc(page) {
        document.body.style.overflow = 'hidden';
        page.style.display = 'block';
    }

    function nextOpenModal(trigger, modalHide, modalShow) {
        document.querySelector(trigger).addEventListener('click', () => {
            modalHide.style.display = 'none';
            modalShow.style.display = 'block';
        });
    }

    nextOpenModal('.popup_calc_button', calcPageOne, calcPageTwo);
    nextOpenModal('.popup_calc_profile_button', calcPageTwo, calcPageThree);

    function closeModal(close, modalHide) {
        document.querySelector(close).addEventListener('click', () => {
            modalHide.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    closeModal('.popup_calc_profile_close', calcPageTwo);
    closeModal('.popup_calc_end_close', calcPageThree);

////////////////////////////////////////////////

    triggersOpenCalc.forEach(trigger => {
        trigger.addEventListener('click', () => {
            openCalc(calcPageOne);
        });
    });
    
    calcPageOne.addEventListener('click', (e) => {
        const t = e.target;

        if (t && (t.closest('.popup_calc_close') || t === calcPageOne)) {
            document.body.style.overflow = '';
            calcPageOne.style.display = 'none';
        }
    });

    onlyNumbers(width);
    onlyNumbers(height);

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            checkboxes.forEach(el => el.checked = false);
            e.target.checked = true;
        });
    });
}

export default calc;