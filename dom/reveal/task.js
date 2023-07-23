const reveal = document.querySelectorAll('.reveal');
window.addEventListener('scroll', function () {
    reveal.forEach((item) => {
        const revealTop = item.getBoundingClientRect().top;
        const revealBottom = item.getBoundingClientRect().bottom;
        if (revealTop > window.innerHeight || revealBottom < 0) {
            item.classList.remove('reveal_active');
        } else {
            item.classList.add('reveal_active');
        }
    })
})