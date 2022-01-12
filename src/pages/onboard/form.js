// LOGIN PHONE NUMBER
const phoneNumber = document.getElementById('phoneNumber');


// VERIFY CODE
const inputElements = [...document.querySelectorAll('input.code-input')]
const verificationCode = []

//Input navigation logic
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
            
            verificationCode.push(ele.value)
            
            inputElements[index + 1].focus()
            inputElements[index + 1].value = rest.join('')
            inputElements[index + 1].dispatchEvent(new Event('input'))
        }
    })
})

const verifyBtn = document.querySelector('#verify-btn')
const verificationInputs = Array.from(document.getElementsByClassName('input'))
const errorText = document.getElementById('error')

// check if the user can navigate to the next page
verifyBtn.addEventListener('click', () => {
    if (hasAllValue(verificationInputs)) {
        verifyBtn.ariaDisabled = false
        errorText.textContent = ''
        verificationInputs.forEach(input => {
            input.classList.remove('red')
            if (input.value != '') {
                input.style.backgroundColor = '#2B64F5'
            }
        })

        //SUCCESS
        console.log(verificationCode);

    } else {
        verifyBtn.ariaDisabled = true
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

// ENTER PASSWORD NUMBER

const btns = document.querySelectorAll('.btn-num')
const pinClearBtn = document.getElementById('pin-clear-btn')
const pinCode = [];
const passwordInp = document.querySelectorAll('.password')
let currentIndexPassword = 0;

btns.forEach(btn => {

    btn.addEventListener('click', () => {
        if (document.getElementById('last-pin-input').value != '') {
            setTimeout(() => {

                // SUCCESS PASSWORD VALUE 
                console.log(pinCode)

                document.getElementById('stock-page').classList.remove('hidden')
                document.getElementById('pin-page').classList.add('hidden')
            }, 500)
        }

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

pinClearBtn.addEventListener('click', () => {
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


// PERSONAL INFO FORM
  const personalInfoForm = document.getElementById('formdata');

  personalInfoForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(personalInfoForm)
      const personalInformation = Object.fromEntries(data.entries())
      console.log(personalInformation);
  });


//ADDRESS
const searchInput =  document.querySelector('#selectInput');
const addressContBtn = document.getElementById('address-cont-btn')
const dropdown = document.getElementById('dropdown')
let adress = ''
searchInput.addEventListener('keyup', () => {
    if (searchInput.value != '') {
        addressContBtn.disabled = false
        searchInput.classList.add('rounded-t-2xl');
        dropdown.classList.remove('hidden');
        addressContBtn.classList.remove('opacity-50') 
    } else {
        searchInput.classList.add('rounded-2xl')
        dropdown.classList.add('hidden')
        addressContBtn.disabled = true
        addressContBtn.classList.add('opacity-50');
    }
})
addressContBtn.addEventListener('click', () => {
    //SUCCESS ADDRESS VALUE
    adress = searchInput.value

})


Array.from(document.querySelectorAll('.selectOption')).forEach(element => {
    element.addEventListener('click', () => {
        searchInput.value = element.textContent;
        searchInput.classList.add('rounded-2xl')
        dropdown.classList.add('hidden')
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

  const fullAdressForm = document.getElementById('adressForm')

  fullAdressForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const db = new FormData(fullAdressForm)
      const fullAdress = Object.fromEntries(db.entries())
      console.log(fullAdress)
  })