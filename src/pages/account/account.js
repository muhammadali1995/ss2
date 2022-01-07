const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        input.classList.add('inp')
    })
});