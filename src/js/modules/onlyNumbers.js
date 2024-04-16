function onlyNumbers(input) {
    input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/ig, '');
    });
}

export default onlyNumbers;