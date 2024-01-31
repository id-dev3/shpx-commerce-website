window.onload = function(){
    const allItems = document.querySelectorAll('.items-container .items');
    const allLinks = document.querySelectorAll('.sort-items .items');
    const itemsContainer = document.querySelector('.items-container');

    for (let i = 0; i < allLinks.length; i++){
        allLinks[i].addEventListener('click', function(e){
            e.preventDefault();

            const category = this.textContent.toLowerCase();

            for (let j = 0; j < allLinks.length; j++){
                allLinks[j].style.opacity = '0.5';
            }
            this.style.opacity = '1';

            if (category === 'all'){
                itemsContainer.classList.remove('filtered');
            } else{
                itemsContainer.classList.add('filtered');
            }

            for (let k = 0; k < allItems.length; k++){
                const itemCategory = allItems[k].querySelector('h3').textContent.toLowerCase();
                if (category === 'all' || itemCategory.includes(category)){
                    allItems[k].style.display = 'flex';
                    allItems[k].style.animation = 'fadeIn 0.5s';
                } else if (category === 'chair' && (itemCategory.includes('pouf') || itemCategory.includes('molle') || itemCategory.includes('chair'))){
                    allItems[k].style.display = 'flex';
                    allItems[k].style.animation = 'fadeIn 0.5s';
                } else if (category === 'table' && (itemCategory.includes('cabinet'))){
                    allItems[k].style.display = 'flex';
                    allItems[k].style.animation = 'fadeIn 0.5s';
                } else{
                    allItems[k].style.display = 'none';
                }
            }
        });
    }
};
