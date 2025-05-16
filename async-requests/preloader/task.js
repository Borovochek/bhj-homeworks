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
