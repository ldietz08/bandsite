const commentsUrl = "https://project-1-api.herokuapp.com/comments/?api_key=f45f2c53-e493-44e5-a5f0-78d66939e90e";

const displayComment = () => {
axios
.get(commentsUrl)
.then(response => {
    response.data.forEach((commentsObj) => {
        renderComments(commentsObj)
        // let formatDate = new Date(response.data.date).toDateString();
        // console.log(formatDate)
    })})
.catch(error => {
    console.log(error)
})
}
displayComment();

const renderComments = (commentsObj) => {
    const commentsContainer = document.querySelector(".comments__container")

    const borderTop = document.createElement("div")
    borderTop.classList.add("comments__border-top");
    commentsContainer.appendChild(borderTop);

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
    commentsName.innerText = commentsObj.name;
    nameContainer.appendChild(commentsName);

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("comments__item-container")
    nameDateContainer.appendChild(dateContainer);

    const commentsDate = document.createElement("p");
    commentsDate.classList.add("comments__date");
    commentsDate.innerText = commentsObj.date;
    dateContainer.appendChild(commentsDate);

    const commentsContent = document.createElement("p");
    commentsContent.classList.add("comments__content");
    commentsContent.innerText = commentsObj.comment;
    commentsContainerRight.appendChild(commentsContent);
}

//     commentsContainer.innerHTML = "";

// const currentDate = new Date().toLocaleDateString();

// const form = document.querySelector(".form");

// form.addEventListener("submit", newInput=> {

//     newInput.preventDefault();

//     const newComment = {};
//     newComment.name = newInput.target.name.value;
//     newComment.comment = newInput.target.comment.value;
//     newComment.date = currentDate;

// const showError = () => {
//     const commentsAddForm = document.querySelector(".comments__add");
//     const commentsAddInput = document.querySelector(".comments__input")
//     commentsAddInput.classList.add("comments__input--error");
//     const commentsAddError = document.createElement("p");
//     commentsAddError.textContent = "Please fill out the comment field";
//     commentsAddError.classList.add("comments__error");
//     commentsAddForm.appendChild(commentsAddError);

//     setTimeout(() => clearError(commentsAddForm, commentsAddInput, commentsAddError), 2000);
// }

//     if(newComment.name !== "" && newComment.comment!== "") {
//         comments.unshift(newComment);
//     }else{
//         showError();
//     }

//     displayComment()

// });

// //Form validation:
// const clearError = (commentsAddForm, commentsAddInput, commentsAddError) => {
//     commentsAddForm.removeChild(commentsAddError);
//     commentsAddInput.classList.remove("comments__input--error")
// }

