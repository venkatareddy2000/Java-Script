let file = document.getElementById("file")
let preview = document.getElementById("image-preview")
file.onchange = function (event) {
    console.log(event)
    let src = URL.createObjectURL(event.target.files[0])
    preview.src = src
    document.querySelector("label").innerText = "Change Image"
}