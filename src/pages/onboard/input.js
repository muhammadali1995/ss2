const inputElements = [...document.querySelectorAll('input.code-input')]

inputElements.forEach((ele, index) => {
    ele.addEventListener('keydown', (e) => {
        e.target.style.backgroundColor = '#2B64F5'
        e.target.style.color = 'white';
        if (e.keyCode === 8 && e.target.value === '') {
            inputElements[Math.max(0, index - 1)].focus()
            e.target.style.backgroundColor = 'white'
        }
    })
    ele.addEventListener('input', (e) => {
        const [first, ...rest] = e.target.value
        if (index !== inputElements.length - 1 && first !== undefined) {
            inputElements[index + 1].focus()
            inputElements[index + 1].value = rest.join('')
            inputElements[index + 1].dispatchEvent(new Event('input'))
        }
    })
})


function onSubmit(e) {
    e.preventDefault()
    const code = [...document.getElementsByClassName('input')]
        .filter(({ name }) => name)
        .map(({ value }) => value)
        .join('')
}

const textInputs = Array.from(document.querySelectorAll('.textInput'))
textInputs.forEach(inp => {
    inp.addEventListener('keyup', () => {
        if (hasAllValue(textInputs)) {
            const btn = document.querySelector('.account-cont')
            btn.disabled = false
            btn.className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
        } else {
            if (inp.value != '') {
                inp.className = 'border border-2 text border-blue-700 mt-4 px-6 py-4 rounded-2xl w-full outline-none'
                document.getElementById('next3').className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker opacity-50 mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
            } else {
                inp.className = 'border border-2 text border-black mt-4 px-6 py-4 rounded-2xl w-full outline-none'
                document.getElementById('next3').className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker opacity-50 mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
            }
            document.getElementById('next3').className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker opacity-50 mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
        }
    })
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