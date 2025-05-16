const loader = document.querySelector('.loader_active');
const items = document.querySelector('#items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        loader.style.display = 'none';
        const allValute = Object.values(data.response.Valute).map(valute => valute);

        Object.values(allValute).forEach((Valute) => {
            console.log(Valute);
              items.insertAdjacentHTML(
                'beforeend',
                `<div class="item">
                    <div class="item__code">
                        ${Valute.CharCode}
                    </div>
                    <div class="item__value">
                          ${Valute.Value}
                    </div>
                    <div class="item__currency">
                         руб.
                    </div>
                </div>`
            );
        })
    }
};

xhr.send();







// данном примере в *.item__code* нужно подгрузить значение свойства *CharCode*,
// в *.item__value* - *Value*

// ### Процесс реализации

// 1. Загрузите данные о курсе валют, отправив GET-запрос
// по адресу *https://students.netoservices.ru/nestjs-backend/slow-get-courses*
// 2. По факту загрузки скройте анимацию загрузки




//   // Используем данные как нужно:
//   if (data.users.length > 0) {
//     console.log("Пользователи:", data.users);
//   } else {
//     console.log("Нет данных");
//   }
// } else {
//   console.error('Ошибка:', xhr.status);
// }