var d = document.querySelector("#days");
var h = document.querySelector("#hours");
var m = document.querySelector("#minutes")
var s = document.querySelector("#seconds");
// function for calculating the comming newyear to estimate the remaing time for the newyear
function newYear(){
  var date = new Date().getFullYear();
  var futureYear = new Date(`January 1 ${date+1} 00:00:00`);
  var currentYear = new Date();
  var remaingYear = futureYear-currentYear;
  var days = Math.floor(remaingYear/1000/60/60/24);
  var hours = Math.floor((remaingYear/1000/60/60)%24);
  var minutes = Math.floor((remaingYear/1000/60)%60);
  var seconds = Math.floor((remaingYear/1000)%60);
  d.innerHTML = days<10?"0"+days:days;
  h.innerHTML = hours<10?"0"+hours:hours;
  m.innerHTML = minutes<10?"0"+minutes:minutes;
  s.innerHTML = seconds<10?"0"+seconds:seconds;
}
// to set the time interval for the function to call every 1 seconds
setInterval(newYear,1000);
