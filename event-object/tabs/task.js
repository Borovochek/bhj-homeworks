const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');


tab.forEach((item, currentIndex) => {
    item.addEventListener('click', () => {
        tab.forEach(el => el.classList.remove('tab_active'));
        tabContent.forEach(el => el.classList.remove('tab__content_active'));

        item.classList.add('tab_active');
        tabContent[currentIndex].classList.add('tab__content_active');
    })
})