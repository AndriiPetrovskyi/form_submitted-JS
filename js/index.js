const formRef = document.querySelector('form');
const checkbox = document.querySelector('#checkbox');
const formBtn = document.querySelector('button');
const modal = document.querySelector('.backdrop');
const closeModalBtn = document.querySelector('.close-modal');

formRef.addEventListener('submit', onSubmitData);
checkbox.addEventListener('change', handleLicense);
formBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', closeModal)

function handleLicense(event) {
    formBtn.disabled = !event.target.checked;
};

function onSubmitData(event) {
    event.preventDefault();
    const formElements = event.target;
    const submittedData = {}

    const formData = new FormData(formElements);
    formData.forEach((value, key) => {

        submittedData[key] = value;
    })


    console.log(submittedData)

    formRef.reset();
}

function showModal() {
    modal.classList.add('show-modal');
}

function closeModal() {
    modal.classList.remove('show-modal');
}