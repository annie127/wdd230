const todaysDate = Date.now();
const millis = 8640000;
const lastVisit = localStorage.getItem('lastvisit');

daysBetweenVisits = (todaysDate - lastVisit) / millis;

let messageDays;
if (daysBetweenVisits >= 1) {
    messageDays = `Welcome back. It has been ${daysBetweenVisits.toFixed(0)} day(s) since your last visit.`;
}
else {
    messageDays = "Welcome. This is your first visit. Enjoy our gallery!"
}

document.getElementById("visits").innerHTML = messageDays;

localStorage.setItem('lastvisit', todaysDate);


