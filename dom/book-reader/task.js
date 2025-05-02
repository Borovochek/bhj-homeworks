const bookControls = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

bookControls.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const fontSize = item.dataset.size;
        bookControls.forEach(el => el.classList.remove('font-size_active'));
        item.classList.add('font-size_active');

        book.classList.remove('font-size_small', 'font-size_big');
        if (fontSize === 'small') {
            book.classList.add('font-size_small');
        } else if (fontSize === 'big') {
            book.classList.add('font-size_big');
        }
    })
})

const textColorsBlock = document.querySelector('.book__control_color');
const textColors = textColorsBlock.querySelectorAll('.color');

textColors.forEach(color => {
    color.addEventListener('click', (e) => {
        e.preventDefault();
        const textColor = color.dataset.textColor;
        textColors.forEach(el => el.classList.remove('color_active'));
        color.classList.add('color_active');

        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

        if (textColor === 'black') {
            book.classList.add('book_color-black');
        } else if (textColor === 'gray') {
            book.classList.add('book_color-gray');
        } else if (textColor === 'whitesmoke') {
            book.classList.add('book_color-whitesmoke');
        }
    });
});

const bgColorsBlock = document.querySelector('.book__control_background');
const bgColors = bgColorsBlock.querySelectorAll('.color');

bgColors.forEach(color => {
    color.addEventListener('click', (e) => {
        e.preventDefault();
        const bgColor = color.dataset.bgColor;
        bgColors.forEach(el => el.classList.remove('color_active'));
        color.classList.add('color_active');

        book.classList.remove('bg_color_black', 'bg_color_gray', 'bg_color_white');

        if (bgColor === 'black') {
            book.classList.add('bg_color_');
        } else if (bgColor === 'gray') {
            book.classList.add('bg_color_gray');
        } else if (bgColor === 'white') {
            book.classList.add('bg_color_white');
        }
    });
});