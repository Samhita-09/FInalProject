// const searchbar = document.querySelector(".form-input")
const buttons = document.querySelectorAll("button")
const selectDemo = document.querySelector("#item-input")

selectDemo.addEventListener("select", function(){
    const selectedText = this.value.substring(this.selectionStart, this.selectionEnd)
    buttons.textContent = `Selected Text: ${selectedText}`
})
selectDemo.addEventListener("copy", function(){
    buttons.textContent = "Text copied to the clipboard"
    setTimeout(() => {
        const selectedText = this.value.substring(this.selectionStart, this.selectionEnd)
        buttons.textContent = `Selected Text: ${selectedText}`
    }, 2000)
})