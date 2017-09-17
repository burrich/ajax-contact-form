'use strict'; // TODO: remove after adding Babel ?

const contactForm = document.querySelector('form');

contactForm.onsubmit = function(e) {
  e.preventDefault();
  
  const name    = contactForm.querySelector('#name');
  const subject = contactForm.querySelector('#subject');
  const message = contactForm.querySelector('#message');

  let contactFormData = {
    name: name.value,
    object: subject.value,
    message: message.value
  };

  axios.post('/', contactFormData)
    .then(function (response) {
      alert(response.data);
      console.log(response);
    })
    .catch(function (error) {
      alert('Erreur lors de l\'envoie du formulaire');
      console.log(error);
    });
}
