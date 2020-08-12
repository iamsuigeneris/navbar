
function classToggle(){
    const items = document.querySelectorAll('.items')
    const lists = document.querySelectorAll('ul li')
    items.forEach( item => item.classList.toggle('show'))
    lists.forEach( list => list.classList.toggle('hide'))
}
const btn = document.querySelector('.btn')
btn.addEventListener('click',classToggle)




