// Get elements
const daysInput = document.getElementById('days');
const totalCostSpan = document.getElementById('total-cost');
const bookBtn = document.getElementById('book-btn');
const successMsg = document.getElementById('success-msg');

// Price per day
const pricePerDay = 1200;

// Function to update the total cost
function updateTotalCost() {
    const days = parseInt(daysInput.value) || 1;
    const totalCost = days * pricePerDay;
    totalCostSpan.textContent = totalCost;
}

// Event listener for input change
daysInput.addEventListener('input', updateTotalCost);

// Event listener for booking button
bookBtn.addEventListener('click', function() {
    // Show success message
    successMsg.style.display = 'block';

    // Save booking data (right now, just logs it)
    saveBooking();
});

// Function to simulate saving booking data (can later be replaced by backend integration)
function saveBooking() {
    const bookingData = {
        location: document.getElementById('location').value,
        guide: document.getElementById('guide').value,
        days: parseInt(daysInput.value),
        totalCost: parseInt(totalCostSpan.textContent)
    };

    // For now, just log the data
    console.log("Booking data:", bookingData);

    // Example of what you'll send to a backend server in the future (e.g., using fetch):
    /*
    fetch('your-backend-api-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Booking saved:", data);
    })
    .catch((error) => {
        console.error("Error saving booking:", error);
    });
    */
}
