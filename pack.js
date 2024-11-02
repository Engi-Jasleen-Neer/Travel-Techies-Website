// Function to show "Pay Now" button
function showPayNowButton() {
    const tripType = document.getElementById('tripType').value;
    const city = document.getElementById('city').value;
  
    if (!tripType || !city) {
      alert('Please select both a trip type and a city.');
      return;
    }
  
    // Display the Pay Now button
    document.getElementById('payNowContainer').style.display = 'block';
  }
  
  // Function to generate the plan
  function generatePlan() {
    const tripType = document.getElementById('tripType').value;
    const city = document.getElementById('city').value;
    const itineraryList = document.getElementById('itineraryList');
    const samplePlan = document.getElementById('samplePlan');
    const itineraryContainer = document.getElementById('itineraryContainer');
  
    // Clear previous content
    itineraryList.innerHTML = '';
    samplePlan.innerHTML = '';
  
    // Itinerary data
    const itineraries = {
      Relaxation: {
        Delhi: [
          { place: 'Lodhi Garden', time: '9:00 AM - 11:00 AM' },
          { place: 'India Gate', time: '12:00 PM - 1:00 PM' },
          { place: 'Spa Retreat', time: '3:00 PM - 6:00 PM' }
        ],
        Mumbai: [
          { place: 'Marine Drive', time: '8:00 AM - 10:00 AM' },
          { place: 'Juhu Beach', time: '11:00 AM - 1:00 PM' },
          { place: 'Spa & Wellness Center', time: '2:00 PM - 5:00 PM' }
        ],
        Chennai: [
          { place: 'Marina Beach', time: '7:00 AM - 9:00 AM' },
          { place: 'Elliot’s Beach', time: '10:00 AM - 12:00 PM' },
          { place: 'Ayurveda Therapy Center', time: '2:00 PM - 5:00 PM' }
        ]
      },
      Spiritual: {
        Delhi: [
          { place: 'Lotus Temple', time: '9:00 AM - 11:00 AM' },
          { place: 'Akshardham Temple', time: '12:00 PM - 3:00 PM' },
          { place: 'Bangla Sahib Gurudwara', time: '4:00 PM - 6:00 PM' }
        ],
        Mumbai: [
          { place: 'Siddhivinayak Temple', time: '8:00 AM - 10:00 AM' },
          { place: 'Haji Ali Dargah', time: '11:00 AM - 1:00 PM' },
          { place: 'ISKCON Temple', time: '2:00 PM - 4:00 PM' }
        ],
        Chennai: [
          { place: 'Kapaleeshwarar Temple', time: '7:00 AM - 9:00 AM' },
          { place: 'Santhome Basilica', time: '10:00 AM - 12:00 PM' },
          { place: 'Parthasarathy Temple', time: '2:00 PM - 4:00 PM' }
        ]
      }
    };
  
    const selectedItinerary = itineraries[tripType][city];
  
    // Populate itinerary list
    selectedItinerary.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.place} - ${item.time}`;
      itineraryList.appendChild(li);
    });
  
    // Sample plan for the trip
    const sampleDays = {
      Relaxation: [
        'Day 1: Morning walk at a peaceful park, followed by spa therapy.',
        'Day 2: Beach day with lunch at a seaside restaurant.',
        'Day 3: Unwind with a yoga session and local sightseeing.'
      ],
      Spiritual: [
        'Day 1: Visit temples and meditate at holy sites.',
        'Day 2: Explore ancient spiritual landmarks and take part in rituals.',
        'Day 3: Attend evening prayer sessions and relax by the riverside.'
      ]
    };
  
    // Populate sample plan list
    sampleDays[tripType].forEach(dayPlan => {
      const li = document.createElement('li');
      li.textContent = dayPlan;
      samplePlan.appendChild(li);
    });
  
    // Show the itinerary container
    itineraryContainer.style.display = 'block';
  }
  