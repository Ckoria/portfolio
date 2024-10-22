let avgRating = 0;
document.addEventListener("DOMContentLoaded", async function () {
    avgRating = await getRatings();
    console.log("Runner : "+avgRating);
    rate(avgRating);
    
});

function rate(starNumber) {
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star-${i}`);
        const icon = star.querySelector('i');
        starNumber = Math.round(starNumber);
        if (i <= starNumber) {
            // If the star index is less than or equal to the clicked star, fill the star
            icon.classList.remove('bi-star');     
            icon.classList.add('bi-star-fill');  
        } else {
            // If the star index is greater, leave it unfilled
            icon.classList.remove('bi-star-fill');
            icon.classList.add('bi-star');         
        }
    }
    getIP(starNumber);
}

function getIP(starNumber){
    fetch("https://api.ipify.org?format=json")
                .then(response => response.json())
                .then(data => {
                    addRatingToServer(starNumber, data.ip);
                });
    
}

// send the payload to python server
function addRatingToServer(rating, ipAddress) {
    if(rating) {
        fetch('http://127.0.0.1:5000/add_rating', {
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
            return response.json();  // Parse JSON response only if response is successful
        })
        .then(data => {
            getRatings();
        })
        .catch(error => console.log('Error:', error));
    }
}

async function getRatings(){
    fetch('http://127.0.0.1:5000/get_ratings', {
        method: 'GET',
        headers: {
            'api-key':'jhfdjkg$vwegkashbh-eierbewkgjrioggegj4923n346mtl436ng_sl346iymkwerymywekl-ywywkl-wer'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();  // Parse JSON response only if response is successful
    })
    .then(data => {
        console.log("Get Data : ", data);
        return calc_average(data);
    })
    .catch(error => console.log('Error:', error));
}

function calc_average(data){
    let totalRating = 0;

    // Iterate over the data object and calculate the sum of ratings
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            totalRating += data[key].rate;
        }
    }

    // Calculate the average rating
    let averageRating = (data.length > 0) ? (totalRating / data.length).toFixed(2) : 0;
    const noOfRatings = document.getElementById("rates-no");
    const avgRating = document.getElementById("rates-avg");
    noOfRatings.innerHTML = data.length;
    avgRating.innerHTML = averageRating;
    console.log("Average from Calc : ", averageRating);
    return averageRating;
    
}
