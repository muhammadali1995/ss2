const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    autoplay: {
        delay: 3000
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    scrollbar: false
})

const btn = document.querySelector('#btn')
const verifyInputs = Array.from(document.getElementsByClassName('input'))
const errorText = document.getElementById('error')
btn.addEventListener('click', () => {
    if (hasAllValue(verifyInputs)) {
        btn.ariaDisabled = false
        errorText.textContent = ''
        verifyInputs.forEach(input => {
            input.classList.remove('red')
            if (input.value != '') {
                input.style.backgroundColor = '#2B64F5'
            }
        })
    } else {
        btn.ariaDisabled = true
        errorText.textContent = 'Ce code n’est pas valide'
        errorText.className = 'mt-4 text-red-500'
        document.querySelectorAll('.input').forEach(input => {
            input.classList.add('red')
            if (input.value != '') {
                input.style.backgroundColor = '#EB5757'
            }
        })
    }
})

function hasAllValue(arr) {
    return arr.every(input => input.value != '')
}

const btns = document.querySelectorAll('.btn-num')
const del = document.getElementById('del')
const pinCode = [];
const passwordInp = document.querySelectorAll('.password')
let currentIndexPassword = 0;
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (document.getElementById('last').value != '') {
            setTimeout(() => {
                document.getElementById('stock-page').classList.remove('hidden')
                document.getElementById('pin-page').classList.add('hidden')
            }, 500)
        }
        pinCode.push(btn.textContent)
        if (currentIndexPassword > 3) return;
        if (currentIndexPassword != 3) {
            document.getElementById('inp').ariaDisabled = true
        }
        const code = btn.textContent;
        pinCode.push(code)
        passwordInp[currentIndexPassword].value = code;
        passwordInp[currentIndexPassword].style.backgroundColor = '#2B64F5'

        currentIndexPassword++;
    })
})

del.addEventListener('click', () => {
    if (currentIndexPassword > 3) return;
    if (currentIndexPassword > 0) {
        passwordInp[currentIndexPassword - 1].focus()
        passwordInp[currentIndexPassword - 1].value = '';
        passwordInp[currentIndexPassword - 1].style.backgroundColor = 'white'
        currentIndexPassword--
    }
})


// CREATE PIN 

const numberBtns = document.querySelectorAll('.btn-nums')
const clearBtn = document.getElementById('del2')
const codeValues = [];

const codeInputs = document.querySelectorAll('.in')
let currentInputIndex = 0;

const data = new FormData(document.getElementById('formdata'));
const value = Object.fromEntries(data.entries());
value.email = data.get("email");
numberBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (currentInputIndex > 3) return;
        if (currentInputIndex == 3) {
            setTimeout(() => {
                document.getElementById('adress').classList.remove('hidden')
                document.getElementById('create-pin').classList.add('hidden')
            }, 1000)
        }
        if (currentInputIndex != 3) {
            document.getElementById('inp').ariaDisabled = true
        }
        const code = btn.textContent;
        codeValues.push(code)
        codeInputs[currentInputIndex].focus()
        codeInputs[currentInputIndex].value = code;
        codeInputs[currentInputIndex].style.backgroundColor = '#2B64F5'

        currentInputIndex++;
    })
})

clearBtn.addEventListener('click', () => {

    if (currentInputIndex > 3) currentInputIndex = 3;
    codeInputs[currentInputIndex].value = ''
    codeInputs[currentInputIndex].style.backgroundColor = 'white'

    if (currentInputIndex > 0) {
        currentInputIndex--
    }

    if (codeValues.length > 0) {
        codeValues.length--
    }

})