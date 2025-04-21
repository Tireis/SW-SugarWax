let accordion_items = document.querySelectorAll('.accordion .item');
let accordion_description = document.querySelectorAll('.accordion .item .description');

accordion_items.forEach(item => {
    item.addEventListener('click', function() { {
            accordion_description.forEach(item => {
                item.classList.add('hidden');
            });
            this.querySelector('.description').classList.remove('hidden');
        }
    });
})