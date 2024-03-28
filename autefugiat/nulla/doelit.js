// Improved function to handle the click event for submitting a game to the leaderboard
function submitGame() {
  const game = {
    score: 0, // Assuming score is set elsewhere and updated before submission
    timestamp: new Date().toISOString(),
    playerId: getUserId()
  };

  ref.child("games").push(game)
    .then(() => {
      console.log("Game submitted successfully.");
      alert("Game submitted successfully.");
    })
    .catch((error) => {
      console.error("Error submitting game:", error);
      alert("Error submitting game. Please try again.");
    });
}

// Set the click event listener for the submit button
eById("submit-game-to-leaderboard").addEventListener('click', submitGame);
