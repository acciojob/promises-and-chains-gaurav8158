//your JS code here. If required.
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value);

  if (!name || !age) {
    alert('Please enter your name and age');
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise
    .then((message) => alert(message))
    .catch((error) => alert(error));
});