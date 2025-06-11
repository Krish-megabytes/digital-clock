window.onload = function(){
function updateclock() {
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, "0");
        let minutes = now.getMinutes().toString().padStart(2, "0");
        let seconds = now.getSeconds().toString().padStart(2, "0");
        let updatestring = hours + ":" + minutes + ":" + seconds;

        document.getElementsByClassName("clockbox")[0].innerText = updatestring;
      }

      updateclock();
      setInterval(updateclock, 1000);
};
