const form = document.querySelector('.form-contacto');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  if (name === '' || email === '' || message === '') {
    alert('Por favor, complete todos los campos del formulario.');
  } else {
    // Envía el formulario
    form.submit();
  }
});
