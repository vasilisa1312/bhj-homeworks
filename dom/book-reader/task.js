const fontSize = document.querySelectorAll('.font-size');
fontSize.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const book = document.querySelector('.book');
        fontSize.forEach(item => item.classList.remove('font-size_active'));
        item.classList.add('font-size_active');
        if (item.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        } else if (item.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big'); 
        } else {
            book.classList.remove('book_fs-small','book_fs-big'); 
        }
    })
})