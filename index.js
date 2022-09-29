const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")


setTimeout(() => {
    modal.style.display = "block"
}, 2000);

declineBtn.addEventListener("mouseover", function(){
    document.getElementById("modal-choice-btns").classList.toggle("escape")
})

modalCloseBtn.addEventListener("click", function(){
    modal.style.display = "none"
})

consentForm.addEventListener("submit", function(e){
    e.preventDefault()

    const userData = new FormData(consentForm)
    const userName = userData.get("fullName")

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="./loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`

    setTimeout(() => {
        document.getElementById("upload-text").innerHTML = `
            Making the sale...
        `
    }, 2000)

    setTimeout(() => {
        document.getElementById("modified").innerHTML = `
            <h2>Thanks <span class="modal-display-name">${userName}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="./pirate.gif">
            </div>
        `
        modalCloseBtn.disabled = false
    }, 4000)
})