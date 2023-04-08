

// Get the submit button element
const submitBtn = document.getElementById('submit-btn');

// Set a cookie with an expiration date of one day
function setCookie() {
  const now = new Date();
  const expires = new Date(now.getTime() + 86400000); // 86400000 ms = 1 day
  document.cookie = 'played=true;expires=' + expires.toUTCString();
}

// Check if the user has played today
function checkCookie() {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === 'played' && cookie[1] === 'true') {
      return true;
    }
  }
  return false;
}

// Disable the game if the user has already played today
if (checkCookie()) {
  submitBtn.disabled = true;
  document.getElementById('result').textContent = 'You can only play once a day';
}

// Add a click event listener to the submit button
submitBtn.addEventListener('click', function() {
  // Set the cookie when the user submits the form
  setCookie();

  // Perform the game logic here
  // ...

});
// Get all the checkboxes and submit button
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//const submitBtn = document.getElementById('submit-btn');

// Set the correct answers (indices of AI generated images)
const correctAnswers = [1, 3, 5, 7, 9];

// Keep track of user's answers
let userAnswers = [];

// Add event listener to submit button
submitBtn.addEventListener('click', () => {
  // Reset userAnswers
  userAnswers = [];

  // Loop through all checkboxes and add checked ones to userAnswers
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      userAnswers.push(i);
    }
  }

  // Check if user's answers are correct
  let numCorrect = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (correctAnswers.includes(userAnswers[i])) {
      numCorrect++;
    }
  }

  // Display results
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `You got ${numCorrect} out of 5 correct.`
  for (let i = 0; i < checkboxes.length; i++) {
    if (correctAnswers.includes(i)) {
      checkboxes[i].parentNode.style.border = "3px solid green";
    } else {
      checkboxes[i].parentNode.style.border = "3px solid red";
    }
  }
});


//const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let numChecked = 0;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      numChecked++;
      if (numChecked > 5) {
        checkbox.checked = false;
        numChecked--;
      }
    } else {
      numChecked--;
    }
  });
});

  
/*

// Get the submit button
const submitBtn = document.getElementById('submit-btn');

// Get the result element
const result = document.getElementById('result');

// Initialize the score
let score = 0;

// Listen for click events on the submit button
submitBtn.addEventListener('click', function() {

  // Get all the checkboxes
  const checkboxes = document.querySelectorAll('input[type=checkbox]');

  // Count the number of AI generated images that were selected
  let aiCount = 0;
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked && checkbox.parentNode.querySelector('img').alt.includes('AI Generated')) {
      aiCount++;
    }
    
  });

  // Calculate the score
  score = aiCount;

  // Show the score and message
  result.innerHTML = `Your score is ${score}. `;
  if (score < 2) {
    result.innerHTML += `You can do better next time!`;
  } else if (score <= 4) {
    result.innerHTML += `Good job!`;
  } else {
    result.innerHTML += `You're an AI god!`;
  }
  
/*
    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You got ${numCorrect} out of 5 correct.`
    for (let i = 0; i < checkboxes.length; i++) {
      if (correctAnswers.includes(i)) {
        checkboxes[i].parentNode.style.border = "3px solid green";
      } else {
        checkboxes[i].parentNode.style.border = "3px solid red";
      }
    }
  });
*/



  
