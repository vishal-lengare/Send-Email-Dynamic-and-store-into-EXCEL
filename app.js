
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwaRs2mSd4NyhJELI5LTyqQLeWv_bk212ywqhw9i_fsR89I60Vv2XTZKknHW0WEurA0tw/exec'
  const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");
    
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'thank you for subscribing!';
        setTimeout(()=>{
            msg.innerHTML = ''
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
