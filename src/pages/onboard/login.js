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
const inputElementss = document.querySelectorAll('.i')
const del = document.getElementById('del')
const array = [];
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        array.push(btn.textContent)
        const inps = document.querySelectorAll('.password')
        inps[0].focus()
        inps[0].value = array[0]
        inps[0].style.backgroundColor = '#2B64F5'
        if (array[1]) {
            inps[1].focus()
            inps[1].value = array[1]
            inps[1].style.backgroundColor = '#2B64F5'
        }
        if (array[2]) {
            inps[2].focus()
            inps[2].value = array[2]
            inps[2].style.color = '#2B64F5 !important'
            inps[2].style.backgroundColor = '#2B64F5'
        }
        if (array[3]) {
            inps[3].focus()
            inps[3].value = array[3]
            inps[3].style.backgroundColor = '#2B64F5'
        }
    })
})

del.addEventListener('click', () => {
    const inps = document.querySelectorAll('.password')
    array.length -= 1
    inps[3].value = ''
    inps[3].style.backgroundColor = 'white'
    if (!array[2]) {
        inps[2].value = ''
        inps[2].style.backgroundColor = 'white'
    }
    if (!array[1]) {
        inps[1].focus()
        inps[1].value = ''
        inps[1].style.backgroundColor = 'white'
    }
    if (!array[0]) {
        inps[0].focus()
        inps[0].value = ''
        inps[0].style.backgroundColor = 'white'
    }
})


// CREATE PIN 

const numberBtns = document.querySelectorAll('.btn-nums')
const clearBtn = document.getElementById('del2')
const codeValues = [];
const codeInputs = document.querySelectorAll('.in')
let currentInputIndex = 0;
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
        console.log(codeValues)
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


    console.log(codeValues)
})

// CREATE PIN