var clock = document.getElementById('ghari');
const myclock = () => {
  let t = new Date();
  let h = (12 - (t.getHours()));
  let m = t.getMinutes();
  let s = t.getSeconds();
  let ampm = (t.getHours()) < 12 ? 'AM' : 'PM';
  if (h < 0) {
    h = h * -1;
  } else if (h == 00) {
    h = 12;
  } else {
    h = h;
  }
  clock.innerHTML = addZero(h) + ":" + addZero(m) + ":" + addZero(s) + " " + ampm;
}
const addZero = (time) => {
  return (time < 10) ? "0" + time : time;
}
setInterval(myclock, 1000)

// alarm feature

var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
sound.loop = true;
function hoursMenu() {

  var select = document.getElementById('alarmhrs');
  var hrs = 12

  for (i = 1; i <= hrs; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);

  }
}
hoursMenu();

function minMenu() {

  var select = document.getElementById('alarmmins');
  var min = 59;

  for (i = 0; i <= min; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
minMenu();

function secMenu() {

  var select = document.getElementById('alarmsecs');
  var sec = 59;

  for (i = 0; i <= sec; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
secMenu();


function alarmSet() {

  var hr = document.getElementById('alarmhrs');

  var min = document.getElementById('alarmmins');

  var sec = document.getElementById('alarmsecs');

  var ap = document.getElementById('ampm');


  var selectedHour = hr.options[hr.selectedIndex].value;
  var selectedMin = min.options[min.selectedIndex].value;
  var selectedSec = sec.options[sec.selectedIndex].value;
  var selectedAP = ap.options[ap.selectedIndex].value;

  var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
  console.log('alarmTime:' + alarmTime);
  document.getElementById('alarmhrs').disabled = true;
  document.getElementById('alarmmins').disabled = true;
  document.getElementById('alarmsecs').disabled = true;
  document.getElementById('ampm').disabled = true;


  //when alarmtime is equal to currenttime then play a sound
  // declared previously
var clock = document.getElementById('ghari');
  /*function to calcutate the current time 
  then compare it to the alarmtime and play a sound when they are equal
  */

  setInterval(function() {

    var t = new Date();

    var h = (12 - (t.getHours()));
    // var hours = date.getHours();

    var m = t.getMinutes();

    var s = t.getSeconds();

    var ampm = (t.getHours()) < 12 ? 'AM' : 'PM';


    //convert military time to standard time

    if (h < 0) {
      h = h * -1;
    } else if (h == 00) {
      h = 12;
    } else {
      h = h;
    } 
    var currentTime = clock.textContent = addZero(h) + ":" + addZero(m) + ":" + addZero(s) + "" + ampm;


    if (alarmTime == currentTime) {
      sound.play();
    }

  }, 1000);
  console.log('currentTime:' + currentTime);

}


function alarmClear() {

  document.getElementById('alarmhrs').disabled = false;
  document.getElementById('alarmmins').disabled = false;
  document.getElementById('alarmsecs').disabled = false;
  document.getElementById('ampm').disabled = false;
  sound.pause();
}
