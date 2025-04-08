const toCustomTimeString = (seconds) => {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secondsPart = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secondsPart}`;
};
let timerStartValue = 3;
const timerElement = document.getElementById("timer");
const timerInterval = setInterval(() => {
    if (timerStartValue >= 0) {
       
        timerElement.textContent = toCustomTimeString(timerStartValue);
        timerStartValue--;
    }
    else {
        clearInterval(timerInterval); // останавливаем таймер
        alert("Вы победили в конкурсе!");
    }
}, 1000); // 1000 мс = 1 секунда


// if (timerStartValue === 0) 