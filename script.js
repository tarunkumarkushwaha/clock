let clock = document.getElementById('ghari');
let AMPM = document.getElementById('AMPM');
let day = document.getElementById('day');
const myclock = () => {
  let t = new Date();
  let d = t.getDate()
  let mn = t.getMonth()
  let y = t.getFullYear()
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
  clock.innerHTML = addZero(h) + ":" + addZero(m) + ":" + addZero(s) + " "
  AMPM.innerHTML = ampm
  day.innerHTML = d + " / " + (mn + 1) + " / " + y
}
const addZero = (time) => {
  return (time < 10) ? "0" + time : time;
}
setInterval(myclock, 1000)

// alarm feature
// it only works for current day
let sound = new Audio("https://cdn.pixabay.com/download/audio/2022/11/25/audio_fb45cd67b0.mp3?filename=kirby-alarm-clock-127079.mp3");
sound.loop = true;
const hoursMenu = () => {
  let select = document.getElementById('alarmhrs');
  let hrs = 12
  for (i = 1; i <= hrs; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
hoursMenu();
const minMenu = () => {
  let select = document.getElementById('alarmmins');
  let min = 59;
  for (i = 0; i <= min; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
minMenu();
const secMenu = () => {
  let select = document.getElementById('alarmsecs');
  let sec = 59;
  for (i = 0; i <= sec; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
secMenu();
const alarmSet = () => {
  let hr = document.getElementById('alarmhrs');
  let min = document.getElementById('alarmmins');
  let sec = document.getElementById('alarmsecs');
  let ap = document.getElementById('ampm');
  let selectedHour = hr.options[hr.selectedIndex].value;
  let selectedMin = min.options[min.selectedIndex].value;
  let selectedSec = sec.options[sec.selectedIndex].value;
  let selectedAP = ap.options[ap.selectedIndex].value;
  let alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
  console.log('alarmTime:' + alarmTime);
  document.getElementById('alarmhrs').disabled = true;
  document.getElementById('alarmmins').disabled = true;
  document.getElementById('alarmsecs').disabled = true;
  document.getElementById('ampm').disabled = true;
  setInterval(() => {
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
    let currentTime = addZero(h) + ":" + addZero(m) + ":" + addZero(s) + "" + ampm;
    if (alarmTime == currentTime) {
      sound.play();
    }
  }, 1000);
}
const alarmClear = () => {
  document.getElementById('alarmhrs').disabled = false;
  document.getElementById('alarmmins').disabled = false;
  document.getElementById('alarmsecs').disabled = false;
  document.getElementById('ampm').disabled = false;
  sound.pause();
}