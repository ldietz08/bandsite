const uniqueId = () => Math.random().toString(36).substring(2, 9);

const comments = [
    { 
    name: "Connor Walton", 
    date: "02/17/2021", 
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    {
    name: "Emilie Beach", 
    date: "01/09/2021", 
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {
    name: "Miles Acosta", 
    date: "12/20/2021", 
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." },
]

const commentsContainer = document.createElement("section");
commentsContainer.classList.add("comments__container");
document.body.appendChild(commentsContainer);

const commentsImg = document.createElement("img")
commentsImg.classList.add("comments__img")
commentsContainer.appendChild(commentsImg)

const commentsName = document.createElement("h3") 
commentsName.classList.add("comments__name")
commentsName.innerText = comments.name;
commentsContainer.appendChild(commentsName)

const commentsContent = document.createElement("p")
commentsContent.classList.add("comments__content")
commentsContent.innerText = comments.comment;
commentsContainer.appendChild(commentsContent)


function displayComment(comment) {

}