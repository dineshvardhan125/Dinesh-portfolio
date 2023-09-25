
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxBuL2N1HzeOB_DqTKc3DzZkwRYpOkj0EauyyZ_wirbtSRCnFh2RlLdWsCVacW3zIKb/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerText = 'Message sent Successfully'
        setTimeout(function(){
          msg.innerHTML = ''
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })