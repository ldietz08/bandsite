
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
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA"
    },
];


const renderShows = (showsObj, showsContainer) => {
    const showsItemDate = document.createElement('div');
    showsItemDate.classList.add("shows__item");
    showsContainer.appendChild(showsItemDate);

    const showsItemTitleDate = document.createElement('p');
    showsItemTitleDate.classList.add("shows__item-title");
    showsItemTitleDate.innerText = "Date";
    showsItemDate.appendChild(showsItemTitleDate);

    const showsItemDateText = document.createElement('p');
    showsItemDateText.classList.add("shows__item-text");
    showsItemDateText.innerText = showsObj.date;
    showsItemDate.appendChild(showsItemDateText);

    const showsItemVenue = document.createElement('div');
    showsItemVenue.classList.add("shows__item");
    showsContainer.appendChild(showsItemVenue);

    const showsItemTitleVenue = document.createElement('p');
    showsItemTitleVenue.classList.add("shows__item-title");
    showsItemTitleVenue.innerText = "Venue";
    showsItemVenue.appendChild(showsItemTitleVenue);

    const showsItemVenueText = document.createElement('p');
    showsItemVenueText.classList.add("shows__item-text");
    showsItemVenueText.innerText = showsObj.venue;
    showsItemVenue.appendChild(showsItemVenueText);

    const showsItemLocation = document.createElement('div');
    showsItemLocation.classList.add("shows__item");
    showsContainer.appendChild(showsItemLocation);

    const showsItemTitleLocation = document.createElement('p');
    showsItemTitleLocation.classList.add("shows__item-title");
    showsItemTitleLocation.innerText = "Location";
    showsItemLocation.appendChild(showsItemTitleLocation);

    const showsItemLocationText = document.createElement('p');
    showsItemLocationText.classList.add("shows__item-text");
    showsItemLocationText.innerText = showsObj.location;
    showsItemLocation.appendChild(showsItemLocationText);

    const showsItemButton = document.createElement('button');
    showsItemButton.classList.add("shows__item-button");
    showsItemButton.classList.add("shows__item-b")
    showsItemButton.innerText = "Buy Tickets";
    showsContainer.appendChild(showsItemButton);
}

const render = () => {
    const showsContainer = document.querySelector(".shows")
    showsContainer.innerHTML = "";

    for(let i = 0; i < shows.length; i++) {
    renderShows(shows[i], showsContainer)
}
}

render();