const interestCheckFood = Array.from(document.querySelectorAll('.interest__check'));
interestCheckFood.forEach((i) => {
    i.addEventListener('click', () => {
        let parent = i.closest('.interest');
        let childActive = parent.querySelector('.interests_active')
        let child = childActive.querySelectorAll('.interest__check');
    if (i.checked === true) {
        child.forEach((i) => {
            i.checked = true;
        })
    } else {
        child.forEach((i) => {
            i.checked = false;
        })
    }
})
})