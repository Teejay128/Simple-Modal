// Get modal element
let modal = document.querySelector('.modal')

// Get open modal button
let openBtn = document.querySelector('#submit')

// Get close modal button
let closeBtn = document.querySelector('#closeBtn')


// Listen for open click
openBtn.addEventListener('click', openModal)

// Listen for close click
closeBtn.addEventListener('click', closeModal)

// Listen for outside click
window.addEventListener('click', outsideClick)

// Function to open modal
function openModal() {
    modal.style.display = 'block'
    document.querySelector('.opaque').style.opacity = '0.2'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideClick(e) {
    if(e.target == modal){
    modal.style.display = 'none'
    }
}