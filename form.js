  function createAccount(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const passwordFields = document.querySelectorAll('input[type="password"]');
    if (passwordFields[0].value !== passwordFields[1].value) {
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
        password
      })
    })
    .then(response => {
      if (response.ok) {
        alert("Account created successfully!");
        window.location.href = 'index.html'; 
      } else {
        alert("Error occurred. Try again.");
      }
    })
    .catch(error => {
      console.error("Error!", error.message);
      alert("Error! Check your internet or try again.");
    });
  }
