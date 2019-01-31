// TODO: value testing for number does not work...
// TODO: change start and end values in html for each slider as wrong.
// TODO: wider container div as value not on same line as slider.
// TODO: make cat image central.
// TODO: maybe style the sliders if possible as they're pretty ugly!

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

var newUrl = document.getElementById("newUrl");

// get image box
var imageBox = document.getElementById("image");

// create default settings
var aperture = 300;
var shutter = 250;
var iso = 100;
var imageUrl = "http://placekitten.com/g/" + aperture + "/" + shutter;
newUrl.innerHTML = imageUrl;

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
    var apertureValue = -1;

    // check value is an int between 0 and 7 otherwise hack attempt
    if (typeof aValue !== 'number' || aValue < 0 || aValue > 7) {
        apertureValue = 0;
    }
    else {
        apertureValue = getValue(apertureArray, aValue);
    }

    aDisplay.innerHTML = "F-stop (aperture): " + apertureValue;
    aperture = apertureValue;
    changeImage(imageUrl);

});

sDimension.addEventListener("change", function () {

    sValue = sDimension.value;
    var shutterValue = -1;

    // check value is an int between 0 and 7 otherwise hack attempt
    if (typeof sValue !== 'number' || sValue < 0 || sValue > 7) {
        shutterValue = "000";
    }
    else {
        console.log(sValue);
        shutterValue = getValue(shutterArray, aValue);
        console.log(shutterValue)
    }

    sDisplay.innerHTML = "Shutter speed: " + shutterValue;
    shutter = shutterValue;
    changeImage(imageUrl);

});

iDimension.addEventListener("change", function () {

    iValue = iDimension.value;
    var isoValue = -1;

    // check value is an int between 0 and 7 otherwise hack attempt
    if (typeof iValue !== 'number' || iValue < 0 || iValue > 7) {
        isoValue = 0;
    }
    else {
        isoValue = getValue(isoArray, aValue);
    }

    iDisplay.innerHTML = "ISO: " + isoValue;
    iso = isoValue;
    changeImage(imageUrl);

});

function changeImage() {

    //kittyUrl = "http://placekitten.com/g/" + kittyX + "/" + kittyY;
    newUrl.innerHTML = imageUrl;
    imageBox.style.backgroundImage = "url('" + imageUrl + "')";

}

function getValue(array, index) {
    console.log("In getArray function");
    console.log(array);
    console.log(index);
    console.log(array[index]);
    return array[index];
}