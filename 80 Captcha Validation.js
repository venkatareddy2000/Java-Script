let captchaText = document.getElementById("captchaText")
let captchaEnter = document.getElementById("captchaEnter")
let refreshButton = document.getElementById("refreshButton")
let checkButton = document.getElementById("checkButton")

let characters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

function generateCaptcha() {
    let captcha = ""
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * characters.length)
        captcha = captcha + characters[index]
    }
    captchaText.value = captcha
}
function validateCaptcha() {
    let captcha = captchaText.value
    let enteredCaptcha = captchaEnter.value
    if (captcha === enteredCaptcha) {
        alert("Valid captcha")
    } else {
        alert("Invalid captcha")
        captchaEnter.value = ""
        generateCaptcha()
    }
}
generateCaptcha()

refreshButton.onclick = generateCaptcha
checkButton.onclick = validateCaptcha
