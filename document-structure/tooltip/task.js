const hasTooltip = document.querySelectorAll('.has-tooltip');
const body = document.querySelector('body');

hasTooltip.forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        const currentTooltip = el.querySelector('.tooltip_active');

         document.querySelectorAll('.tooltip_active').forEach(tooltip => {
            if (tooltip !== currentTooltip) {
                tooltip.remove();
            }
        });

        if (currentTooltip) {
            currentTooltip.remove();
        } else {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip', 'tooltip_active');
            tooltip.textContent = el.getAttribute('title');

            body.appendChild(tooltip);

             const rect = el.getBoundingClientRect();
             tooltip.style.left = `${rect.left }px`;
             tooltip.style.top = `${rect.bottom}px`;
        }

    })
})

// ### Повышенный уровень сложности #2 - задание не совсем ясно, можно присвоить элементу дата-атрибут через tooltip.dataset.position = 'значение',
// и потом tooltip.style.left = tooltip.dataset.position, но не понятно какие именно значения и куда присваивать, подсказок много, 
// как и значений data-position.