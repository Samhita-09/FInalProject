const emailButton1 = document.querySelector("#email1-btn")
const emailButton2 = document.querySelector("#email2-btn")
const numberButton = document.querySelector("#number-btn")

function copyEmail1() {
    // AI helped for this part
    navigator.clipboard.writeText(email)
    .then(() => {
        emailButton1.textContent = "Copied!"
    })

    // This was done on our own
    setTimeout(() => {
        emailButton1.textContent = "samkal28@bergen.org"
    }, 2000)
}

// function copyEmail2() {
//     navigator.clipboard.writeText(email)
//     .then(() => {
//         emailButton1.textContent = "Copied!"
//     })

//     setTimeout(() => {
//         emailButton2.textContent = "julzag28@bergen.org"
//     }, 2000)
// }

function copyNumber() {    
    setTimeout(() => {
        numberButton.textContent = "(551) 123-4567"
    }, 2000)
}