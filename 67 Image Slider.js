let images = ['Best-Nature-Full-HD-Images-For-Desktop.jpg', 'clouds-cloudy-countryside-236047.jpg', 'sea-dawn-nature-1188083.jpg', 'Wallpapers-pexels-photo.jpg'];
let image = document.getElementById('img');
let imageIndex = 1;
let leftArrow = document.querySelector('.left');
let rightArrow = document.querySelector('.right');

leftArrow.onclick = function () {
    imageIndex = imageIndex - 1;
    if (imageIndex == 0) {
        leftArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'block';
    }
    image.setAttribute('src', images[imageIndex]);
    if (imageIndex < images.length - 1) {
        rightArrow.style.display = 'block';
    }
};

rightArrow.onclick = function () {
    imageIndex = imageIndex + 1;
    if (imageIndex === images.length - 1) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'block';
    }
    image.setAttribute('src', images[imageIndex]);
    if (imageIndex > 0) {
        leftArrow.style.display = 'block';
    }
};
