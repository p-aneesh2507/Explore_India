// Destination information used by the homepage.
// Adding a new place here will automatically create a card on the page.

const destinations = [
    {
    id: 1,
    name: "Taj Mahal",
    city: "Agra",
    state: "Uttar Pradesh",
    category: "Heritage",
    rating: "4.8",
    reviews: "128",

    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85",

    about: "The Taj Mahal is one of India's most famous monuments and is known for its beautiful white marble architecture.",

    attractions: [
        "Taj Mahal",
        "Agra Fort",
        "Mehtab Bagh"
    ],

    bestTime: "October to March",

    thingsToDo: [
        "Visit the Taj Mahal",
        "Explore Agra Fort",
        "Enjoy the view from Mehtab Bagh"
    ],
    map: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra",
},

    {
        id: 2,
        name: "Kerala Backwaters",
        city: "Alleppey",
        state: "Kerala",
        category: "Nature",
        rating: "4.7",
        reviews: "96",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
        about: "The Kerala Backwaters are a peaceful network of lakes, canals and lagoons surrounded by beautiful greenery.",

        attractions: [
    "Alleppey Backwaters",
    "Houseboat Cruise",
    "Vembanad Lake"
],

bestTime: "October to February",

thingsToDo: [
    "Take a houseboat ride",
    "Enjoy the natural scenery",
    "Explore local villages"
],
map: "https://www.google.com/maps/search/?api=1&query=Kerala+Backwaters+Alleppey",
},

    {
        id: 3,
        name: "Hawa Mahal",
        city: "Jaipur",
        state: "Rajasthan",
        category: "Heritage",
        rating: "4.5",
        reviews: "84",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=85",
        about: "Hawa Mahal is a historic palace in Jaipur famous for its unique pink architecture and beautiful windows.",

attractions: [
    "Hawa Mahal",
    "City Palace",
    "Jantar Mantar"
],

bestTime: "October to March",
map: "https://www.google.com/maps/search/?api=1&query=Hawa+Mahal+Jaipur",

thingsToDo: [
    "Visit Hawa Mahal",
    "Explore Jaipur markets",
    "Visit nearby historical sites"
]
    },

    {
        id: 4,
        name: "Leh Ladakh",
        city: "Leh",
        state: "Ladakh",
        category: "Adventure",
        rating: "4.9",
        reviews: "112",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
        about: "Leh Ladakh is known for its dramatic mountains, beautiful landscapes and unique Himalayan culture.",
        map: "https://www.google.com/maps/search/?api=1&query=Leh+Ladakh",

attractions: [
    "Pangong Lake",
    "Nubra Valley",
    "Leh Palace"
],

bestTime: "May to September",

thingsToDo: [
    "Explore mountain landscapes",
    "Visit monasteries",
    "Enjoy a road trip"
]
    },

    {
        id: 5,
        name: "Golden Temple",
        city: "Amritsar",
        state: "Punjab",
        category: "Spiritual",
        rating: "4.9",
        reviews: "105",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        about: "The Golden Temple in Amritsar is an important spiritual and cultural landmark known for its peaceful surroundings.",
        map: "https://www.google.com/maps/search/?api=1&query=Golden+Temple+Amritsar",
attractions: [
    "Golden Temple",
    "Jallianwala Bagh",
    "Wagah Border"
],

bestTime: "October to March",

thingsToDo: [
    "Visit the Golden Temple",
    "Explore Amritsar",
    "Experience the local culture"
]
    },

    {
        id: 6,
        name: "Goa Beaches",
        city: "Panaji",
        state: "Goa",
        category: "Beach",
        rating: "4.6",
        reviews: "143",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85",
        about: "Goa is known for its beautiful beaches, relaxed atmosphere, Portuguese heritage and lively culture.",
        map: "https://www.google.com/maps/search/?api=1&query=Goa+Beaches",
attractions: [
    "Baga Beach",
    "Calangute Beach",
    "Fort Aguada"
],

bestTime: "November to February",

thingsToDo: [
    "Relax at the beach",
    "Explore forts",
    "Enjoy local food"
]
    }
];

const experiences = [
    ["Heritage", "🏛", "Explore historic wonders"],
    ["Beach", "🌊", "Sun, Sand & Serenity"],
    ["Hill Stations", "⛰", "Cool Escapes & Scenic Views"],
    ["Wildlife", "🐾", "Into the Wild"],
    ["Spiritual", "🪷", "Peace & Devotion"],
    ["Culture", "💃", "Traditions & Festivals"]
];

const states = [
    ["Rajasthan", "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80"],
    ["Kerala", "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80"],
    ["Goa", "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80"],
    ["Tamil Nadu", "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80"],
    ["Uttarakhand", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80"],
    ["Maharashtra", "https://images.unsplash.com/photo-1529253355930-cd8f7f4e7a7e?auto=format&fit=crop&w=700&q=80"]
];
