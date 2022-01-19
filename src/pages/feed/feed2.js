const attenteBtn = document.getElementById('attenteBtn')
const tousBtn = document.getElementById('tousBtn')
const attenteTab = document.getElementById('attenteTab')
const tousTab = document.getElementById('tousTab')
const profileDropdown = document.getElementById('profileDropdown')
const profileMenu = document.getElementById('profileMenu')
const profileCloseBtn = document.getElementById('profileCloseBtn')
const searchInput = document.getElementById('searchValue')
const searchForms = document.querySelectorAll('.searchForm')
const publicationsBtn = document.getElementById('publicationsBtn')
const newsBtn = document.getElementById('newsBtn')
const publicationsPage = document.getElementById('publications')
const newsPage = document.getElementById('news')
const postBtn = document.getElementById('post')
const postPage = document.getElementById('postPage')
const mainWrapper = document.getElementById('main-wrapper')
const closeBtn = document.getElementById('close')
const postInput = document.getElementById('postInput')
const postParent = document.getElementById('postParent')
const postBtnNext = document.getElementById('enterPost')
const postForm = document.getElementById('postForm')
const commentBtns = document.querySelectorAll('.commentBtn')
const commentPage = document.getElementById('commentPage')
const commentCloseBtn = document.getElementById('commentCloseBtn')
const dropdownBtn = document.getElementById('dropdownBtn')
const commentDropdown = document.getElementById('commentDropdown')
const searchOthers = document.getElementById('searchOthers')
const commentSearchInput = document.getElementById('commentSearch')
const commentForm = document.getElementById('commentForm')
const commentSearchValue = document.getElementById('commentSearch')
const ActiveInput = document.activeElement
const likeBtns = document.querySelectorAll('.like')
const rechercherPage = document.getElementById('rechercher')
const rechercherInput = document.getElementById('rechercherValue')
const rechercherCloseBtn = document.getElementById('rechercherCloseBtn')
const FEED_PAGE = 'feedPage'
const PORTFOLIO = 'portfolio'
const PROFIL_PAGE = 'profil'
const portfolioBtn = document.getElementById('portfolioBtn')
const feedBtn = document.getElementById('feedBtn')
const profilBtn = document.getElementById('profilBtn')
const navbarText = document.getElementById('navbarText')

portfolioBtn.addEventListener('click', () => {
    changePage(PORTFOLIO)
    navbarText.innerText = 'Portefeuille'
})
feedBtn.addEventListener('click', () => {
    changePage(FEED_PAGE)
    navbarText.innerText = 'Feed'
})
profilBtn.addEventListener('click', () => {
    changePage(PROFIL_PAGE)
    navbarText.innerText = 'Profil'
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
attenteBtn.addEventListener('click', () => {
    attenteTab.classList.remove('hidden')
    tousTab.classList.add('hidden')
    tousBtn.classList.remove('bg-blue-normal', 'text-white')
    tousBtn.classList.add('text-gray-600')
    attenteBtn.classList.add('bg-blue-normal', 'text-white')
    attenteBtn.classList.remove('text-gray-600')
})
tousBtn.addEventListener('click', () => {
    attenteTab.classList.add('hidden')
    tousTab.classList.remove('hidden')
    attenteBtn.classList.remove('bg-blue-normal', 'text-white')
    attenteBtn.classList.add('text-gray-600')
    tousBtn.classList.add('bg-blue-normal', 'text-white')
    tousBtn.classList.remove('text-gray-600')
})
profileMenu.addEventListener('click', () => {
    profileDropdown.classList.toggle('hidden')
})

profileCloseBtn.addEventListener('click', () => {
    profileDropdown.classList.add('hidden')
})
searchForms.forEach(searchForm => {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const searchInputValue = searchForm.children[1].value;
        searchInputValue.value = ''
        console.log(searchInputValue)
    })
})
publicationsBtn.addEventListener('click', () => {
    publicationsPage.classList.remove('hidden')
    newsPage.classList.add('hidden')
    publicationsBtn.classList.add('bg-normal', 'text-white')
    newsBtn.classList.remove('bg-normal', 'text-white')
    publicationsBtn.classList.remove('text-gray-500')
})
newsBtn.addEventListener('click', () => {
    newsPage.classList.remove('hidden')
    publicationsPage.classList.add('hidden')
    publicationsBtn.classList.remove('bg-normal', 'bg-blue-normal', 'text-white')
    newsBtn.classList.add('bg-normal', 'text-white')
    publicationsBtn.classList.add('text-gray-500')
    newsBtn.classList.remove('text-gray-500')
})
postBtn.addEventListener('click', () => {
    mainWrapper.classList.add('hidden')
    postPage.classList.remove('hidden')
})
closeBtn.addEventListener('click', () => {
    mainWrapper.classList.remove('hidden')
    postPage.classList.add('hidden')
})
postBtnNext.addEventListener('click', () => {
    if (postInput.value != '') {
        postPage.classList.add('hidden')
        mainWrapper.classList.remove('hidden')
        const newPost = document.createElement('div')
        const postValue = postInput.value
        newPost.className = 'bg-white mt-4 p-4 rounded-2xl'
        newPost.innerHTML = `<div class="flex items-center ">
            <img src="./../../assets/feed/hassan.png " alt=" ">
            <div class="ml-4 ">
                <h3 class="font-semibold ">Clark Hassan</h3>
                <p class="text-gray-400 text-xs ">24s ago</p>
            </div>
        </div>
        <p class="font-normal mt-4 text-gray-600 text-sm ">${postValue}</p>
        <div class="flex items-center justify-between w-60 mt-4 ">
            <div class="flex items-center cursor-pointer ">
                <img src="./../../assets/feed/heart (1) 1.png ">
                <p class="ml-2 text-gray-400 text-xs ">Like</p>
            </div>
            <div class="flex items-center cursor-pointer ">
                <img src="./../../assets/feed/message 1.png ">
                <p class="ml-2 text-gray-400 text-xs commentBtn">Comment</p>
            </div>
    </div>`
        postParent.appendChild(newPost)
        postInput.value = ''
    }
})
commentBtns.forEach(commentBtn => {
    commentBtn.addEventListener('click', () => {
        commentPage.classList.remove('hidden')
        mainWrapper.classList.add('hidden')
    })
})
commentCloseBtn.addEventListener('click', () => {
    commentPage.classList.add('hidden')
    mainWrapper.classList.remove('hidden')
})
commentSearchInput.addEventListener('keyup', () => {
    if (commentSearchInput.value != '') {
        commentForm.classList.add('w-80')
        commentSearchInput.classList.add('w-72')
        searchOthers.classList.add('hidden')
        dropdownBtn.classList.remove('hidden')
    } else {
        commentForm.classList.remove('w-80')
        commentSearchInput.classList.remove('w-72')
        dropdownBtn.classList.add('hidden')
        searchOthers.classList.remove('hidden')
        commentDropdown.classList.add('hidden')
    }
})
dropdownBtn.addEventListener('click', () => {
    if (dropdownBtn.style.transform == 'rotate(45deg)') {
        dropdownBtn.setAttribute('style', 'transform:rotate(90deg);transition:0.2s ease-in;')
        commentDropdown.classList.add('hidden')
    } else {
        dropdownBtn.setAttribute('style', 'transform:rotate(45deg);transition :0.2s ease-in;')
        commentDropdown.classList.remove('hidden')
    }
})
likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('text-blue-500')
    })
})
rechercherCloseBtn.addEventListener('click', () => {
    rechercherPage.classList.add('hidden')
    mainWrapper.classList.remove('hidden')
    searchInput.value = ''
})
searchInput.addEventListener('keyup', () => {
    if (searchInput.value != '') {
        rechercherPage.classList.remove('hidden')
        mainWrapper.classList.add('hidden')
        rechercherInput.value = searchInput.value
        rechercherInput.focus()
    } else {
        rechercherPage.classList.add('hidden')
        mainWrapper.classList.remove('hidden')
    }
})
rechercherInput.addEventListener('keyup', () => {
    if (rechercherInput.value == '') {
        rechercherPage.classList.add('hidden')
        mainWrapper.classList.remove('hidden')
        searchInput.value = rechercherInput.value
        searchInput.focus()
    }
})
profileCloseBtn.addEventListener('click', () => {
    profileDropdown.classList.add('hidden')
    mainWrapper.style.opacity = '1'
    document.body.setAttribute('style', 'overflow:auto;bacground:transparent;')
})