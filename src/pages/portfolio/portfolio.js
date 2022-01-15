const PORTFOLIO_PAGE = 'portfolio'
const FEED_PAGE = 'feedPage'

const portfolioNextBtn = document.querySelectorAll('.portfolioNextBtn')
const feedNextBtn = document.querySelector('.feedNextBtn')
portfolioNextBtn.forEach(element => {
    element.addEventListener('click', () => {
        changePage(PORTFOLIO_PAGE)
    })
})
feedNextBtn.addEventListener('click', () => {
    changePage(FEED_PAGE)
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