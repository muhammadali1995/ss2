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

const searchInput = document.getElementById('searchValue')
const searchForm = document.getElementById('searchForm')
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchInputValue = searchInput.value;
    searchInputValue.value = ''
    console.log(searchInputValue)
})

const publicationsBtn = document.getElementById('publicationsBtn')
const newsBtn = document.getElementById('newsBtn')
const publicationsPage = document.getElementById('publications')
const newsPage = document.getElementById('news')

publicationsBtn.addEventListener('click', () => {
    publicationsPage.classList.remove('hidden')
    newsPage.classList.add('hidden')
    publicationsBtn.classList.add('bg-normal')
    publicationsBtn.classList.add('text-white')
    newsBtn.classList.remove('bg-normal')
    newsBtn.classList.remove('text-white')
})
newsBtn.addEventListener('click', () => {
    newsPage.classList.remove('hidden')
    publicationsPage.classList.add('hidden')
    publicationsBtn.classList.remove('bg-normal')
    publicationsBtn.classList.remove('text-white')
    publicationsBtn.classList.remove('bg-blue-normal')
    newsBtn.classList.add('bg-normal')
    publicationsBtn.classList.add('text-gray-500')
    newsBtn.classList.add('text-white')
})

const postBtn = document.getElementById('post')
const postPage = document.getElementById('postPage')
const feedPage = document.getElementById('feed')
const closeBtn = document.getElementById('close')
postBtn.addEventListener('click', () => {
    feedPage.classList.add('hidden')
    postPage.classList.remove('hidden')
})
closeBtn.addEventListener('click', () => {
    feedPage.classList.remove('hidden')
    postPage.classList.add('hidden')
})
const commentBtns = document.querySelectorAll('.commentBtn')
const commentPage = document.getElementById('commentPage')
const commentCloseBtn = document.getElementById('commentCloseBtn')
commentBtns.forEach(commentBtn => {
    commentBtn.addEventListener('click', () => {
        commentPage.classList.remove('hidden')
        feedPage.classList.add('hidden')
    })
})
commentCloseBtn.addEventListener('click', () => {
    commentPage.classList.add('hidden')
    feedPage.classList.remove('hidden')
})

const dropdownBtn = document.getElementById('dropdownBtn')
const commentDropdown = document.getElementById('commentDropdown')
const searchOthers = document.getElementById('searchOthers')
const commentSearchInput = document.getElementById('commentSearch')
const commentForm = document.getElementById('commentForm')
const commentSearchValue = document.getElementById('commentSearch')
const ActiveInput = document.activeElement
dropdownBtn.addEventListener('click', () => {
    if (dropdownBtn.style.transform == 'rotate(45deg)') {
        dropdownBtn.style.transition = '0.2s ease-in';
        commentDropdown.classList.add('hidden')
        dropdownBtn.style.transform = 'rotate(90deg)';
    } else {
        dropdownBtn.style.transition = '0.2s ease-in';
        commentDropdown.classList.remove('hidden')
        dropdownBtn.style.transform = 'rotate(45deg)';
    }
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

let commentSearch = ''
commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    commentSearch = commentSearchValue.value
    commentSearch.value = ''
    console.log(commentSearch)
})

const profileImg = document.getElementById('profileImg')
const profileDropdown = document.getElementById('profileDropdown')
profileImg.addEventListener('click', () => {
    if (profileDropdown.classList.contains('hidden')) {
        profileDropdown.classList.remove('hidden')
        feedPage.style.opacity = '0.4'
        document.body.style.background = 'black'
        document.body.style.overflow = 'hidden'
    } else {
        profileDropdown.classList.add('hidden')
        feedPage.style.opacity = '1'
        document.body.style.background = 'transparent'
        document.body.style.overflow = 'auto'
    }
})