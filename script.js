let container = document.querySelector('.container')
let openBtn = document.querySelector('form');
let myName = document.querySelector('#name');
let favColor = document.querySelector('#favColor');
let closeBtn = document.querySelector('#closeBtn');
let title = document.querySelector('.title')
let modal =  document.querySelector('.modal');



openBtn.addEventListener('submit', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
    let color = favColor.value;
    modal.style.display = 'block';
    modal.style.backgroundColor = color;
    modal.style.color = color;
    title.innerText = `Dear ${myName.value},`
    container.style.opacity = '0.2';
}

function closeModal() {
    modal.style.display = 'none';
    container.style.backgroundColor = '#fff';
    container.style.opacity = '1';
}

function outsideClick(e) {
    if(e.target == modal){
    modal.style.display = 'none';
    container.style.backgroundColor = '#fff';
    container.style.opacity = '1';
    }
}