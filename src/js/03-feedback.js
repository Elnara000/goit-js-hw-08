import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const formData = {};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onRemoveStorage);
populateInputs()

function populateInputs() {
    const savedInputs = localStorage.getItem(STORAGE_KEY);
    if(savedInputs) {
        try {
            input.value = JSON.parse(savedInputs).email;
            textarea.value = JSON.parse(savedInputs).message;
        } catch(error){
            console.log(error.name);
            console.log(error.message);
        }
    }
}

function onFormInput(e) {   
    formData[e.target.name] = e.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onRemoveStorage(e) {
    e.preventDefault()

    console.log(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
    e.target.reset()
}







