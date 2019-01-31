const xArray = [100, 200, 400, 800, 1600, 3200, 6400];
const yArray = ["2.8", "4", "5.6", "8", "11", "16", "22"];

// get range objects
var xDimension = document.getElementById("x-dimension");
var yDimension = document.getElementById("y-dimension");
var zDimension = document.getElementById("z-dimension");

// get display objects
var xDisplay = document.getElementById("currentX");
var yDisplay = document.getElementById("currentY");
var zDisplay = document.getElementById("currentZ");
var newUrl = document.getElementById("newUrl");

// get image box
var imageBox = document.getElementById("image");

// create default settings
var kittyX = 300;
var kittyY = 250;
var kittyUrl = "http://placekitten.com/g/" + kittyX + "/" + kittyY;
newUrl.innerHTML = kittyUrl;

// set x and y displays to default.
var xValue = xDimension.value;
xDisplay.innerHTML = "X: " + xValue;
var yValue = yDimension.value;
yDisplay.innerHTML = "Y: " + yValue;
var zValue = zDimension.value;
zDisplay.innerHTML = "Z: " + zValue;
var zOpacity = 1;

// when x range changes, change the display and the kitty x dimension.
xDimension.addEventListener("change", function () {
    xValue = xDimension.value;
    // check value is an int between 0 and 7 otherwise hack attempt
    xDisplay.innerHTML = "X: " + xValue;
    kittyX += xValue * 10;
    changeImage(kittyUrl);
});

yDimension.addEventListener("change", function () {
    yValue = yDimension.value;
    // check value is an int between 0 and 7 otherwise hack attempt
    yDisplay.innerHTML = "Y: " + yValue;
    kittyY += yValue * 10;
    changeImage(kittyUrl);
});

zDimension.addEventListener("change", function () {
    var zDim = zDimension.value;
    // check value is an int between 0 and 7 otherwise hack attempt
    zOpacity = zDim / 10;
    zDisplay.innerHTML = "Z: " + zOpacity;
    changeImage(kittyUrl);
});

function changeImage() {
    kittyUrl = "http://placekitten.com/g/" + kittyX + "/" + kittyY;
    newUrl.innerHTML = kittyUrl;
    imageBox.style.backgroundImage = "url('" + kittyUrl + "')";
    imageBox.style.opacity = zOpacity;
}