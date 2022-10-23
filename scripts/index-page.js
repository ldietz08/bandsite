const uniqueId = () => Math.random().toString(36).substring(2, 9);

const comments = [
    { 
    id: uniqueId(),
    name: "Connor Walton", 
    date: '02/17/2021', 
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    {
    id: uniqueId(),
    name: "Emilie Beach", 
    date: '01/09/2021', 
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {
    id: uniqueId(),
    name: "Miles Acosta", 
    date: '12/20/2020', 
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." },
]

const renderComments = (commentsObj, commentsContainer) => {

    const imageContainerLeft = document.createElement("div");
    imageContainerLeft.classList.add("comments__img-container");
    commentsContainer.appendChild(imageContainerLeft);

    const commentsImg = document.createElement("div");
    commentsImg.classList.add("comments__img");
    commentsContainer.appendChild(commentsImg);

    const commentsWrapperRight = document.createElement("div");
    commentsWrapperRight.classList.add("comments__wrapper-right");
    commentsContainer.appendChild(commentsWrapperRight);

    const nameWrapper = document.createElement("div");
    nameWrapper.classList.add("comments__wrapper-name-date");
    commentsContainer.appendChild(nameWrapper);

    const commentsName = document.createElement("h3"); 
    commentsName.classList.add("comments__name");
    commentsName.innerText = commentsObj.name;
    commentsWrapperRight.appendChild(commentsName);

    const commentsDate = document.createElement("p");
    commentsDate.classList.add("comments__date");
    commentsDate.innerText = commentsObj.date;
    commentsWrapperRight.appendChild(commentsDate);

    const commentsContent = document.createElement("p");
    commentsContent.classList.add("comments__content");
    commentsContent.innerText = commentsObj.comment;
    commentsWrapperRight.appendChild(commentsContent);
}

const displayComment = () => {
    const commentsContainer = document.querySelector(".comment__container")
    commentsContainer.innerHTML = "";

    for(let i = 0; i < comments.length; i++) {
    renderComments(comments[i], commentsContainer)
}
}

displayComment();

const currentDate = new Date().toLocaleDateString();

const form = document.querySelector(".comments__input");

form.addEventListener("submit", newInput=> {

    newInput.preventDefault();

    const newComment = {};
    newComment.name = newInput.target.name.value;
    newComment.comment = newInput.target.comment.value;
    newComment.date = currentDate;

const showError = () => {
    const commentsAddForm = document.querySelector(".comments__add");
    const commentsAddInput = document.querySelector(".comments__input")
    commentsAddInput.classList.add("comments__input--error");
    const commentsAddError = document.createElement("p");
    commentsAddError.textContent = "Please fill out the comment field";
    commentsAddError.classList.add("comments__error");
    commentsAddForm.appendChild(commentsAddError);

    setTimeout(() => clearError(commentsAddForm, commentsAddInput, commentsAddError), 2000);
}

    if(newComment.name !== "" && newComment.comment!== "") {
        comments.unshift(newComment);
    }else{
        showError();
    }

    displayComment()
    console.log(comments)

});

//Form validation:
const clearError = (commentsAddForm, commentsAddInput, commentsAddError) => {
    commentsAddForm.removeChild(commentsAddError);
    commentsAddInput.classList.remove("comments__input--error")
}

