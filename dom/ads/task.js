// // Превый вариант, без атрибутов
// const messages = document.querySelectorAll('.rotator__case');
// let currentIndex = 0;

// function activateNextMessage() {
//   const message = messages[currentIndex];
  
//   message.classList.add('rotator__case_active');
  
//   setTimeout(() => {
//     message.classList.remove('rotator__case_active');
//   }, 1000);
  
//   currentIndex++;
//   if (currentIndex >= messages.length) {
//     currentIndex = 0;
//   }
// }
// // Первый запуск сразу
// activateNextMessage();
// // Последующие запуски каждую секунду
// const messagesIntervalId = setInterval(activateNextMessage, 1000);



// Второй вариант, оптимизированный, без задержки в начале и с применением атрибутов
const messages = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function activateNextMessage() {
  messages.forEach(message => message.classList.remove('rotator__case_active'));
  const currentMessage = messages[currentIndex];
  const speed = parseInt(currentMessage.dataset.speed) || 1000; 

  currentMessage.classList.add('rotator__case_active');
  currentMessage.style.color = currentMessage.dataset.color;
  
  // Переключаемся на следующее сообщение через указанное время
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % messages.length; // Зацикливаем индекс
    activateNextMessage(); 
  }, speed);
}

activateNextMessage();
const messagesIntervalId = setInterval(activateNextMessage, speed);
