// Defining all variables used
let textFadeIn = document.getElementById("textFadeIn");
let textFadeUp = document.getElementById("textFadeUp");
let textDance = document.getElementById("textDance");
let textHeatUp = document.getElementById("textHeatUp");
let textColors1 = document.getElementById("textColors1");
let textColors2 = document.getElementById("textColors2");
let textColors3 = document.getElementById("textColors3");
let textColors4 = document.getElementById("textColors4");
let textColors5 = document.getElementById("textColors5");
let textColors6 = document.getElementById("textColors6");
let textColors7 = document.getElementById("textColors7");
let textColors = document.getElementsByClassName("textColors")[0];
let textCool1 = document.getElementById("textCool1");
let textCool2 = document.getElementById("textCool2");
let textCool3 = document.getElementById("textCool3");
let textBlowAway = document.getElementById("textBlowAway");
let bird = document.getElementById("bird");
let thickWinter1 = document.getElementById("thickWinter1");
let thickWinter2 = document.getElementById("thickWinter2");
let thickWinter3 = document.getElementById("thickWinter3");
let thickWinter4 = document.getElementById("thickWinter4");
let thickWinter5 = document.getElementById("thickWinter5");
let leaves = document.getElementsByClassName("leaves")[0];
let bees = document.getElementsByClassName("bees")[0];
let lastWinter = document.getElementById("lastWinter");
let ending1 = document.getElementById("ending1");
let ending2 = document.getElementById("ending2");
let ending3 = document.getElementById("ending3");
let ending4 = document.getElementById("ending4");
let ending5 = document.getElementById("ending5");

// Functions to remove and add html elements, so that the right text is shown at one at a time. With a timeout function, we can decide exactly when to delete and create text
setTimeout(function () {
  textFadeIn.remove();
  textFadeUp.remove();
  textDance.innerHTML =
    "♪ And I must dance, and I must sing.To see the beauty of the spring ♪";
}, 13000);

setTimeout(function () {
  bird.remove();
}, 25500);

setTimeout(function () {
  textDance.remove();
  textHeatUp.innerHTML =
    "The earth is warm, the sun's ablaze, It is a time of carefree days. And bees abuzz that chance to pass.";
  textColors1.innerHTML = "May see me snoozing in the grass. ";
  textColors2.innerHTML = "The leaves are ";
  textColors3.innerHTML = "yellow, ";
  textColors4.innerHTML = "red, ";
  textColors5.innerHTML = "and ";
  textColors6.innerHTML = "brown. ";
  textColors7.innerHTML = "A shower sprinkle softly down.";
}, 26000);

setTimeout(function () {
  leaves.remove();
}, 35000);

setTimeout(function () {
  textHeatUp.remove();
  textColors.remove();
  textCool1.innerHTML = "The air is fragrant, crisp, and ";
  textCool2.innerHTML = "cool, ";
  textCool3.innerHTML = "And once again I'm stuck in school.";
  textBlowAway.innerHTML =
    "The birds are gone, the world is white, The winds are wild, they chill and bite.";
  bees.remove();
}, 39000);

setTimeout(function () {
  textCool1.remove();
  textCool2.remove();
  textCool3.remove();
  textBlowAway.remove();
}, 52000);

setTimeout(function () {
  thickWinter1.innerHTML = "The ground is";
  thickWinter2.innerHTML = "thick";
  thickWinter3.innerHTML = "with slush and sleet, And I can";
  thickWinter4.innerHTML = "barely";
  thickWinter5.innerHTML = "feel my feet.";
  lastWinter.innerHTML =
    "The last is done, the next is here,The same as it is every year.";
}, 55000);

setTimeout(function () {
  ending1.innerHTML = "spring";
  ending2.innerHTML = "then sunshine";
  ending3.innerHTML = "autumn";
  ending4.innerHTML = "snow";
  ending5.innerHTML = "That is how each year must go.";
}, 60000);
