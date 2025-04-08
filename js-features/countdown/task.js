const toCustomTimeString = (seconds) => {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secondsPart = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secondsPart}`;
};
let timerStartValue = 59;
<<<<<<< HEAD
const timerElement = document.getElementById("timer"); 
=======
const timerElement = document.getElementById("timer");
>>>>>>> 5124386b12a27f68801cff06a7dc2025804200b4
const timerInterval = setInterval(() => {
    if (timerStartValue >= 0) {
       
        timerElement.textContent = toCustomTimeString(timerStartValue);
        timerStartValue--;
    }
    else {
        clearInterval(timerInterval); 
        alert("Вы победили в конкурсе!");
    }
}, 1000); 


