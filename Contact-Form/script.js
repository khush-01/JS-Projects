document.getElementById('submit').addEventListener('click', () => {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var feedback = {
    name: name,
    email: email,
    message: message
  };
  localStorage.setItem('feedback', JSON.stringify(feedback));
})
