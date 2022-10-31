//Store API url in a variable 
const commentsUrl = "https://project-1-api.herokuapp.com/comments/?api_key=f45f2c53-e493-44e5-a5f0-78d66939e90e";

const commentsContainer = document.querySelector(".comments__container")

//Function to loop through the API data and render the DOM 
const displayComment = (commentsObj) => {
    //clear the comments container 
    commentsContainer.innerHTML = "";

    for(let i = 0; i < commentsObj.length; i++) {
        
    const border = document.createElement("div")
    border.classList.add("comments__border");
    commentsContainer.appendChild(border);

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("comments__content-container");
    commentsContainer.appendChild(contentContainer);

    const commentsImg = document.createElement("div");
    commentsImg.classList.add("comments__img");
    contentContainer.appendChild(commentsImg);

    const commentsContainerRight = document.createElement("div");
    commentsContainerRight.classList.add("comments__content");
    contentContainer.appendChild(commentsContainerRight);

    const nameDateContainer = document.createElement("div");
    nameDateContainer.classList.add("comments__name-date")
    commentsContainerRight.appendChild(nameDateContainer);

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("comments__item-container")
    nameDateContainer.appendChild(nameContainer);

    const commentsName = document.createElement("h3"); 
    commentsName.classList.add("comments__name");
    commentsName.innerText = commentsObj[i].name;
    nameContainer.appendChild(commentsName);

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("comments__item-container")
    nameDateContainer.appendChild(dateContainer);

    const commentsDate = document.createElement("p");
    commentsDate.classList.add("comments__date");
    commentsDate.innerText = new Date(commentsObj[i].timestamp).toLocaleDateString();
    dateContainer.appendChild(commentsDate);

    const commentsContent = document.createElement("p");
    commentsContent.classList.add("comments__text");
    commentsContent.innerText = commentsObj[i].comment;
    commentsContainerRight.appendChild(commentsContent);
    }
}

//Create an empty array to hold the new comments
let newCommentArr = [];

/*
Axios get request
Data is added to the new comment array, and is sorted so the most recent comment is first
*/
axios
.get(commentsUrl)
.then(response => {
    newCommentArr = response.data;
    newCommentArr.sort((a,b) => b.timestamp - a.timestamp);
    displayComment(newCommentArr);
})
.catch(error => {
     console.log("An error has occurred", error);
})


const clearError = (commentsAddForm, commentsAddInput, commentsAddError) => {
    commentsAddForm.removeChild(commentsAddError);
    commentsAddInput.classList.remove("comments__input--error")
}

//Form validation
const showError = () => {
    const commentsAddForm = document.querySelector(".form");
    const commentsAddInput = document.querySelector(".form__input")
    commentsAddInput.classList.add("form__input--error");
    const commentsAddError = document.createElement("p");
    commentsAddError.textContent = "Please fill out the comment field";
    commentsAddError.classList.add("comments__error");
    commentsAddForm.appendChild(commentsAddError);

    setTimeout(() => clearError(commentsAddForm, commentsAddInput, commentsAddError), 2000);
}

//Select the form 
const form = document.querySelector(".form");

//Add an event listener to the form 
form.addEventListener("submit", newInput => {
    newInput.preventDefault();

    const userName = newInput.target.name.value;
    const userComment = newInput.target.comment.value;

    const newComment = {
        name: userName,
        comment: userComment
    }

/* 
Axios post request
Resolve adds new comments to the top, displays them and resets the form
*/
    axios
    .post(commentsUrl, newComment)
    .then(response => {
        newCommentArr.unshift(response.data);
        displayComment(newCommentArr);
        form.reset();
})
.catch(error => {
    console.log("An error has occurred", error);
})

});
