let btn = document.getElementById('view-more-button');
let div = document.getElementById('more-work-list');

btn.addEventListener('click', () => {
    if(div.style.display === 'block'){
        div.style.display = 'none';
    }else{
        div.style.display = 'block';
    }
})