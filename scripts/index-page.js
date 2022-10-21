// HTML form validation

const formEl = document.getElementById('submitComment');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
});

const formSubmitSuccess = document.querySelector(".form__submit-success")
const headingEl = document.createElement("h2")
// headingEl.innerText = "Thanks for your comment, " + event.target.name.value;

// const uniqueId = () => Math.random().toString(36).substring(2, 9);

const comments = [
    { 
    name: "Connor Walton", 
    date: 02/17/2021, 
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    {
    name: "Emilie Beach", 
    date: 01/09/2021, 
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {
    name: "Miles Acosta", 
    date: 12/20/2021, 
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." },
]

const renderComments = (commentsObj, commentsContainer) => {
const commentsImg = document.createElement("div");
commentsImg.classList.add("comments__img");
commentsContainer.appendChild(commentsImg);

const commentsContentContainer = document.createElement('div');
commentsContentContainer.classList.add("comments__content-container");
commentsContainer.appendChild(commentsContentContainer);

const commentsName = document.createElement("h3"); 
commentsName.classList.add("comments__name");
commentsName.innerText = commentsObj.name;
commentsContentContainer.appendChild(commentsName);

// let dateFormat = new Date(Date.UTC(comments.date));
// dateFormat.toLocaleString('en-GB', {timeZone: 'UTC'})

// const commentsDate = document.createElement("p");
// commentsDate.classList.add("comments__date");
// commentsDate.innerText = commentsObj.date;
// commentsContentContainer.appendChild(commentsDate);

const commentsContent = document.createElement("p");
commentsContent.classList.add("comments__content");
commentsContent.innerText = commentsObj.comment;
commentsContentContainer.appendChild(commentsContent);
}


const displayComment = () => {
    const commentsContainer = document.querySelector(".comments__container")
    commentsContainer.innerHTML = "";

    for(let i = 0; i < comments.length; i++) {
    renderComments(comments[i], commentsContainer)
}
}

displayComment();


