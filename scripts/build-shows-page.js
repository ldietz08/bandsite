//Store API url in variable 
const showDatesUrl = "https://project-1-api.herokuapp.com/showDates/?api_key=f45f2c53-e493-44e5-a5f0-78d66939e90e";

/*
Axios get request 
Render shows data and implement the selected rows functionality 
*/
axios
.get(showDatesUrl)
.then(response => {
    renderShows(response.data);
    selectedShows();
})
    .catch(error => {
    console.log(error);
})

//Function to loop through the api data and render the DOM 
const renderShows = (showsObj) => {
    for(let i = 0; i < showsObj.length; i++){
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
    showsItemDateText.innerText = new Date(showsObj[i].date + 86400000).toDateString();
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
    showsItemVenueText.innerText = showsObj[i].place;
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
    showsItemLocationText.innerText = showsObj[i].location;
    showsItemLocation.appendChild(showsItemLocationText);

    const showsItemButton = document.createElement("button");
    showsItemButton.classList.add("shows__item-button");
    showsItemButton.classList.add("shows__item-b")
    showsItemButton.innerText = "Buy Tickets";
    showsItemWrapper.appendChild(showsItemButton);
    }
}
//Function to select and add a click event to each row in the shows table
const selectedShows = () => {
    const activeShowsItems = document.querySelectorAll(".shows__item-wrapper")
    activeShowsItems.forEach(element => {
        element.addEventListener("click", (e) => selectedRow(e))
})

/*
Function to remove active class on elements that are 
not being selected and add active class on selected row
*/
const selectedRow = (e) => {
    activeShowsItems.forEach(element => {
        if(element !== e.currentTarget) {
            element.classList.remove("shows__item-wrapper--active")
        }
    })
    e.currentTarget.classList.toggle("shows__item-wrapper--active")
}
}
