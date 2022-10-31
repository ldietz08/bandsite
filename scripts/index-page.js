const commentsUrl = "https://project-1-api.herokuapp.com/comments/?api_key=f45f2c53-e493-44e5-a5f0-78d66939e90e";

const commentsContainer = document.querySelector(".comments__container")

const displayComment = (commentsObj) => {

    commentsContainer.innerHTML = "";

    for(let i = 0; i < commentsObj.length; i++) {
        
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

let newCommentArr = [];

axios
.get(commentsUrl)
.then(response => {
    newCommentArr = response.data;
    newCommentArr.sort((a,b) => b.timestamp - a.timestamp);
    displayComment(newCommentArr);
})
.catch(error => {
    console.log(error);
})

const form = document.querySelector(".form");


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

form.addEventListener("submit", newInput => {
    newInput.preventDefault();

    const userName = newInput.target.name.value;
    const userComment = newInput.target.comment.value;

    const newComment = {
        name: userName,
        comment: userComment
    }
    axios
    .post(commentsUrl, newComment)
    .then(response => {
        newCommentArr.unshift(response.data);
        displayComment(newCommentArr);
        console.log(newCommentArr)
        form.reset();
})
.catch(error => {
    console.log("An error has occurred", error);
})

});
