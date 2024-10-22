let avgRating = 0;

// On page load, fetch the ratings and display the average stars
document.addEventListener("DOMContentLoaded", async function () {
    avgRating = await getRatings();
    rate(avgRating);  // Display the average rating stars
});

// This function handles updating the stars based on the passed rating
function rate(starNumber) {
    if (typeof starNumber !== 'number' || isNaN(starNumber)) {
        console.error("Invalid starNumber: ", starNumber);
        return;  // Exit if the starNumber is invalid
    }

    // Round the starNumber and update stars accordingly
    starNumber = Math.round(starNumber);
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star-${i}`);
        const icon = star.querySelector('i');
        if (i <= starNumber) {
            icon.classList.remove('bi-star');
            icon.classList.add('bi-star-fill');  // Fill the star
        } else {
            icon.classList.remove('bi-star-fill');
            icon.classList.add('bi-star');  // Unfill the star
        }
    }
}

// Handle click on stars for rating
function starClicked(starNumber) {
    rate(starNumber);  // Immediately update the stars based on the clicked value
    getIP(starNumber); // Fetch IP and send the rating to the server
}

// Get the IP address and send the rating to the server
function getIP(starNumber){
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            addRatingToServer(starNumber, data.ip);
        });
}

// Send the rating to the server
function addRatingToServer(rating, ipAddress) {
    if (rating) {
        fetch('https://custom-apis-k8yj.onrender.com/add_rating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'jhfdjkg$vwegkashbh-eierbewkgjrioggegj4923n346mtl436ng_sl346iymkwerymywekl-ywywkl-wer'
            },
            body: JSON.stringify({ rating: rating, ip_address: ipAddress })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(() => {
            getRatings();  // Re-fetch ratings to get the updated average
        })
        .catch(error => console.log('Error:', error));
    }
}

// Fetch the ratings from the server
async function getRatings() {
    try {
        const response = await fetch('https://custom-apis-k8yj.onrender.com/get_ratings', {
            method: 'GET',
            headers: {
                'api-key': 'jhfdjkg$vwegkashbh-eierbewkgjrioggegj4923n346mtl436ng_sl346iymkwerymywekl-ywywkl-wer'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const avgRate = calc_average(data);  // Calculate the average rating
        return avgRate;  // Return the average for further use (e.g., in rate())
    } catch (error) {
        console.log('Error:', error);
    }
}

// Calculate the average rating from the data
function calc_average(data) {
    let totalRating = 0;
    let numRatings = 0;

    // Iterate over the data object and calculate the sum of ratings
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            totalRating += data[key].rate;
            numRatings++;
        }
    }

    // Calculate the average rating
    let averageRating = (numRatings > 0) ? (totalRating / numRatings).toFixed(2) : 0;
    document.getElementById("rates-no").innerHTML = numRatings;
    document.getElementById("rates-avg").innerHTML = averageRating;

    return averageRating;  // Return the calculated average
}
