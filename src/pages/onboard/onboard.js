const PAGES = {
    SPLASH_PAGE: 'splash-page',
    LOGIN_PAGE: 'login-page',
    VERIFY_PAGE: 'verify',
    PIN_PAGE: 'pin-page',
    STOCK_PAGE: 'stock-page',
    CREATE_ACCOUNT: 'create',
    CREATE_PIN: 'create-pin'
}

const { LOGIN_PAGE, SPLASH_PAGE, VERIFY_PAGE, PIN_PAGE, STOCK_PAGE, CREATE_ACCOUNT, CREATE_PIN } = PAGES;

var currentPage = SPLASH_PAGE;

window.onload = () => {
    setTimeout(() => {
        changePage(LOGIN_PAGE)
    }, 500)


    const btn1 = document.querySelector('.btn-cont1')
    const btn2 = document.querySelector('.btn2')
    const btn3 = document.getElementById('next')
    const btn4 = document.getElementById('next2')
    const btn5 = document.querySelector('.next3')
    const prev = document.getElementById('prev')
    const prev2 = document.getElementById('prev2')
    const prev3 = document.getElementById('prev3')
    const prev4 = document.getElementById('prev4')
    btn1.addEventListener('click', () => {
        changePage(VERIFY_PAGE)
    })
    prev.addEventListener('click', () => {
        changePage(VERIFY_PAGE)
    })
    btn2.addEventListener('click', () => {
        if (btn2.ariaDisabled == 'false') {
            changePage(PIN_PAGE)
        }
    })
    btn3.addEventListener('click', () => {
        if (btn3.disabled == 'false') {
            changePage(STOCK_PAGE)
        }
    })
    btn4.addEventListener('click', () => {
        changePage(CREATE_ACCOUNT)
    })
    btn5.addEventListener('click', () => {
        if (btn5.disabled == false) {
            changePage(CREATE_PIN)
        }
    })
    prev2.addEventListener('click', () => {
        changePage(PIN_PAGE)
    })
    prev3.addEventListener('click', () => {
        changePage(STOCK_PAGE)
    })
    prev4.addEventListener('click', () => {
        changePage(CREATE_ACCOUNT)
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