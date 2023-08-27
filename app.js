// document.addEventListener("DOMContentLoaded", function());

// get the form using the id.
const form = document.getElementById("registration-form");
form.addEventListener("submit", function(event) {
    // to prevent the form form getting auto-submitted.
    event.preventDefault();

    const name = document.getElementById("name").value;
    // const email = document.getElementById("email").value;

    // data for the centers
    const centers = [
        "Chennai",
        "Bhubaneswar",
        "Chandigarh",
        "Patna",
        "Jamshedpur",
        "Kolkata",
        "Manali",
        "Kashmir"
    ];

    // get a random number, which lies between the length of the centers array;
    const randomCenterIndex = Math.floor(Math.random() * centers.length);
    // use the random generated number to get the random center
    const allocatedCenter = centers[randomCenterIndex];


    // inject the text to the empty div.
    const centerDisplay = document.getElementById("center-display");
    centerDisplay.innerHTML = `Dear ${name}, your allocated center is ${allocatedCenter}`;

})