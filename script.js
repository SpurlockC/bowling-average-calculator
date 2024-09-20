// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bowlingForm');
    const resultDiv = document.getElementById('result');

    // Function to handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Get the input values
        const games = parseInt(document.getElementById('games').value);
        const totalScore = parseInt(document.getElementById('total_score').value);

        // Validation: Ensure the values are valid
        if (isNaN(games) || isNaN(totalScore) || games <= 0) {
            resultDiv.innerHTML = `<p style="color: red;">Please enter valid numbers. Games should be greater than 0.</p>`;
            return;
        }

        // Calculate the average
        const average = totalScore / games;
        let message = '';

        // Determine the user's skill level based on the average score
        if (average >= 200) {
            message = "You are a pro!";
        } else if (average >= 150) {
            message = "You are an average player.";
        } else {
            message = "You need to practice more.";
        }

        // Display the result
        resultDiv.innerHTML = `
            <p>Your average score is <strong>${average.toFixed(2)}</strong></p>
            <p>${message}</p>
        `;
    });
});
