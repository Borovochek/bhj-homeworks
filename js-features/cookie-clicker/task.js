
const clickerElement = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeedValue = document.getElementById("clicker__speed__value");
let lastClickTime = 0;


clickerElement.addEventListener('click', function () {
    const currentTime = Date.now();
    const clickerStartValue = parseInt(clickerCounter.textContent);
    clickerCounter.textContent = clickerStartValue + 1;

    if (clickerStartValue % 2 === 0) {
        clickerElement.width = 300;
    }
    else {
        clickerElement.width = 200;
    }
    if (lastClickTime !== 0) {
        const timeDiff = (currentTime - lastClickTime) / 1000; // Разница в секундах
        clickerSpeedValue.textContent = (1 / timeDiff).toFixed(2); // Скорость в кликах/сек
    }
    lastClickTime = currentTime;

})
