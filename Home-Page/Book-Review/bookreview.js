// copying email/number when clicking on button

const emailButton1 = document.querySelector("#email1-btn")
const emailButton2 = document.querySelector("#email2-btn")
const numberButton = document.querySelector("#number-btn")

function copyEmail1() {
    // AI helped for this part
    navigator.clipboard.writeText(emailButton1.textContent)
    .then(() => {
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

const addBtn = document.querySelector(".addReview")
const bookTitle = document.querySelector(".review-book-title")
const bookAuthor = document.querySelector(".review-author")
// const bookRating = document.querySelector(".rating")
const bookReview = document.querySelector(".review-paragraph")

function addReview() {
    const newTitle = bookTitle.value.trim()
    const newAuthor = bookAuthor.value.trim()
    // const newRating = bookRating.value.trim()
    const newReview = bookReview.value.trim()

    if (newTitle === "") {
        alert("Please enter a book title!")
        return
    }
    else if (newAuthor === "") {
        alert("Please enter your book's author!")
        return
    }
    // else if (newRating === "") {
    //     alert("Please enter your rating!")
    //     return
    // }
    else if (newReview === "") {
        alert("Please enter your book review!")
        return
    }
    else {
        const div = document.createElement("div")
        div.classList.add("feature-card")
        div.innerHTML =
            `<h1 class="book-title">${newTitle}</h1>
            <h2 class="author">${newAuthor}</h2>
            <div class="star">
                <p class="rating"><i class="fa-regular fa-star""></i></p>
                <p class="rating"><i class="fa-regular fa-star""></i></p>
                <p class="rating"><i class="fa-regular fa-star""></i></p>
                <p class="rating"><i class="fa-regular fa-star""></i></p>
                <p class="rating"><i class="fa-regular fa-star""></i></p>
            </div>
            <p class="review">${newReview}</p>`
            document.querySelector(".feature-container").appendChild(div)
    }
}

function initApp() {
    // Filter event
    searchbar.addEventListener('input', filterItems)

    // addReview
    addBtn.addEventListener('click', addReview)
}

initApp()