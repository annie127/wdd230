const todaysDate = Date.now();
const millis = 8640000;
const prevDate = localStorage.getItem('lastVisit');

daysBetweenVisits = Math.floor((todaysDate - prevDate) / millis);

let messageDays;
if (daysBetweenVisits >= 1) {
    messageDays = `Welcome back. It has been ${daysBetweenVisits} day(s) since your last visit.`;
}
else {
    messageDays = "Welcome. This is your first visit. Enjoy our gallery!"
}

document.getElementById("visits").innerHTML = messageDays;

localStorage.setItem('lastVisit', todaysDate);


