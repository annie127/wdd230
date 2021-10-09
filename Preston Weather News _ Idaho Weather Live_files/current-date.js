const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = d.getDate();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const year = d.getFullYear();
var currentDate = days[d.getDay()] + ',' + ' ' + date + ' ' + months[d.getMonth()] + ' ' + year;
document.getElementById("current-date").innerHTML = currentDate;

