
const SPLASH_PAGE = 'splash-page';
const LOGIN_PAGE = 'login-page';
const VERIFY_PAGE = 'verify';
const PIN_PAGE = 'pin-page';
const STOCK_PAGE = 'stock-page';
const CREATE_ACCOUNT = 'create';
const CREATE_PIN = 'create-pin';
const TYPE_PAGE = 'adress-type';
const ADRESS = 'adress';
const PICK_PAGE = 'pick';
const TERM_PAGE = 'term';

var currentPage = SPLASH_PAGE;

const navigationNextMap = {
    'login-btn': VERIFY_PAGE,
    'verify-btn': PIN_PAGE
}

window.onload = () => {

    setTimeout(() => {
        changePage(LOGIN_PAGE)
    }, 500)

    const nextBtns = document.getElementsByClassName('next-btn');
    Array.from(nextBtns).forEach(nextBtn => {
        nextBtn.addEventListener('click', (event) => {
            const id = event.target.id;
            changePage(navigationNextMap[id])
        })
    })

    const pinCont = document.querySelector('.pin-cont')
    const stockCont = document.querySelector('.stock-cont')
    const accountCont = document.querySelector('.account-cont')
    const adressCont = document.querySelector('#address-cont-btn')
    const typeCont = document.querySelector('.type-con')
    const pickCont = document.querySelector('.pick-con')
    const pinPrev = document.querySelector('.pin-prev')
    const stockPrev = document.querySelector('.stock-prev')
    const accountPrev = document.querySelector('.account-prev')
    const createPinPrev = document.querySelector('.crpin-prev')
    const adressPrev = document.querySelector('.adress-pre')
    const typePrev = document.querySelector('.type-prev')
    const pickPrev = document.querySelector('.pick-prev')
    const termPrev = document.querySelector('.term-prev')

    pinCont.addEventListener('click', () => {
        if (pinCont.ariaDisabled == 'false') {
            changePage(STOCK_PAGE)
        }
    })
    stockCont.addEventListener('click', () => {
        changePage(CREATE_ACCOUNT)
    })


    accountCont.addEventListener('click', () => {
        if (accountCont.disabled == false) {
            changePage(CREATE_PIN)
        }
    })
    adressCont.addEventListener('click', () => {
        if (adressCont.disabled == false) {
            changePage(TYPE_PAGE)
        }
    })
    typeCont.addEventListener('click', () => {
        changePage(PICK_PAGE)
    })
    pickCont.addEventListener('click', () => {
        changePage(TERM_PAGE)
    })
    pinPrev.addEventListener('click', () => {
        changePage(VERIFY_PAGE)
    })

    stockPrev.addEventListener('click', () => {
        changePage(PIN_PAGE)
    })
    createPinPrev.addEventListener('click', () => {
        changePage(CREATE_ACCOUNT)
    })
    accountPrev.addEventListener('click', () => {
        changePage(STOCK_PAGE)
    })
    adressPrev.addEventListener('click', () => {
        changePage(CREATE_PIN)
    })
    typePrev.addEventListener('click', () => {
        changePage(ADRESS)
    })
    pickPrev.addEventListener('click', () => {
        changePage(TYPE_PAGE)
    })
    termPrev.addEventListener('click', () => {
        changePage(PICK_PAGE)
    })
}

function changePage(page) {
    hidePages();
    showPage(page)
}

function hidePages() {
    const pages = document.querySelectorAll('.ss-page');
    Array.from(pages).forEach(element => {
        if (!element.classList.contains('hidden')) element.classList.add('hidden')
    });
}

function showPage(pageId) {
    const currPage = document.getElementById(pageId);
    currPage.classList.remove('hidden');
}


//  LOGIN SWIPER
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
