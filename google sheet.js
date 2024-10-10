// const scriptURL='https://script.google.com/macros/s/AKfycbzH5lkz2yVPFTLuksPttY6aLRPY1iK5mnb6wjI-c_NvJtpIlYuOKUTwmG-9mCCc3DZW6Q/exec'

// const form = document.forms['contact-form']

// form.addEventListener('get in touch', e => {
// 	e.preventDefault()
// 	fetch(scriptURL,{method:'POST', body: new FormData(form)})
// 	.then(response => alert("Thank You! Your form is submitted Successfully."))
// 	.catch(error => console.error('Error!', error.message))
// })


// const scriptURL = 'https://script.google.com/macros/s/AKfycbzH5lkz2yVPFTLuksPttY6aLRPY1iK5mnb6wjI-c_NvJtpIlYuOKUTwmG-9mCCc3DZW6Q/exec'

// const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! your form is submitted successfully." ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })


const scriptURL = 'https://script.google.com/macros/s/AKfycbzvwZiCTE9gDACuTCmGM0T8nKYJJfn50H_N5k6NkrSU2RUkCB86r29LdbxjMdpwUS4iUA/exec'

const todo = document.forms['contact-form']

todo.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(todo)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
