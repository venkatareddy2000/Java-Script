let textElement = document.getElementById("text")
let voiceElement = document.getElementById("voiceList")
let speechButton = document.getElementById("speak")
let speechSynth = speechSynthesis

speechSynth.addEventListener("voiceschanged", loadvoices)

function loadvoices() {
    let voices = speechSynth.getVoices()
    for (voice of voices) {
        let option = document.createElement('option')
        option.value = voice.name
        option.innerText = `${voice.name} ${voice.lang}`
        voiceElement.append(option)
    }
}

speechButton.addEventListener("click", function () {
    if (textElement.value != "") {
        if (!speechSynth.speaking) {
            textToSpeech(textElement.value)
        }
    } else {
        alert("Enter some text")
    }
})

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text)
    for (let voice of speechSynth.getVoices()) {
        if (voice.name === voiceElement.value) {
            utterance.voice = voice
        }
    }
    speechSynth.speak(utterance)
}