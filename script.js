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
    // Save booking data (this will now send data to the backend)
    saveBooking();
});

// Function to save booking data
function saveBooking() {
    const bookingData = {
        location: document.getElementById('location').value,
        guide: document.getElementById('guide').value,
        days: parseInt(daysInput.value),
        totalCost: parseInt(totalCostSpan.textContent)
    };

    // Log the data to make sure it's correct (you can remove this once you've tested it)
    console.log("Booking data:", bookingData);
    console.log(JSON.stringify(bookingData));

    // // Send the booking data to the backend API
    // fetch('http://localhost:3000/api/book', {  // Replace with your actual backend API URL
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin':'*'
    //     },
    //      bookingData
    // })
    // .then(response =>{console.log("hello"), response.json()})
    // .then(data => {
    //     console.log("Booking saved:", data);
        
    //     // Show success message
    //     successMsg.style.display = 'block';

    //     // Clear form inputs
    //     document.getElementById('location').value = '';
    //     document.getElementById('guide').value = '';
    //     daysInput.value = '';
    //     totalCostSpan.textContent = '0';
    // })
    // .catch((error) => {
    //     console.error("Error saving booking:", error);
    // });

    fetch('http://localhost:3000/api/book', { // Replace with your API URL
        mode: 'no-cors',

        method: 'POST', // HTTP method
        headers: {
            'Content-Type': 'application/json', // Specifies that we're sending JSON data
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body:bookingData  // Convert JavaScript object to JSON string
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        console.log('Booking saved successfully:', data);
        // Handle success, update UI if needed
    })
    .catch(error => {
        console.error('Error saving booking:', error); // Handle error
    });
}
