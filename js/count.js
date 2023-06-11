const coefficient={
    min:1.2,
    low:1.375,
    medium:1.55,
    high:1.725,
    max:1.9
};

const counterResult = document.querySelector('.counter__result');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const age = document.querySelector('#age');
const caloriesNorm = document.querySelector('#calories-norm');
const caloriesMaximal = document.querySelector('#calories-maximal');
const caloriesMinimal = document.querySelector('#calories-minimal');

const getActivity = () => {
    const activityValue = document.querySelector('[name="activity"]:checked').value;
    return coefficient[activityValue];
}

const countNorm = () => {
    const countMaleNorm=(10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5;
    const countFemaleNorm=(10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161
    const maleCalculation = document.querySelector('#gender-male');
    if (maleCalculation.checked) {
        return countMaleNorm;
    }
    return countFemaleNorm;
}
 
function countResults() {
    counterResult.classList.remove('counter__result--hidden');
    caloriesNorm.textContent = Math.round(countNorm() * getActivity());
    caloriesMaximal.textContent = Math.round(1.15 * (countNorm() * getActivity()));
    caloriesMinimal.textContent = Math.round(0.85 * (countNorm() * getActivity()));
}

export {countResults}