const reviews = [
    {
      text: "The trip was incredible! Everything was organized perfectly, and I had the best experience traveling through Switzerland.",
      name: "Emily Johnson",
      location: "United States",
      photo: "img1.jpg"
    },
    {
      text: "Our Bali vacation was an absolute dream. From the beaches to the food, everything was perfect!",
      name: "Rajiv Mehra",
      location: "India",
      photo: "img2.jpg"
    },
    {
      text: "Thank you for planning our Paris honeymoon! The hotel, tours, and food recommendations were spot on.",
      name: "Sophia Garcia",
      location: "Spain",
      photo: "img3.jpg"
    },
    {
      text: "Exploring New Zealand was a lifetime experience. The tour was well-structured, and the guides were amazing!",
      name: "Oliver Smith",
      location: "Australia",
      photo: "img4.jpg"
    },
    {
      text: "Our family trip to Japan was smooth and hassle-free. The cherry blossom tour was just stunning!",
      name: "Alicia Tan",
      location: "Singapore",
      photo: "img5.jpg"
    }
  ];
  
  const reviewText = document.getElementById('review-text');
  const clientName = document.getElementById('client-name');
  const clientLocation = document.getElementById('client-location');
  const photos = document.querySelectorAll('.client-photo');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  
  let currentIndex = 0;
  
  // Function to update the review content
  function updateReview() {
    const review = reviews[currentIndex];
    reviewText.textContent = review.text;
    clientName.textContent = review.name;
    clientLocation.textContent = review.location;
  
    // Scale photo based on current index
    photos.forEach((photo, index) => {
      photo.style.transform = index === currentIndex ? 'scale(1.5)' : 'scale(1)';
    });
  }
  
  // Event listeners for arrows
  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : reviews.length - 1;
    updateReview();
  });
  
  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < reviews.length - 1) ? currentIndex + 1 : 0;
    updateReview();
  });
  
  // Initial setup
  updateReview();