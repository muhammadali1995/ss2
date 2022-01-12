const PAGES = {
    SPLASH_PAGE: 'splash-page',
    LOGIN_PAGE: 'login-page',
    VERIFY_PAGE: 'verify',
    PIN_PAGE: 'pin-page',
    STOCK_PAGE: 'stock-page',
    CREATE_ACCOUNT: 'create',
    CREATE_PIN: 'create-pin',
    TYPE_PAGE: 'adress-type',
    ADRESS: 'adress',
    PICK_PAGE: 'pick',
    TERM_PAGE: 'term'
}

const { LOGIN_PAGE, SPLASH_PAGE, VERIFY_PAGE, PIN_PAGE, STOCK_PAGE, CREATE_ACCOUNT, CREATE_PIN, TYPE_PAGE, ADRESS, PICK_PAGE, TERM_PAGE } = PAGES;

var currentPage = SPLASH_PAGE;

window.onload = () => {
    setTimeout(() => {
        changePage(LOGIN_PAGE)
    }, 500)


    const loginCont = document.querySelector('.login-cont')
    const verifyCont = document.querySelector('.verify-cont')
    const pinCont = document.querySelector('.pin-cont')
    const stockCont = document.querySelector('.stock-cont')
    const accountCont = document.querySelector('.account-cont')
    const adressCont = document.querySelector('#next')
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
    loginCont.addEventListener('click', () => {
        changePage(VERIFY_PAGE)
    })

    verifyCont.addEventListener('click', () => {
        if (verifyCont.ariaDisabled == 'false') {
            changePage(PIN_PAGE)
        }
    })
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