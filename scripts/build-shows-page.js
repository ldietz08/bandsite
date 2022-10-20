
const shows = [
    {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
    },
    {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
    },
    {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA"
    },
    {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    },
    {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA"
    },
    {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA"
    },
    {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA"
    }
];

// const renderShows = (showsObj, showsContainer) => {

    const showsItemContainer = document.createElement('section');
    showsItemContainer.classList.add("shows");
    document.body.appendChild(showsItemContainer);

    // Date
    const showsItemDate = document.createElement('div');
    showsItemDate.classList.add("shows__item");
    showsItemContainer.appendChild(showsItemDate);

    const showsItemTitleDate = document.createElement('p');
    showsItemTitleDate.classList.add("shows__item-title");
    showsItemTitleDate.innerText = "Date";
    showsItemDate.appendChild(showsItemTitleDate);

    const showsItemDateText = document.createElement('p');
    showsItemDateText.classList.add("shows__item-text");
    // showsItemDateText.innerText = showsObj.date;
    showsItemDate.appendChild(showsItemDateText);

    // Venue 
    const showsItemVenue = document.createElement('div');
    showsItemVenue.classList.add("shows__item");
    showsItemContainer.appendChild(showsItemVenue);

    const showsItemTitleVenue = document.createElement('p');
    showsItemTitleVenue.classList.add("shows__item-title");
    showsItemTitleVenue.innerText = "Venue";
    showsItemVenue.appendChild(showsItemTitleVenue);

    const showsItemVenueText = document.createElement('p');
    showsItemVenueText.classList.add("shows__item-text");
    // showsItemVenueText.innerText = showsObj.venue;
    showsItemVenue.appendChild(showsItemVenueText);

    // Location
    const showsItemLocation = document.createElement('div');
    showsItemLocation.classList.add("shows__item");
    showsItemContainer.appendChild(showsItemLocation);

    const showsItemTitleLocation = document.createElement('p');
    showsItemTitleLocation.classList.add("shows__item-title");
    showsItemTitleLocation.innerText = "Location";
    showsItemLocation.appendChild(showsItemTitleLocation);

    const showsItemLocationText = document.createElement('p');
    showsItemLocationText.classList.add("shows__item-text");
    showsItemLocationText.innerText = "San Francisco, CA"
    showsItemLocation.appendChild(showsItemLocationText);

    const showsItemButton = document.createElement('button');
    showsItemButton.classList.add("shows__item-button");
    showsItemButton.innerText = "Buy Tickets";
    showsItemContainer.appendChild(showsItemButton);

// }

// const render = () => {
//     const showsContainer = document.querySelector(".shows")
//     showsContainer.innerHTML = "";

//     for(let i = 0; i < shows.length; i++) {
//     renderShows(shows[i], showsContainer)
// }
// }