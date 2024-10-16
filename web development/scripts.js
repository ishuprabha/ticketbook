document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ticketForm');
    const confirmationDiv = document.getElementById('confirmation');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const movie = document.getElementById('movie').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const seats = document.getElementById('seats').value;

        // Basic validation
        if (!movie || !date || !time || !seats) {
            alert('Please fill out all fields.');
            return;
        }

        // Display confirmation message
        confirmationMessage.textContent = Your ticket for "${movie}" on ${date} at ${time} has been booked for ${seats} seat(s).;
        confirmationDiv.style.display = 'block';
    });
});