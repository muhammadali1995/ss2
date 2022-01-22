const tradeTabsBtns = document.querySelectorAll('.tradeTabsBtn')
const tradeProposBtn = document.getElementById('tradeProposBtn')
const tradeNewsBtn = document.getElementById('tradeNewsBtn')
const tradeAttenteBtn = document.getElementById('tradeAttenteBtn')
const tradeAddLiked = document.getElementById('tradeAddLiked')
const fixedBtn = document.getElementById('fixedBtn')
const tradePageNextBtn = document.getElementById('tradePageNextBtn')
const tradeAttentePage = 'tradeAttentePage'
const tradeNewsPage = 'tradeNewsPage'
const tradeProposPage = 'tradeProposPage'
const tradeMainPage = 'tradeMainPage'
const sellAsset = 'sellAsset'
const trandingPage = 'trandingPage'
const sellAsset2 = 'sellAsset2'
const tradeCategoryPage = 'tradeCategoryPage'
const tradeNextBtn = document.getElementById('tradeNextBtn')
const fixedFooter = document.getElementById('fixedFooter')
const sellAssetNextBtn = document.getElementById('sellAssetNextBtn')
const tradingPrevBtn = document.getElementById('tradingPrevBtn')
const sellAsset2PrevBtn = document.getElementById('sellAsset2PrevBtn')
const pages = document.getElementsByClassName('ss-page')
const sellSelectBtn = document.querySelectorAll('.sellSelectBtn')
const sellPrevBtn = document.getElementById('sellPrevBtn')
const sellAsset2NextBtn = document.getElementById('sellAsset2NextBtn')


function showPage(page) {
    hidePages()
    showPages(page)
}

function hidePages() {
    Array.from(pages).forEach(element => {
        element.classList.add('hidden')
    });
}

function showPages(pageId) {
    const currPage = document.getElementById(pageId);
    currPage.classList.remove('hidden');
}


function changeTabBtn(tabBtn, tabPage) {
    hideTabBtnsPages()
    showTabBtnPage(tabBtn, tabPage)
}

function hideTabBtnsPages() {
    tradeTabsBtns.forEach(tradeTabsBtn => {
        tradeTabsBtn.className = 'py-1 w-1/3'
    })
    const tradePages = document.querySelectorAll('.trade-tab')
    tradePages.forEach(tradeTabsBtn => {
        tradeTabsBtn.classList.add('hidden')
    })
}

function showTabBtnPage(tabBtn, tabPage) {
    tabBtn.classList.add('rounded-full', 'bg-blue-normal', 'text-white')
    const currTabPage = document.getElementById(tabPage)
    currTabPage.classList.remove('hidden')
}

tradeAddLiked.addEventListener('click', () => {
    if (tradeAddLiked.src == 'file:///C:/Users/Diyorbek/Documents/GitHub/ss2/src/assets/feed/star.png') {
        tradeAddLiked.src = './../../assets/feed/star_blue.png'
        fixedBtn.innerText = 'Achester'
    }
    else {
        tradeAddLiked.src = './../../assets/feed/star.png'
        fixedBtn.innerText = 'Trader'
    }
})
tradeAttenteBtn.addEventListener('click', () => {
    changeTabBtn(tradeAttenteBtn, tradeAttentePage)
})
tradeNewsBtn.addEventListener('click', () => {
    changeTabBtn(tradeNewsBtn, tradeNewsPage)
})
tradeProposBtn.addEventListener('click', () => {
    changeTabBtn(tradeProposBtn, tradeProposPage)
})
tradeNextBtn.addEventListener('click', () => {
    showPage(trandingPage)
})
tradePageNextBtn.addEventListener('click', () => {
    showPage(sellAsset)
})
tradingPrevBtn.addEventListener('click', () => {
    showPage(tradeMainPage)
})
sellPrevBtn.addEventListener('click', () => {
    showPage(trandingPage)
})

sellSelectBtn.forEach(sellSelect => {
    sellSelect.addEventListener('click', () => {
        if (sellSelect.classList.contains('bg-light')) {
            sellSelect.classList.remove('bg-light')
        }
        else {
            sellSelect.classList.add('bg-light')
        }
    })
})

sellAssetNextBtn.addEventListener('click', () => {
    showPage(sellAsset2)
})
sellAsset2PrevBtn.addEventListener('click', () => {
    showPage(sellAsset)
})
sellAsset2NextBtn.addEventListener('click', () => {
    showPage(tradeCategoryPage)
})

const scrollAnimation = document.getElementById('scrollAnimation')
window.addEventListener('scroll', () => {
    scrollAnimation.style.minHeight = '520px'
    scrollAnimation.style.maxHeight = '521px'
})