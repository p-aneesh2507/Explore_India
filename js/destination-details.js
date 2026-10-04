const detailsContainer =
    document.getElementById("destinationDetails");


// Get the id from the URL

const urlParams =
    new URLSearchParams(window.location.search);

const destinationId =
    Number(urlParams.get("id"));


// Find the destination

const destination =
    destinations.find(function(place) {
        return place.id === destinationId;
    });


// Show destination details

if (destination) {

    detailsContainer.innerHTML = `

        <div class="details-image">

            <img
                src="${destination.image}"
                alt="${destination.name}"
            >

        </div>


        <div class="details-content">

            <span class="destination-category">
                ${destination.category}
            </span>

            <h1>${destination.name}</h1>


            <p class="details-location">
                📍 ${destination.city},
                ${destination.state}
            </p>


            <div class="details-rating">

                ⭐ ${destination.rating}

                <span>
                    (${destination.reviews} reviews)
                </span>

            </div>


            <h2>About This Place</h2>

            <p>
                ${destination.about}
            </p>


            <h2>Attractions</h2>

            <ul class="details-list">

                ${destination.attractions.map(function(item) {
                    return `<li>${item}</li>`;
                }).join("")}

            </ul>


            <h2>Things to Do</h2>

            <ul class="details-list">

                ${destination.thingsToDo.map(function(item) {
                    return `<li>${item}</li>`;
                }).join("")}

            </ul>


                        <h2>Best Time to Visit</h2>

            <p>
                ${destination.bestTime}
            </p>


            <a
                href="${destination.map}"
                target="_blank"
                class="map-button"
            >
                📍 View on Google Maps
            </a>


            <a
                href="destinations.html"
                class="back-button"
            >
                ← Back to Destinations
            </a>

        </div>

    `;

} else {

    detailsContainer.innerHTML = `

        <div class="no-results">

            <h2>Destination not found</h2>

            <p>
                We could not find the destination
                you are looking for.
            </p>

            <a
                href="destinations.html"
                class="back-button"
            >
                ← Back to Destinations
            </a>

        </div>

    `;

}