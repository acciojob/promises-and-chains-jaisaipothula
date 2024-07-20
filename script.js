document.addEventListener('DOMContentLoaded', () => {
  const ageForm = document.getElementById('ageForm');
  const ageInput = document.getElementById('age');
  const nameInput = document.getElementById('name');

  ageForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const age = parseInt(ageInput.value);
    const name = nameInput.value;

    if (!age || age < 0 || !name.trim()) {
      alert('Please enter valid age and name.');
      return;
    }

    // Create a promise to handle age validation
    const ageValidationPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          alert(`Welcome, ${name}. You can vote.`);
          resolve();
        } else {
          alert(`Oh sorry, ${name}. You aren't old enough.`);
          reject();
        }
      }, 4000); // Resolves after 4 seconds
    });

    // Handle promise resolution
    ageValidationPromise
      .then(() => {
        console.log('Age validation passed.');
        // Additional actions if needed after successful validation
      })
      .catch(() => {
        console.log('Age validation failed.');
        // Additional actions if needed after failed validation
      });
  });
});
