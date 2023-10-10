var imagePaths = [
    'scene-1-img.jpg',
    'scene-2.jpg',
    'scene-3.jpeg',
    'scenery-4.jpg',
    'scenery-5.jpeg'
];
  
function changeBackgroundImage() {
    var body = document.querySelector('.slide-show-random');
    var randomIndex = Math.floor(Math.random() * imagePaths.length);
    var imagePath = imagePaths[randomIndex];
    let mainImg = document.createElement('img');
    mainImg.className = 'data-image-main';
    mainImg.src = imagePath;
    body.appendChild(mainImg);

    // Set timeout to trigger the transition
    setTimeout(function() {
        mainImg.style.opacity = 1;
    }, 0);

    body.style.backgroundImage = "url('" + imagePath + "')";
} 

function startBackgroundChange() {
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 3000);
}

startBackgroundChange();
