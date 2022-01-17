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
const searchForms = document.querySelectorAll('.searchForm')
searchForms.forEach(searchForm => {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const searchInputValue = searchForm.children[1].value;
        searchInputValue.value = ''
        console.log(searchInputValue)
    })

})

const publicationsBtn = document.getElementById('publicationsBtn')
const newsBtn = document.getElementById('newsBtn')
const publicationsPage = document.getElementById('publications')
const newsPage = document.getElementById('news')

publicationsBtn.addEventListener('click', () => {
    publicationsPage.classList.remove('hidden')
    newsPage.classList.add('hidden')
    publicationsBtn.classList.add('bg-normal', 'text-white')
    newsBtn.classList.remove('bg-normal', 'text-white')
})
newsBtn.addEventListener('click', () => {
    newsPage.classList.remove('hidden')
    publicationsPage.classList.add('hidden')
    publicationsBtn.classList.remove('bg-normal', 'bg-blue-normal', 'text-white')
    newsBtn.classList.add('bg-normal', 'text-white')
    publicationsBtn.classList.add('text-gray-500')
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
        dropdownBtn.setAttribute('style', 'transform:rotate(90deg);transition:0.2s ease-in;')
        commentDropdown.classList.add('hidden')
    } else {
        dropdownBtn.setAttribute('style', 'transform:rotate(45deg);transition :0.2s ease-in;')
        commentDropdown.classList.remove('hidden')
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

const profileImgs = document.querySelectorAll('.profileImg')
const profileDropdown = document.getElementById('profileDropdown')
profileImgs.forEach(profileImg => {
    profileImg.addEventListener('click', () => {
        if (profileDropdown.classList.contains('hidden')) {
            profileDropdown.classList.remove('hidden')
            document.body.setAttribute('style', 'overflow:hidden;background:black;')
        } else {
            profileDropdown.classList.add('hidden')
            document.body.setAttribute('style', 'overflow:auto;bacground:transparent;')
        }
    })
})
const postInput = document.getElementById('postInput')
const postParent = document.getElementById('postParent')
const postBtnNext = document.getElementById('enterPost')
const postForm = document.getElementById('postForm')
postForm.onsubmit = (e) => {
    e.preventDefault()
    if (postInput.value != '') {
        postPage.classList.add('hidden')
        feedPage.classList.remove('hidden')
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
}
postBtnNext.addEventListener('click', () => {
    if (postInput.value != '') {
        postPage.classList.add('hidden')
        feedPage.classList.remove('hidden')
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

const rechercherPage = document.getElementById('rechercher')
const rechercherInput = document.getElementById('rechercherValue')
searchInput.addEventListener('keyup', () => {
    if (searchInput.value != '') {
        rechercherPage.classList.remove('hidden')
        feedPage.classList.add('hidden')
        rechercherInput.value = searchInput.value
        rechercherInput.focus()
    } else {
        rechercherPage.classList.add('hidden')
        feedPage.classList.remove('hidden')
    }
})
rechercherInput.addEventListener('keyup', () => {
    if (rechercherInput.value == '') {
        rechercherPage.classList.add('hidden')
        feedPage.classList.remove('hidden')
        searchInput.value = rechercherInput.value
        searchInput.focus()
    }
})
const profileCloseBtn = document.getElementById('profileCloseBtn')
profileCloseBtn.addEventListener('click', () => {
    profileDropdown.classList.add('hidden')
    feedPage.style.opacity = '1'
    document.body.setAttribute('style', 'overflow:auto;bacground:transparent;')
})

const rechercherCloseBtn = document.getElementById('rechercherCloseBtn')
rechercherCloseBtn.addEventListener('click', () => {
    rechercherPage.classList.add('hidden')
    feedPage.classList.remove('hidden')
    searchInput.value = ''
})