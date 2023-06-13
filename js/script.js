import {countResults} from './count.js';

const counterResult = document.querySelector('.counter__result');
const inputWrapper = document.querySelectorAll('.input__wrapper');
const resetButton = document.querySelector('.form__reset-button');
const submitButton = document.querySelector('.form__submit-button');
const age = document.querySelector('#age');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const maleGender = document.querySelector('#gender-male');
const activityMinimal = document.querySelector('#activity-minimal');

inputWrapper.forEach(function(elem) {
    elem.addEventListener('input', function() {
        if (age.value>0 || height.value>0 || weight.value>0) {
            resetButton.disabled = false;
        } else {
            resetButton.disabled = true;
        }
        if (age.value > 0 && height.value > 0 && weight.value > 0) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
});

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    countResults();
});

resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    age.value = "";
    height.value = "";
    weight.value = "";
    maleGender.checked = true;
    activityMinimal.checked = true;
    counterResult.classList.add('counter__result--hidden');
    resetButton.disabled = true;
    submitButton.disabled = true;
});