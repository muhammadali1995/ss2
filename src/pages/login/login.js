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

const btn = document.getElementById('btn')
const latest = document.getElementsByClassName('input')
btn.addEventListener('click', () => {
    if ((latest[0].value != '') && (latest[1].value != '') && (latest[2].value != '') && (latest[3].value != '') && (latest[4].value != '') && (latest[5].value != '')) {
        btn.ariaDisabled = false
        document.querySelectorAll('.input').forEach(input => {
            const p = document.getElementById('error')
            p.textContent = ''
            document.querySelectorAll('.input').forEach(input => {
                input.classList.remove('red')
                if (input.value != '') {
                    input.style.backgroundColor = '#2B64F5'
                }
            })
        })
    } else {
        const p = document.getElementById('error')
        p.textContent = 'Ce code n’est pas valide'
        p.className = 'mt-4 text-red-500'
        document.querySelectorAll('.input').forEach(input => {
            input.classList.add('red')
            if (input.value != '') {
                input.style.backgroundColor = '#EB5757'
            }
        })
    }
})

const btns = document.querySelectorAll('.btn-num')
const inputElementss = document.querySelectorAll('.i')
const del = document.getElementById('del')
const array = [];
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        array.push(btn.textContent)
        const inps = document.querySelectorAll('.i')
        inps[0].focus()
        inps[0].value = array[0]
        inps[0].style.backgroundColor = '#2B64F5'
        if (array[1]) {
            inps[1].focus()
            inps[1].value = array[0]
            inps[1].style.backgroundColor = '#2B64F5'
        }
        if (array[2]) {
            inps[2].focus()
            inps[2].value = array[0]
            inps[2].style.backgroundColor = '#2B64F5'
        }
        if (array[3]) {
            inps[3].focus()
            inps[3].value = array[0]
            inps[3].style.backgroundColor = '#2B64F5'
        }
    })
})

del.addEventListener('click', () => {
    const inps = document.querySelectorAll('.i')
    array.length -= 1
    console.log(array)
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

const next = document.getElementById('next')
next.addEventListener('click', () => {
    const inps2 = document.querySelectorAll('.is')
    if ((inps2[0].value != '') && (inps2[1].value != '') && (inps2[2].value != '') && (inps2[3].value != '')) {
        const p = document.getElementById('error2')
        p.textContent = 'Votre code est erroné'
        p.className = 'mt-8 text-center text-red-500'
        inps2.forEach(inp => {
            inp.style.backgroundColor = '#EB5757'
            inp.style.border = 'none'
        })
    } else {
        const p = document.getElementById('error2')
        p.textContent = 'ss'
    }
})



const btns2 = document.querySelectorAll('.btn-nums')
const inputElementss2 = document.querySelectorAll('.in')
const del2 = document.getElementById('del2')
const array2 = [];
btns2.forEach(btn => {
    btn.addEventListener('click', () => {
        array2.push(btn.textContent)
        const inps = document.querySelectorAll('.in')
        inps[0].focus()
        inps[0].value = array[0]
        inps[0].style.backgroundColor = '#2B64F5'
        if (array2[1]) {
            inps[1].focus()
            inps[1].value = array[0]
            inps[1].style.backgroundColor = '#2B64F5'
        }
        if (array2[2]) {
            inps[2].focus()
            inps[2].value = array[0]
            inps[2].style.backgroundColor = '#2B64F5'
        }
        if (array2[3]) {
            inps[3].focus()
            inps[3].value = array[0]
            inps[3].style.backgroundColor = '#2B64F5'
        }
    })
})

del2.addEventListener('click', () => {
    const inps = document.querySelectorAll('.in')
    array2.length -= 1
    console.log(array2)
    inps[3].value = ''
    inps[3].style.backgroundColor = 'white'
    if (!array2[2]) {
        inps[2].value = ''
        inps[2].style.backgroundColor = 'white'
    }
    if (!array2[1]) {
        inps[1].focus()
        inps[1].value = ''
        inps[1].style.backgroundColor = 'white'
    }
    if (!array2[0]) {
        inps[0].focus()
        inps[0].value = ''
        inps[0].style.backgroundColor = 'white'
    }
})

const btns3 = document.querySelectorAll('.btn-nums3')
const inputElementss3 = document.querySelectorAll('.inpu')
const del3 = document.getElementById('del3')
const array3 = [];
btns3.forEach(btn => {
    btn.addEventListener('click', () => {
        array3.push(btn.textContent)
        const inps = document.querySelectorAll('.inpu')
        inps[0].focus()
        inps[0].value = array[0]
        inps[0].style.backgroundColor = '#2B64F5'
        if (array3[1]) {
            inps[1].focus()
            inps[1].value = array3[0]
            inps[1].style.backgroundColor = '#2B64F5'
        }
        if (array3[2]) {
            inps[2].focus()
            inps[2].value = array3[0]
            inps[2].style.backgroundColor = '#2B64F5'
        }
        if (array3[3]) {
            inps[3].focus()
            inps[3].value = array3[0]
            inps[3].style.backgroundColor = '#2B64F5'
        }
    })
})

del3.addEventListener('click', () => {
    const inps = document.querySelectorAll('.inpu')
    array3.length -= 1
    inps[3].value = ''
    inps[3].style.backgroundColor = 'white'
    if (!array3[2]) {
        inps[2].value = ''
        inps[2].style.backgroundColor = 'white'
    }
    if (!array3[1]) {
        inps[1].focus()
        inps[1].value = ''
        inps[1].style.backgroundColor = 'white'
    }
    if (!array3[0]) {
        inps[0].focus()
        inps[0].value = ''
        inps[0].style.backgroundColor = 'white'
    }
})