function modal(triggersSelector, modalSelector) {
    const triggers = document.querySelectorAll(triggersSelector),
          modal = document.querySelector(modalSelector);
    let idInterval;

    if (modal.classList.contains('popup')) {
        // idInterval = setInterval(showModal, 60000);
    }

    function showModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(idInterval);
    }

    function hideModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            showModal();
        });
    });

    modal.addEventListener('click', (e) => {
        const t = e.target;
        if (t && (t.closest('.popup_close') || t === modal)) {
            hideModal();
        }
    });
}

export default modal;