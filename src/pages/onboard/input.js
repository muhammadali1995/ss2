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
    console.log(code)
}

const textInputs = document.querySelectorAll('.text')
textInputs.forEach(inp => {
    inp.addEventListener('keyup', () => {
        if ((textInputs[0].value != '') && (textInputs[1].value != '') && (textInputs[2].value != '') && (textInputs[3].value != '') && (textInputs[4].value != '')) {
            const btn = document.getElementById('next3')
            btn.disabled = false
            btn.className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker mt-60 py-3 rounded-full sticky text-white to-blue-lighter w-full'
        } else {
            document.getElementById('next3').className = 'bg-gradient-to-r bottom-2 font-extrabold from-blue-darker mt-60 py-3 rounded-full sticky text-white to-blue-lighter w-full opacity-50'
        }
        if (inp.value != '') {
            inp.className = 'border border-2 text border-blue-700 mt-4 px-6 py-4 rounded-2xl w-full outline-none'
        } else {
            inp.className = 'border border-2 text border-black mt-4 px-6 py-4 rounded-2xl w-full outline-none'
        }
    })
})