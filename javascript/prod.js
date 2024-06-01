//Changing image position for the product part
const mainImage = document.querySelector('.main-image');
const smallImage = document.querySelectorAll('.small-image');

smallImage.forEach((smallImage, index) => {
    smallImage.onclick = function() {
        mainImage.src = smallImage.src;
    };
});