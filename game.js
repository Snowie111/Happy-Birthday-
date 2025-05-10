// Correct answers for the riddles
const correctAnswers = [
  "May 30 2005",  // First riddle answer
  "CHOTTI",       // Second riddle answer
  "FEBRUARY"      // Third riddle answer
];

let currentRiddle = 0;

document.getElementById('submit-btn').addEventListener('click', checkAnswer);
document.getElementById('hint-btn').addEventListener('click', showHint);

function checkAnswer() {
  const answer = document.getElementById('answer').value.trim();
  const currentCorrectAnswer = correctAnswers[currentRiddle];

  if (answer.toLowerCase() === currentCorrectAnswer.toLowerCase()) {
    showConfetti();
    document.getElementById('next-level').style.display = 'block';
  } else {
    document.getElementById('fox-guard').style.animation = 'none'; // Stop the fox animation
    setTimeout(() => {
      document.getElementById('fox-guard').style.animation = 'watchPlayer 2s infinite'; // Restart fox animation
    }, 1000);
  }
}

function showHint() {
  const hints = [
    "It's the reason you age, not just celebrate! 😎",   // Hint for first riddle
    "A nickname once tossed like a leaf in play, Now it’s the passcode to the fox’s way🦊", // Second riddle
    "In the second phase of the year, it marks our last conversed🙂‍↕" // Third riddle
  ];
  
  document.getElementById('hint-text').innerText = hints[currentRiddle];
}

function showConfetti() {
  const confetti = document.getElementById('confetti');
  confetti.style.display = 'block';
  setTimeout(() => {
    confetti.style.display = 'none';
  }, 2000);
}

function nextLevel() {
  currentRiddle++;
  if (currentRiddle === 1) {
    document.getElementById('riddle').innerText = "Just a name fox give, without a plan, Now it’s the key remember if you can👀";
    document.getElementById('answer').value = '';
    document.getElementById('next-level').style.display = 'none';
  } else if (currentRiddle === 2) {
    document.getElementById('riddle').innerText = "Hidden in the fleeting days of the year's second month, it holds the memory of our last chat 🙃";
    document.getElementById('answer').value = '';
    document.getElementById('next-level').style.display = 'none';
  } else {
    // After all rounds, reveal the prize
    document.getElementById('riddle').innerText = "HAPPIEST 20TH BIRTHDAY BUZURG UNCLE !>🦊";
    document.getElementById('next-level').style.display = 'none';
  }
}
