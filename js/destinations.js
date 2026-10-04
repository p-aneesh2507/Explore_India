const searchInput = document.getElementById("destinationSearch");
const searchButton = document.getElementById("searchDestinationButton");

const categoryFilter = document.getElementById("categoryFilter");
const stateFilter = document.getElementById("stateFilter");

const destinationGrid = document.getElementById("destinationGrid");


// Show states in the dropdown

function showStates() {

    const states = [];

    destinations.forEach(function(place) {

        if (!states.includes(place.state)) {
            states.push(place.state);
        }

    });

    states.sort();

    states.forEach(function(state) {

        const option = document.createElement("option");

        option.value = state;
        option.textContent = state;

        stateFilter.appendChild(option);

    });

}


// Show destination cards

function showDestinations(list) {

    destinationGrid.innerHTML = "";

    if (list.length === 0) {

        destinationGrid.innerHTML = `
            <p class="no-results">
                No destinations found.
            </p>
        `;

        return;
    }


    list.forEach(function(place) {

        const card = document.createElement("div");

        card.className = "destination-card";


        card.innerHTML = `

            <img
                src="${place.image}"
                alt="${place.name}"
            >

            <div class="card-content">

                <span class="card-category">
                    ${place.category}
                </span>

                <h3>
                    ${place.name}
                </h3>

                <p class="location">
                    📍 ${place.city}, ${place.state}
                </p>

                <div class="rating">
                    ⭐ ${place.rating}
                    <span>
                        ${place.reviews} reviews
                    </span>
                </div>

                <button
                    class="details-button"
                    onclick="openDetails('${place.name}')"
                >
                    View Details
                </button>

            </div>

        `;

        destinationGrid.appendChild(card);

    });

}


// Search and filter destinations

function filterDestinations() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const selectedCategory =
        categoryFilter.value;

    const selectedState =
        stateFilter.value;


    const filteredPlaces = destinations.filter(function(place) {

        const matchesSearch =
            place.name.toLowerCase().includes(searchText) ||
            place.city.toLowerCase().includes(searchText) ||
            place.state.toLowerCase().includes(searchText);


        const matchesCategory =
            selectedCategory === "all" ||
            place.category === selectedCategory;


        const matchesState =
            selectedState === "all" ||
            place.state === selectedState;


        return (
            matchesSearch &&
            matchesCategory &&
            matchesState
        );

    });


    showDestinations(filteredPlaces);

}


// Search button

searchButton.addEventListener("click", function() {

    filterDestinations();

});


// Search when pressing Enter

searchInput.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        filterDestinations();
    }

});


// Category filter

categoryFilter.addEventListener("change", function() {

    filterDestinations();

});


// State filter

stateFilter.addEventListener("change", function() {

    filterDestinations();

});


// Open destination details

// Open destination details

function openDetails(name) {

    const index = destinations.findIndex(function(place) {

        return place.name === name;

    });


    if (index !== -1) {

        window.location.href =
            "destination-details.html?id=" + destinations[index].id;

    }

}


// Start the page

showStates();

showDestinations(destinations);