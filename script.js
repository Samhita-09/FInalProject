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
    // AI helped for this part
    navigator.clipboard.writeText(emailButton2.textContent)
    .then(() => {
        emailButton2.textContent = "Copied!"
    })

    // This was done on our own
    setTimeout(() => {
        emailButton2.textContent = "julzag28@bergen.org"
    }, 2000)
}
