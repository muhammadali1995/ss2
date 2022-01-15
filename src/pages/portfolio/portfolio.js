const PORTFOLIO_PAGE = 'portfolio'
const FEED_PAGE = 'feedPage'
const PROFILE_PAGE = 'profile'

const portfolioNextBtn = document.querySelectorAll('.portfolioNextBtn')
const feedNextBtn = document.querySelectorAll('.feedNextBtn')
const profileNextBtns = document.querySelectorAll('.profileNextBtn')
portfolioNextBtn.forEach(element => {
    element.addEventListener('click', () => {
        changePage(PORTFOLIO_PAGE)
    })
})
feedNextBtn.forEach(element => {
    element.addEventListener('click', () => {
        changePage(FEED_PAGE)
    })
})
profileNextBtns.forEach(element => {
    element.addEventListener('click', () => {
        changePage(PROFILE_PAGE)
    })
})

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

const tousTab = document.getElementById('tousTab')
const tousBtn = document.getElementById('tousBtn')
const attenteTab = document.getElementById('attenteTab')
const attenteBtn = document.getElementById('attenteBtn')
const tabsBtn = document.querySelectorAll('.tabsBtn')

tousBtn.addEventListener('click', () => {
    tousTab.classList.remove('hidden')
    attenteTab.classList.add('hidden')
    tousBtn.classList.add('bg-blue-normal', 'text-white')
    attenteBtn.classList.remove('bg-blue-normal', 'text-white')
    tousBtn.classList.remove('text-gray-600')
})

attenteBtn.addEventListener('click', () => {
    tousTab.classList.add('hidden')
    attenteTab.classList.remove('hidden')
    tousBtn.classList.remove('bg-blue-normal', 'text-white')
    attenteBtn.classList.add('bg-blue-normal', 'text-white')
    attenteBtn.classList.remove('text-gray-600')
})

const upScroll = document.querySelector('#upScroll')
document.addEventListener('scroll', () => {
    upScroll.style.minHeight = '375px'
    upScroll.style.maxHeight = '375x'
})

// PROFILE
const profileMainPage = document.getElementById('mainPage')
const abonentsPage = document.getElementById('abonents')
const abonentNextBtn = document.getElementById('abonentNextBtn')
const abonentPrevBtn = document.getElementById('abonentPrevBtn')

abonentNextBtn.addEventListener('click', () => {
    profileMainPage.classList.add('hidden')
    abonentsPage.classList.remove('hidden')
})

abonentPrevBtn.addEventListener('click', () => {
    profileMainPage.classList.remove('hidden')
    abonentsPage.classList.add('hidden')
})

const followBtns = document.querySelectorAll('.follow')
followBtns.forEach(followBtn => {
    followBtn.addEventListener('click', () => {
        if (followBtn.innerText == 'Se désabonner') {
            followBtn.innerText = 'S’abonner'
        } else {
            followBtn.innerText = 'Se désabonner'
        }
    })
})

const personalInfInputs = document.querySelectorAll('.personalInfInput')
personalInfInputs.forEach(personalInfInput => {
    personalInfInput.addEventListener('focus', () => {
        personalInfInput.classList.add('border-blue-normal', 'text-blue-normal')
        personalInfInput.style.borderColor = 'red!important'
    })
})

const personalInfBtn = document.getElementById('personalInfBtn')
const personalInformationPage = document.getElementById('personalInformation')
const personalPrevBtn = document.getElementById('personalPrevBtn')

personalInfBtn.addEventListener('click', () => {
    profileMainPage.classList.add('hidden')
    personalInformationPage.classList.remove('hidden')
})

personalPrevBtn.addEventListener('click', () => {
    profileMainPage.classList.remove('hidden')
    personalInformationPage.classList.add('hidden')
})