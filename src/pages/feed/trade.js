const tradeTabsBtns = document.querySelectorAll('.tradeTabsBtn')
const tradeProposBtn = document.getElementById('tradeProposBtn')
const tradeNewsBtn = document.getElementById('tradeNewsBtn')
const tradeAttenteBtn = document.getElementById('tradeAttenteBtn')
const tradeAttentePage = 'tradeAttentePage'
const tradeNewsPage = 'tradeNewsPage'
const tradeProposPage = 'tradeProposPage'

function changeTabBtn(tabBtn, tabPage) {
    hideTabBtnsPages()
    showTabBtnPage(tabBtn,tabPage)
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

function showTabBtnPage(tabBtn,tabPage) {
    tabBtn.classList.add('rounded-full', 'bg-blue-normal', 'text-white')
    const currTabPage = document.getElementById(tabPage)
    currTabPage.classList.remove('hidden')
}


tradeAttenteBtn.addEventListener('click', () => {
    changeTabBtn(tradeAttenteBtn,tradeAttentePage)
})
tradeNewsBtn.addEventListener('click', () => {
    changeTabBtn(tradeNewsBtn,tradeNewsPage)
})
tradeProposBtn.addEventListener('click', () => {
    changeTabBtn(tradeProposBtn,tradeProposPage)
})