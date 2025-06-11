function updateclock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getseconds().toString().padStart(2, "0");
  let updatestring = hours + ":" + minutes + ":" + seconds;

  document.getElementsByClassName("clockbox").innertext = updatestring;
}

updateclock();
setInterval(updatestring, 1000);
