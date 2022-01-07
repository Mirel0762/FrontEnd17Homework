const submitBtnForm = document.querySelector('.btn-submit');
const inputs = [
    document.getElementById('firstName'),
    document.getElementById('lastName'),
    document.getElementById('message')
];
inputs.forEach((input) => {
    input.addEventListener('keydown', handler);
    input.addEventListener('input', handler);
});

submitBtnForm.addEventListener('click', submitForm);

function checkLength(target) {
    return !!target.value;
}

function submitOnEnterKey(e) {
    if (e.keyCode === 13) {
        submitForm(e);
        if (e.cancelable) {
            e.preventDefault();
        }
    }
}

function validate(target) {
    const result = checkLength(target);

    if (result) {
        target.classList.remove('is-invalid');
    } else {
        target.classList.add('is-invalid');
    }

    return result;
}

function handler(e) {
    if (e.type === 'input') {
        validate(e.target);
    } else {
        submitOnEnterKey(e);
    }
}

function submitForm(e) {
    const result = inputs.map((input) => validate(input)).every((val) => val);

    if (result) {
        alert('Thank you for contacting us!');
    } else {
        alert('Error');
    }

    e.preventDefault();
}