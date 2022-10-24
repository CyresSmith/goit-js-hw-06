const form = document.querySelector('.login-form');

function getFormData(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    alert('Все поля должны быть заполнены');
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);
  form.reset();
}

form.addEventListener('submit', getFormData);
