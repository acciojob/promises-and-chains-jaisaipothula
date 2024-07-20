document.addEventListener('DOMContentLoaded', () => {
  const ageForm = document.getElementById('ageForm');
  const ageInput = document.getElementById('age');
  const nameInput = document.getElementById('name');
  const outputDiv = document.getElementById('output');

  ageForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const age = parseInt(ageInput.value);
    const name = nameInput.value.trim();

    if (!age || age <= 0 || !name) {
      alert('Please enter valid age and name.');
      return;
    }

    const ageValidationPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry, ${name}. You aren't old enough.`);
        }
      }, 4000); // Resolves after 4 seconds
    });

    ageValidationPromise
      .then(message => {
        outputDiv.textContent = message;
      })
      .catch(error => {
        outputDiv.textContent = error;
      });
  });
});
