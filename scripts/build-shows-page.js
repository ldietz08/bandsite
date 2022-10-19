
const showsTitle = document.createElement('h1');
showsTitle.classList.add("shows")
showsTitle.innerText = "Shows";

document.body.append(showsTitle)

const showsSection = document.createElement('section')
showsSection.classList.add("shows__card")

// const showsCard = document.createElement('div')
// showsCard.classList.add("shows__card-item")

// showsCard.append("span")
// showsCard.classList.add("shows")


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

// for(let i = 0; i < shows.length; i++) {
//     document.body.append(shows[i])
// }


//Tutorial 

// const commentsSection = document.createElement('section');
// commentsSection.classList.add('comment')

// const individualComment = document.createElement('div');
// individualComment.classList.add("individualComment")

// commentsSection.appendChild(individualComment);
