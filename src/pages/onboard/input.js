const inputElements = [...document.querySelectorAll('input.code-input')]

const verifyCode = []

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
            verifyCode.push(ele.value)
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
const btnCont = document.querySelector('.account-cont')
const personalInf = []
textInputs.forEach(inp => {
    inp.addEventListener('keyup', () => {
        if (hasAllValue(textInputs)) {
            btnCont.disabled = false;
            btnCont.className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
        } else {
            if (inp.value != '') {
                inp.className = 'e'
                btnCont.className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker opacity-50 mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
            } else {
                inp.className = 'border border-2 text border-black mt-4 px-6 py-4 rounded-2xl w-full outline-none'
                btnCont.className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker opacity-50 mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
            }
            btnCont.className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker opacity-50 mt-12 py-3 rounded-full text-white to-blue-lighter w-full'
        }
    })
})

btnCont.addEventListener('click', () => {

    // textInputs.forEach(input => {
    //     personalInf.push(input.value)
    // })
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

const lastInput = document.getElementById('last')
lastInput

const searchInput = document.querySelector('.search')
const next5 = document.getElementById('next')
const dropdown = document.getElementById('dropdown')
let adress = ''
searchInput.addEventListener('keyup', () => {
    if (searchInput.value != '') {
        next5.disabled = false
        searchInput.className = 'search border border-blue-700 mt-4 px-4 py-3 rounded-t-2xl outline-none w-full'
        dropdown.classList.remove('hidden')
        next5.className = 'bg-gradient-to-r bottom-2 fixed font-extrabold from-blue-darker mt-12 next3  py-3 rounded-full text-white to-blue-lighter w-96'
    } else {
        searchInput.className = 'search border border-gray-400 mt-4 px-4 py-3 rounded-2xl outline-none w-full'
        dropdown.classList.add('hidden')
        next5.disabled = true
        next5.className = 'bg-gradient-to-r bottom-2 fixed font-extrabold from-blue-darker mt-12 next3 opacity-50 py-3 rounded-full text-white to-blue-lighter w-96'
    }
})
next5.addEventListener('click', () => {
    adress = searchInput.value
})
Array.from(document.querySelectorAll('.selectOption')).forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('#selectInput').value = element.textContent
    })
})

const searchInput2 = document.querySelectorAll('.search2')
const next6 = document.getElementById('next2')
const dropdown2 = document.getElementById('dropdown2')

searchInput2.forEach(inp => {
    inp.addEventListener('keyup', () => {
        if (inp.value != '') {
            inp.classList.add('blue')
        }
        if (inp.value == '') {
            inp.classList.remove('blue')
        }
        if ((searchInput2[0].value != '') && (searchInput2[1].value != '') && (searchInput2[2].value != '')) {
            next6.disabled = false
            next6.className = 'bg-gradient-to-r font-extrabold from-blue-darker mt-16 mx-auto  py-3 rounded-full text-white to-blue-lighter w-full'
        }
        if ((searchInput2[0].value == '') || (searchInput2[1].value == '') || (searchInput2[2].value == '')) {
            next6.disabled = true
            next6.className = 'bg-gradient-to-r font-extrabold from-blue-darker mt-16 mx-auto next3 opacity-50 py-3 rounded-full text-white to-blue-lighter w-full'
        }
    })
})

const phoneNumber = document.getElementById('phoneNumber')