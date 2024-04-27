let url='https://script.google.com/macros/s/AKfycbwQbFbKnUCew92QIeO-MY86V4C7M9V5iGpwIiKgcquwqTkNIhNohQkQuedgvSShiHRXtg/exec'
const form = document.forms['submit-to-google-sheet']
      
form.addEventListener('submit', e => {
    e.preventDefault()
    e.submitter.innerText="Submitting"
    fetch(url, { method: 'POST', body: new FormData(form)})
    .then(response => e.submitter.innerText="Submitted")
    .catch(error => console.error('Error!', error.message))
})