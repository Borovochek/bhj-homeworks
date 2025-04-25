const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const listItems = document.querySelectorAll('.dropdown__item');


dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active')
});

listItems.forEach((item) => {
    const dropdownLink = item.querySelector('.dropdown__link');
    dropdownLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        dropdownValue.textContent = dropdownLink.textContent; 
        dropdownList.classList.remove('dropdown__list_active'); 
      });
    });
    
