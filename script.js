let url='https://script.google.com/macros/s/AKfycbwQbFbKnUCew92QIeO-MY86V4C7M9V5iGpwIiKgcquwqTkNIhNohQkQuedgvSShiHRXtg/exec'
let container = document.getElementById("container");
let manu = document.getElementById("manu");
let navlist=document.getElementById("navlist")
let none_display=document.getElementsByClassName(".none-display")
let submit_btn=document.querySelector("#submit_btn");
manu.addEventListener("click", function () {
    container.style.height = "max-content"
    navlist.classList.toggle("none-display")
})
container.addEventListener("focusout", function () {
    container.style.height = "60px";
})

const form = document.forms['submit-to-google-sheet']
      
form.addEventListener('submit', e => {
    e.preventDefault()
    e.submitter.innerText="Submitting"
    fetch(url, { method: 'POST', body: new FormData(form)})
    .then(response => e.submitter.innerText="Submitted")
    .catch(error => console.error('Error!', error.message))
})