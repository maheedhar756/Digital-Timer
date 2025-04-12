let is24Hour = true;


function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();                 // Getting the time
  
  let Am_Pm = '';

  if (!is24Hour) {
    Am_Pm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12;                       // converting the time
  }

  const displayTime = 
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0') +              // formatting the time
    Am_Pm;

  document.getElementById("clock").textContent = displayTime;           // displaying the time
}


setInterval(updateClock, 1000);                     // updating the time every second 
updateClock();


document.getElementById("toggleBtn").addEventListener("click", () => {
  is24Hour = !is24Hour;                                                 // switching the time between 12 and 24
  document.getElementById("toggleBtn").textContent =                    // hour clocks
    is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";               
  updateClock();                                                        
});
