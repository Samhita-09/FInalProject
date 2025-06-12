// copying email/number when clicking on button

const emailButton1 = document.querySelector("#email1-btn")
const emailButton2 = document.querySelector("#email2-btn")
const numberButton = document.querySelector("#number-btn")

function copyEmail1() {
    navigator.clipboard.writeText(emailButton1.textContent)
    .then(() => { // AI used just for this '.then' line
        emailButton1.textContent = "Copied!"
    })

    // This was done on our own
    setTimeout(() => {
        emailButton1.textContent = "samkal28@bergen.org"
    }, 2000)
}

function copyNumber() {    
    navigator.clipboard.writeText(numberButton.textContent)
    .then(() => {
        numberButton.textContent = "Copied!"
    })

    setTimeout(() => {
        numberButton.textContent = "(551) 123-4567"
    }, 2000)
}

function copyEmail2() {
    navigator.clipboard.writeText(emailButton2.textContent)
    .then(() => {
        emailButton2.textContent = "Copied!"
    })

    setTimeout(() => {
        emailButton2.textContent = "julzag28@bergen.org"
    }, 2000)
}

const searchbar = document.querySelector("#item-input")

function filterItems(e) {
    const text = e.target.value.toLowerCase()
    const items = document.querySelectorAll(".book-title")
    // ask how to add authors to this too, not just book titles

    items.forEach(item => {
        const itemName = item.textContent.toLowerCase()
        const card = item.closest(".feature-card") // used chatgpt bc when we did it, it just showed the title and not the wholoe card
        if (itemName.includes(text)) {
            card.style.display = 'block'
        }
        else {
            card.style.display = 'none'
        }
    })
}

// rating - done using AI because we weren't able to do it on our own

// Store the user's selected rating
let currentRating = 0;

// Make the stars clickable
function rate() {
    const stars = document.querySelectorAll(".userReview .fa-star");

    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            currentRating = index + 1;
            updateStarVisuals(stars, currentRating);
        });

        star.addEventListener("mouseover", () => {
            updateStarVisuals(stars, index + 1);
        });

        star.addEventListener("mouseout", () => {
            updateStarVisuals(stars, currentRating);
        });
    });
}

// Update star colors based on rating
function updateStarVisuals(stars, rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove("fa-regular");
            star.classList.add("fa-solid");
            star.style.color = "#FFD43B";
        } else {
            star.classList.remove("fa-solid");
            star.classList.add("fa-regular");
            star.style.color = "";
        }
    });
}
// AI usage is over with the above line

const addBtn = document.querySelector(".addReview")
const bookTitle = document.querySelector(".review-book-title")
const bookAuthor = document.querySelector(".review-author")
const bookReview = document.querySelector(".review-paragraph")

function addReview() {
    const newTitle = bookTitle.value.trim()
    const newAuthor = bookAuthor.value.trim()
    const newReview = bookReview.value.trim()

    if (newTitle === "") {
        alert("Please enter a book title!")
        return
    }
    else if (newAuthor === "") {
        alert("Please enter your book's author!")
        return
    }
    else if (newReview === "") {
        alert("Please enter your book review!")
        return
    }
    else {
        const div = document.createElement("div")
        div.classList.add("feature-card")
        div.innerHTML =
            // Disclaimer: AI used just for lines 131-134
            `<h1 class="book-title">${newTitle}</h1>
            <h2 class="author">${newAuthor}</h2>
            <div class="star">
                ${[1, 2, 3, 4, 5].map(i =>
                    `<p class="rating"><i class="fa-${i <= currentRating ? 'solid' : 'regular'} fa-star" style="color: ${i <= currentRating ? '#FFD43B' : ''};"></i></p>`
                ).join('')}
            </div>
            <p class="review">${newReview}</p>`
            document.querySelector(".feature-container").appendChild(div)
    }
    const form = document.querySelector(".userReview")
    form.innerHTML = 
    `<div class="addreview">
            <p>Book Title: <input type="text" class="review-book-title"></p>

            <p>Author: <input type="text" class="review-author"></p>

            <p class="rating"><i class="fa-regular fa-star" onclick="rate()"></i></p>
            <p class="rating"><i class="fa-regular fa-star" onclick="rate()"></i></p>
            <p class="rating"><i class="fa-regular fa-star" onclick="rate()"></i></p>
            <p class="rating"><i class="fa-regular fa-star" onclick="rate()"></i></p>
            <p class="rating"><i class="fa-regular fa-star" onclick="rate()"></i></p>

            <p>Review:<input type="text" class="review-paragraph"></p>
        </div>`
        rate();
        addCardToStorage();
}

// local storage

const cardContainer = document.querySelector(".feature-container")

function getItemsFromStorage() {
    let cards = localStorage.getItem("cards");
    return cards ? JSON.parse(cards) : [];
}

function addCardToStorage() {
    const cardDetails = {
        title: bookTitle.value,
        author: bookAuthor.value,
        rating: currentRating,
        review: bookReview.value
    }

    const cards = getItemsFromStorage();
    cards.push(cardDetails);
    localStorage.setItem('cards', JSON.stringify(cards));
}

function loadFromLocalStorage() {
    const cards = getItemsFromStorage();

    cards.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("feature-card");
        div.innerHTML = `
            <h1 class="book-title">${card.title}</h1>
            <h2 class="author">${card.author}</h2>
            <div class="star">
                ${[1, 2, 3, 4, 5].map(i =>
                    `<p class="rating"><i class="fa-${i <= card.rating ? 'solid' : 'regular'} fa-star" style="color: ${i <= card.rating ? '#FFD43B' : ''};"></i></p>`
                ).join('')}
            </div>
            <p class="review">${card.review}</p>`;
        document.querySelector(".feature-container").appendChild(div);
    });
}


function displayItems() {
    const cards = getItemsFromStorage();

    cards.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("feature-card");
        div.innerHTML = `
            <h1 class="book-title">${card.title}</h1>
            <h2 class="author">${card.author}</h2>
            <div class="star">
                ${[1, 2, 3, 4, 5].map(i =>
                    `<p class="rating"><i class="fa-${i <= card.rating ? 'solid' : 'regular'} fa-star" style="color: ${i <= card.rating ? '#FFD43B' : ''};"></i></p>`
                ).join('')}
            </div>
            <p class="review">${card.review}</p>`;
        document.querySelector(".feature-container").appendChild(div);
    });
}

function initApp() {
    // Local storage
    // localStorage.clear()
    loadFromLocalStorage()

    // Filter event
    searchbar.addEventListener('input', filterItems)

    // addReview
    addBtn.addEventListener('click', addReview)
}

initApp()