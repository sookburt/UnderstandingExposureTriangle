// TODO: change the float to use grid or flexbox.
// TODO: maybe style the sliders if possible as they're pretty ugly!
//https://css-tricks.com/value-bubbles-for-range-inputs/
// TODO: placekitten no longer works with the dimensions I need - time to create my own images.
// TODO: check that the slider will work in touch screen and style to allow fat-finger access.

const apertureArray = ["2.8", "4", "5.6", "8", "11", "16", "22"]; // x
const shutterArray = [2000, 1000, 500, 250, 125, 60, 30]; // y
const isoArray = [100, 200, 400, 800, 1600, 3200, 6400]; // z

// get range objects
var aDimension = document.getElementById("a-dimension");
var sDimension = document.getElementById("s-dimension");
var iDimension = document.getElementById("i-dimension");

// get display objects
var aDisplay = document.getElementById("currentA");
var sDisplay = document.getElementById("currentS");
var iDisplay = document.getElementById("currentI");

var newUrlDisplay = document.getElementById("newUrl");

// get image box
var imageBox = document.getElementById("image");

// create default settings
var aperture = 300;
var shutter = 250;
var iso = 100;
var imageUrl = "http://placekitten.com/g/" + aperture + "/" + shutter;
newUrlDisplay.innerHTML = imageUrl;

// set x and y displays to default.
var aValue = aDimension.value;
aDisplay.innerHTML = "F-stop (aperture): " + getValue(apertureArray, aValue);
var sValue = sDimension.value;
sDisplay.innerHTML = "Shutter speed: " + getValue(shutterArray, sValue);
var iValue = iDimension.value;
iDisplay.innerHTML = "ISO: " + getValue(isoArray, iValue);
//var zOpacity = 1;

// when x range changes, change the display and the kitty x dimension.
aDimension.addEventListener("change", function () {

    aValue = aDimension.value;
    console.log(aValue);
    var number = validateInput(aValue);

    console.log(number);
    var apertureValue = getValue(apertureArray, number);
    console.log(number)

    aDisplay.innerHTML = "F-stop (aperture): " + apertureValue;
    aperture = apertureValue;
    changeImage(imageUrl);

});

sDimension.addEventListener("change", function () {

    sValue = sDimension.value;

    var number = validateInput(sValue);

    console.log(number);
    var shutterValue = getValue(shutterArray, number);
    console.log(number)
  
    sDisplay.innerHTML = "Shutter speed: " + shutterValue;
    shutter = shutterValue;
    changeImage(imageUrl);

});

iDimension.addEventListener("change", function () {

    iValue = iDimension.value;

    var number = validateInput(iValue);

    console.log(number);
    var isoValue = getValue(isoArray, number);
    console.log(number)

    iDisplay.innerHTML = "ISO: " + isoValue;
    iso = isoValue;
    changeImage(imageUrl);

});

function changeImage() {

    imageUrl = "http://placekitten.com/g/" + aperture + "/" + shutter;
    newUrlDisplay.innerHTML = imageUrl;
    imageBox.style.backgroundImage = "url('" + imageUrl + "')";
}

// NOTE: returns 0 if fails validation
function validateInput(input) {

    var number = parseInt(input);
    
    if (isNaN(number) || number < 0 || number > 7) {
        return 0;
    }
    else {
        return number;
    }
}

function getValue(array, index) { 

    return array[index];
}