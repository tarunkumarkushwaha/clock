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
  ghari.innerHTML = " Hamar ghari  " + addZero(h) + ":" + addZero(m) + ":" + addZero(s) + "" + ampm;
}
const addZero = (time) => {
  return (time < 10) ? "0" + time : time;
}
setInterval(myclock, 1000)



