const showDatesUrl = "https://project-1-api.herokuapp.com/showDates/?api_key=f45f2c53-e493-44e5-a5f0-78d66939e90e";

const render = () => {
axios
.get(showDatesUrl)
.then(response => {
    response.data.forEach((showsObj) => {
        renderShows(showsObj)
    })})
    .catch(error => {
    console.log(error)
})
}
render();

const renderShows = (showsObj) => {
    let showsContainer = document.querySelector(".shows")

    const showsItemWrapper = document.createElement("div");
    showsItemWrapper.classList.add("shows__item-wrapper");
    showsContainer.appendChild(showsItemWrapper);

    const showsItemDate = document.createElement("div");
    showsItemDate.classList.add("shows__item");
    showsItemWrapper.appendChild(showsItemDate);

    const showsItemTitleDate = document.createElement("p");
    showsItemTitleDate.classList.add("shows__item-title", "shows__item--display-title");
    showsItemTitleDate.innerText = "Date";
    showsItemDate.appendChild(showsItemTitleDate);

    const showsItemDateText = document.createElement("p");
    showsItemDateText.classList.add("shows__item-text", "shows__item-text-date");
    showsItemDateText.innerText = new Date(showsObj.date).toDateString();
    showsItemDate.appendChild(showsItemDateText);

    const showsItemVenue = document.createElement("div");
    showsItemVenue.classList.add("shows__item");
    showsItemWrapper.appendChild(showsItemVenue);

    const showsItemTitleVenue = document.createElement("p");
    showsItemTitleVenue.classList.add("shows__item-title", "shows__item--display-title");
    showsItemTitleVenue.innerText = "Venue";
    showsItemVenue.appendChild(showsItemTitleVenue);

    const showsItemVenueText = document.createElement("p");
    showsItemVenueText.classList.add("shows__item-text");
    showsItemVenueText.innerText = showsObj.place;
    showsItemVenue.appendChild(showsItemVenueText);

    const showsItemLocation = document.createElement("div");
    showsItemLocation.classList.add("shows__item");
    showsItemWrapper.appendChild(showsItemLocation);

    const showsItemTitleLocation = document.createElement("p");
    showsItemTitleLocation.classList.add("shows__item-title", "shows__item--display-title");
    showsItemTitleLocation.innerText = "Location";
    showsItemLocation.appendChild(showsItemTitleLocation);

    const showsItemLocationText = document.createElement("p");
    showsItemLocationText.classList.add("shows__item-text");
    showsItemLocationText.innerText = showsObj.location;
    showsItemLocation.appendChild(showsItemLocationText);

    const showsItemButton = document.createElement("button");
    showsItemButton.classList.add("shows__item-button");
    showsItemButton.classList.add("shows__item-b")
    showsItemButton.innerText = "Buy Tickets";
    showsItemWrapper.appendChild(showsItemButton);
}

// const activeShowsItem = document.querySelector(".shows__item-wrapper")
// document.addEventListener("click", () => {
//     activeShowsItem.classList.add("shows__item-wrapper--active")
// })

