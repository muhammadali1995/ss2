

const textInputs = Array.from(document.querySelectorAll('.textInput'))
const btnCont = document.querySelector('.account-cont')
const personalInf = []
textInputs.forEach(inp => {
    inp.addEventListener('keyup', () => {
        if (hasAllValue(textInputs)) {
            btnCont.disabled = false;
            btnCont.className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
        } else {
            if (inp.value != '') {
                inp.className = 'border border-2 text border-blue-700 mt-4 px-6 py-4 rounded-2xl w-full outline-none'
                btnCont.className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker opacity-50 mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
            } else {
                inp.className = 'border border-2 text border-black mt-4 px-6 py-4 rounded-2xl w-full outline-none'
                btnCont.className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker opacity-50 mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
            }
            btnCont.className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker opacity-50 mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
        }
    })
})


document.querySelector('.textInputs').addEventListener('keyup', (e) => {
    if (e.target.value != '') {
        e.target.className = 'border border-2 text border-blue-700 mt-4 px-6 py-4 rounded-2xl w-full outline-none'
    } else {
        e.target.className = 'border border-2 text border-blue-700 mt-4 px-6 py-4 rounded-2xl w-full outline-none opacity-50'
    }
})


function hasAllValue(arr) {
    return arr.every(input => (input.value != ''))
}

const passInput = document.querySelectorAll('.password')
const next = document.querySelector('.pin-cont')
next.addEventListener('click', () => {
    if ((passInput[0].value != '') && (passInput[1].value != '') && (passInput[2].value != '') && (passInput[3].value != '')) {
        passInput.forEach(input => {
            input.style.border = '1px solid #2B64F5'
            input.style.backgroundColor = '#2B64F5'
            input.style.border = 'none'
            const p = document.getElementById('error2')
            p.textContent = ''
            next.ariaDisabled = false
        })
    } else {
        passInput.forEach(input => {
            if (input.value != '') {
                input.style.backgroundColor = '#EB5757'
            }
            next.ariaDisabled = true
            const p = document.getElementById('error2')
            p.textContent = 'Votre code est erroné'
            p.className = 'mt-6 text-red-500 text-center'
        })
    }
})

