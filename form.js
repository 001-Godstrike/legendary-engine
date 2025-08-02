function createAccount(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const passwordFields = document.querySelectorAll('input[type="password"]');
  const password = passwordFields[0].value;
  const confirmPassword = passwordFields[1].value;
  const accesskey = document.getElementById('accesskey').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwn5ILIN3ekEjwAcsVy3SFqrKCPLVP226RSw2blq6JWPJjPiHlFEF_9qJcqQHmiWaaUeQ/exec';

  fetch(scriptURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      name,
      username,
      number,
      email,
      password,
      accesskey
    })
  })
  .then(response => response.text())
  .then(text => {
    if (text === "Success") {
      alert("Account created successfully!");
      window.location.href = 'index.html';
    } 
