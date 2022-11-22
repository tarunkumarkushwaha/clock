const myclock = () => {
  let t = new Date()
  let h = t.getHours()
  let m = t.getMinutes()
  let s = t.getSeconds()
  ghari.innerHTML = " Hamar ghari  " + h + ":" + m + ":" + s
}
  setInterval(myclock, 1000)
