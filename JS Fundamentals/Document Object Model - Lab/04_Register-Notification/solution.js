function register() {
   let username = document.getElementById('username').value;
   let password = document.getElementById('password').value;
   let email = document.getElementById('email').value;

   let regex = /(.+)@(.+).(com|bg)/gm;
   if (username === '' || password === '' || !regex.test(email)){
    return;
   }

   let successfulRegistration = document.createElement('h1');
   successfulRegistration.textContent = 'Successful Registration!';

   let result = document.querySelector('#result');
   result.appendChild(successfulRegistration);
   result.appendChild(document.createTextNode(`Username: ${username}`));
   result.appendChild(document.createElement('br'));
   result.appendChild(document.createTextNode(`Email: ${email}`));
   result.appendChild(document.createElement('br'));
   result.appendChild(document.createTextNode(`Password: ${'*'.repeat(password.length)}`));

   setTimeout(() => { result.innerHTML = '' }, 5000);
}