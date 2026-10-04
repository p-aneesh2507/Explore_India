// Explore India homepage
// This file contains the small interactions used on the page.

const experienceList = document.getElementById("experienceList");
const destinationList = document.getElementById("destinationList");
const stateList = document.getElementById("stateList");

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const stateFilter = document.getElementById("stateFilter");
const noResults = document.getElementById("noResults");

let selectedCategory = "All";
let searchText = "";
let selectedState = "All";

// Create the experience buttons.
function showExperiences() {
    experienceList.innerHTML = "";

    experiences.forEach(function(item) {
        const button = document.createElement("button");

        button.className = "experience-card";
        button.innerHTML = `
            <span class="experience-icon">${item[1]}</span>
            <strong>${item[0]}</strong>
            <small>${item[2]}</small>
        `;

        button.addEventListener("click", function() {
            selectedCategory = item[0];

            document.querySelectorAll(".experience-card").forEach(function(card) {
                card.classList.remove("selected");
            });

            button.classList.add("selected");
            showDestinations();

            document.getElementById("destinations").scrollIntoView({
                behavior: "smooth"
            });
        });

        experienceList.appendChild(button);
    });
}

// Add states to the select box.
function showStateOptions() {
    states.forEach(function(state) {
        const option = document.createElement("option");
        option.value = state[0];
        option.textContent = state[0];
        stateFilter.appendChild(option);
    });
}

// Display destination cards.
function showDestinations() {
    destinationList.innerHTML = "";

    const filteredPlaces = destinations.filter(function(place) {
        const details = (
            place.name + " " +
            place.city + " " +
            place.state + " " +
            place.category
        ).toLowerCase();

        const matchesSearch =
            searchText === "" || details.includes(searchText.toLowerCase());

        const matchesState =
            selectedState === "All" || place.state === selectedState;

        let matchesCategory = selectedCategory === "All";

        if (selectedCategory === place.category) {
            matchesCategory = true;
        }

        // Ladakh is shown when the user chooses Hill Stations.
        if (selectedCategory === "Hill Stations" &&
            place.category === "Adventure") {
            matchesCategory = true;
        }

        return matchesSearch && matchesState && matchesCategory;
    });

    filteredPlaces.forEach(function(place) {
        const card = document.createElement("article");

        card.className = "destination-card";
        card.innerHTML = `
            <div class="card-image">
                <img src="${place.image}" alt="${place.name}">
                <span class="tag">${place.category}</span>
            </div>

            <div class="card-content">
                <h3>${place.name}</h3>
                <p class="location">⌖ ${place.city}, ${place.state}</p>

                <div class="rating">
                    <span>★</span>
                    ${place.rating}
                    <small>(${place.reviews} reviews)</small>
                </div>

                <button class="card-arrow" title="View ${place.name}">→</button>
            </div>
        `;

        const arrow = card.querySelector(".card-arrow");

        arrow.addEventListener("click", function() {
    window.location.href = "destination-details.html?id=" + place.id;
});

        destinationList.appendChild(card);
    });

    if (filteredPlaces.length === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

// Display state cards.
function showStates() {
    stateList.innerHTML = "";

    states.forEach(function(state) {
        const card = document.createElement("button");

        card.className = "state-card";
        card.innerHTML = `
            <img src="${state[1]}" alt="${state[0]}">
            <span>${state[0]}</span>
        `;

        card.addEventListener("click", function() {
            selectedState = state[0];
            stateFilter.value = state[0];

            showDestinations();

            document.getElementById("destinations").scrollIntoView({
                behavior: "smooth"
            });
        });

        stateList.appendChild(card);
    });
}

// Search from the hero section.
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    searchText = searchInput.value.trim();
    selectedState = stateFilter.value;

    showDestinations();

    document.getElementById("destinations").scrollIntoView({
        behavior: "smooth"
    });
});

// Update the results when a state is changed.
stateFilter.addEventListener("change", function() {
    selectedState = stateFilter.value;
    showDestinations();
});

// Top search button.
document.getElementById("topSearch").addEventListener("click", function() {
    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(function() {
        searchInput.focus();
    }, 500);
});

// Mobile menu.
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});

// Close mobile menu after clicking a link.
document.querySelectorAll(".nav-menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("show");
    });
});

// Show a small shadow on the navbar after scrolling.
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    if (window.scrollY > 500) {
        document.getElementById("backTop").classList.add("show");
    } else {
        document.getElementById("backTop").classList.remove("show");
    }
});

// Back to top button.
document.getElementById("backTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Start the page.
showExperiences();
showStateOptions();
showDestinations();
showStates();
// Trip planner

const tripDestination =
    document.getElementById("tripDestination");

const tripDays =
    document.getElementById("tripDays");

const travelStyle =
    document.getElementById("travelStyle");

const planTripButton =
    document.getElementById("planTripButton");

const tripResult =
    document.getElementById("tripResult");


planTripButton.addEventListener("click", function() {

    const destination = tripDestination.value;
    const days = Number(tripDays.value);
    const style = travelStyle.value;


    if (
        destination === "" ||
        days === 0 ||
        style === ""
    ) {

        tripResult.innerHTML = `
            <p>
                Please select all options to create
                your travel plan.
            </p>
        `;

        return;
    }


    let activities = [];


if (destination === "Taj Mahal") {

    activities = [
        "Visit the Taj Mahal",
        "Explore Agra Fort",
        "Visit Mehtab Bagh",
        "Explore local markets",
        "Enjoy local food",
        "Visit nearby historical places",
        "Relax and explore Agra"
    ];

} else if (destination === "Kerala Backwaters") {

    activities = [
        "Explore the Kerala Backwaters",
        "Enjoy a houseboat ride",
        "Visit nearby villages",
        "Explore Vembanad Lake",
        "Enjoy the natural scenery",
        "Try local Kerala food",
        "Relax near the backwaters"
    ];

} else if (destination === "Hawa Mahal") {

    activities = [
        "Visit Hawa Mahal",
        "Explore City Palace",
        "Visit Jantar Mantar",
        "Explore Jaipur markets",
        "Try local food",
        "Visit nearby historical places",
        "Explore more of Jaipur"
    ];

} else if (destination === "Leh Ladakh") {

    activities = [
        "Explore Leh",
        "Visit Leh Palace",
        "Explore mountain landscapes",
        "Visit nearby monasteries",
        "Enjoy a scenic road trip",
        "Explore Nubra Valley",
        "Relax and enjoy the surroundings"
    ];

} else if (destination === "Golden Temple") {

    activities = [
        "Visit the Golden Temple",
        "Explore Amritsar",
        "Visit Jallianwala Bagh",
        "Explore local markets",
        "Try local food",
        "Visit nearby attractions",
        "Experience the local culture"
    ];

} else if (destination === "Goa Beaches") {

    activities = [
        "Relax at the beach",
        "Visit Fort Aguada",
        "Explore nearby beaches",
        "Try local food",
        "Explore Goa markets",
        "Enjoy the coastal scenery",
        "Relax and explore Goa"
    ];

}


let plan = "";

for (let i = 0; i < days; i++) {

    plan += `
        <p>
            <strong>Day ${i + 1}:</strong>
            ${activities[i]}
        </p>
    `;

}


    tripResult.innerHTML = `

        <h3>${destination} - ${days} Day Plan</h3>

        <p>
            <strong>Travel Style:</strong>
            ${style}
        </p>

        ${plan}

    `;

});
// Reset trip planner

const resetTripButton =
    document.getElementById("resetTripButton");

resetTripButton.addEventListener("click", function() {

    tripDestination.value = "";
    tripDays.value = "";
    travelStyle.value = "";

    tripResult.innerHTML = "";

});