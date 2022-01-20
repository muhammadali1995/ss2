const attenteBtn = document.getElementById('attenteBtn')
const tousBtn = document.getElementById('tousBtn')
const attenteTab = document.getElementById('attenteTab')
const tousTab = document.getElementById('tousTab')
const profileDropdown = document.getElementById('profileDropdown')
const profileMenu = document.getElementById('profileMenu')
const profileCloseBtn = document.getElementById('profileCloseBtn')
const searchInput = document.getElementById('searchValue')
const searchForms = document.querySelectorAll('.searchForm')
const singleLessonNextPageBtn = document.getElementById('singleLessonNextPageBtn')
const intrClose = document.getElementById('intrClose')
const closedPage = document.getElementById('closedPage')
const publicationsBtn = document.getElementById('publicationsBtn')
const newsBtn = document.getElementById('newsBtn')
const chatBtnStyled = 'chatBtn'
const publicationsPage = document.getElementById('publications')
const newsPage = document.getElementById('news')
const academyNextPageBtn = document.getElementById('academyNextPageBtn')
const lockBtns = document.querySelectorAll('.lockBtn')
const postBtn = document.getElementById('post')
const chatBtn = document.getElementById('chatBtn')
const searchBtn = document.getElementById('searchBtn')
const mainWrapper = document.getElementById('main-wrapper')
const videoTime = document.getElementById('videoTime')
const videoTime2 = document.getElementById('videoTime2')
const lessonNextBtn = document.getElementById('lessonNextBtn')
const closeBtn = document.getElementById('close')
const postInput = document.getElementById('postInput')
const postParent = document.getElementById('postParent')
const postBtnNext = document.getElementById('enterPost')
const postForm = document.getElementById('postForm')
const commentBtns = document.querySelectorAll('.commentBtn')
const playVideo = document.getElementById('playVideo')
const commentPage = 'commentPage'
const video2 = document.getElementById('video2')
const playVideo2 = document.getElementById('playVideo2')
const video = document.querySelector('video')
const chatNextBtns = document.querySelectorAll('.contact')
const conversation = 'conversation'
const lesson2PrevBtn = document.getElementById('lesson2PrevBtn')
const singleLessonNextBtn = document.getElementById('singleLessonNextBtn')
const commentCloseBtn = document.getElementById('commentCloseBtn')
const dropdownBtn = document.getElementById('dropdownBtn')
const commentDropdown = document.getElementById('commentDropdown')
const searchOthers = document.getElementById('searchOthers')
const commentSearchInput = document.getElementById('commentSearch')
const chatForm = document.getElementById('chatFrom')
const commentForm = document.getElementById('commentForm')
const commentSearchValue = document.getElementById('commentSearch')
const ActiveInput = document.activeElement
const videoPlayBtn = document.getElementById('videoPlayBtn')
const conversationPrevBtn = document.getElementById('conversationPrevBtn')
const singleLessonPrevPageBtn = document.getElementById('singleLessonPrevPageBtn')
const singleNextLesson = document.getElementById('singleNextLesson')
const groupesPage = document.getElementById('groupesPage')
const messadgeSite = document.getElementById('messadgeSite')
const groupesBtn = document.getElementById('groupesBtn')
const amisBtn = document.getElementById('amisBtn')
const amisPage = document.getElementById('amisPage')
const lessonPrevBtns = document.querySelectorAll('.lessonPrevBtn')
const lessonCards = document.querySelectorAll('.lessonCard')
const lessonPagePrev = document.getElementById('lessonPagePrev')
const academyMenuBtn = document.getElementById('menu')
const likeBtns = document.querySelectorAll('.like')
const rechercherInput = document.getElementById('rechercherValue')
const rechercherCloseBtn = document.getElementById('rechercherCloseBtn')
const postCloseBtn = document.getElementById('close')
const academyNextBtn = document.getElementById('mainNextBtn')
const pagesBtn = document.querySelectorAll('.pagesBtn')
const rechercherPage = 'rechercher'
const FEED_PAGE = 'feedPage'
const chat = 'chat'
const Inf_page = 'personalInformation'
const PORTFOLIO = 'portfolio'
const PROFIL_PAGE = 'profil'
const USER_PROFILE_PAGE = 'userProfile'
const postPage = 'postPage'
const abonentsPage = 'abonents'
const ACADEMY_PAGE = 'academy'
const lessonPage = 'lessonPage'
const singleLessonPage = 'singleLesson'
const singleLesson2 = 'singleLesson2'
const closedDiv = document.getElementById('closedDiv')
const closeBtn2 = document.getElementById('closeBtn2')
const personalInfBtn = document.getElementById('personalInfBtn')
const portfolioBtn = document.getElementById('portfolioBtn')
const feedBtn = document.getElementById('feedBtn')
const feddBtnStyled = 'feedBtn'
const portfolioBtnStyled = 'portfolioBtn'
const academyBtnStyled = 'academyBtn'
const profilBtnStyled = 'profilBtn'
const profilBtn = document.getElementById('profilBtn')
const navbarText = document.getElementById('navbarText')
const abonentNextBtn = document.getElementById('abonentNextBtn')
const abonentPrevBtn = document.getElementById('abonentPrevBtn')
const rechercherPrevBtn = document.getElementById('rechercherPrev')
const navbar = document.getElementById('navbar')
const footer = document.getElementById('footer')
const user = document.getElementById('user')
const followBtns = document.querySelectorAll('.follow')
const defaultMarginTop = document.getElementById('defaultMarginTop')
const personalPrevBtn = document.getElementById('personalPrevBtn')
const academyBtn = document.getElementById('academyBtn')
const upScroll = document.getElementById('upScroll')
const userProfileBtns = document.querySelectorAll('.userProfile')


// FOOTER

function showPageBtn(pageBtn) {
    hidePageBtns()
    showPagesBtn(pageBtn)
}

function hidePageBtns() {
    Array.from(pagesBtn).forEach(element => {
        if (!element.classList.contains('text-gray-400')) element.classList.add('text-gray-400')
        element.classList.remove('text-blue-normal')
    });
}

function showPagesBtn(pageBtnId) {
    const currPage = document.getElementById(pageBtnId);
    currPage.classList.add('text-blue-normal');
}

// FOOTER

// PAGES
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
// PAGES

// PROFIL PAGE
profilBtn.addEventListener('click', () => {
    changePage(PROFIL_PAGE)
    showPageBtn(profilBtnStyled)
    navbar.classList.remove('hidden')
    navbarText.innerText = 'Profil'
    footer.classList.remove('hidden')
})
personalInfBtn.addEventListener('click', () => {
    changePage(Inf_page)
    footer.classList.add('hidden')
    footer.classList.remove('hidden')
    navbar.classList.add('hidden')
})

personalPrevBtn.addEventListener('click', () => {
    changePage(PROFIL_PAGE)
    showPageBtn(profilBtnStyled)
    footer.classList.remove('hidden')
    footer.classList.remove('hidden')
    navbar.classList.remove('hidden')
})
const toggleDropdown = () => {
    profileDropdown.classList.toggle('hidden')
}

profileMenu.addEventListener('click', () => toggleDropdown())
profileCloseBtn.addEventListener('click', () => {
    profileDropdown.classList.add('hidden')
})

abonentNextBtn.addEventListener('click', () => {
    changePage(abonentsPage)
    footer.classList.remove('hidden')
    navbar.classList.add('hidden')
})

abonentPrevBtn.addEventListener('click', () => {
    changePage(PROFIL_PAGE)
    showPageBtn(profilBtnStyled)
    footer.classList.remove('hidden')
    navbar.classList.remove('hidden')
});
// PROFIL PAGE

// FEED PAGE

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
postBtnNext.addEventListener('click', () => {
    if (postInput.value != '') {
        changePage(FEED_PAGE)
        showPageBtn(feddBtnStyled)
        footer.classList.remove('hidden')
        footer.classList.remove('hidden')
        navbar.classList.remove('hidden')
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
        changePage(commentPage)
        footer.classList.remove('hidden')
        navbar.classList.add('hidden')
        footer.classList.add('hidden')
    })
})
commentCloseBtn.addEventListener('click', () => {
    changePage(FEED_PAGE)
    showPageBtn(feddBtnStyled)
    footer.classList.remove('hidden')
    navbar.classList.remove('hidden')
    footer.classList.remove('hidden')
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
profileCloseBtn.addEventListener('click', () => {
    profileDropdown.classList.add('hidden')
    mainWrapper.style.opacity = '1'
    document.body.setAttribute('style', 'overflow:auto;bacground:transparent;')
})

followBtns.forEach(followBtn => {
    followBtn.addEventListener('click', () => {
        if (followBtn.innerText == 'Se désabonner') {
            followBtn.innerText = 'S’abonner'
        } else {
            followBtn.innerText = 'Se désabonner'
        }
    })
})
postBtn.addEventListener('click', () => {
    changePage(postPage)
    footer.classList.remove('hidden')
    navbar.classList.add('hidden')
    footer.classList.add('hidden')
})
feedBtn.addEventListener('click', () => {
    changePage(FEED_PAGE)
    showPageBtn(feddBtnStyled)
    footer.classList.remove('hidden')
    navbar.classList.remove('hidden')
    navbarText.innerText = 'Feed'
})
postCloseBtn.addEventListener('click', () => {
    changePage(FEED_PAGE)
    showPageBtn(feddBtnStyled)
    footer.classList.remove('hidden')
    navbar.classList.remove('hidden')
    footer.classList.remove('hidden')
})

searchBtn.addEventListener('click', () => {
        if (!searchBtn.classList.contains('text-blue-normal')) {
            searchBtn.classList.add('text-blue-normal')
            changePage(rechercherPage)
            navbarText.innerText = 'Rechercher'
        } else {
            searchBtn.classList.remove('text-blue-normal')
            changePage(FEED_PAGE)
            navbarText.innerText = 'Feed'
            showPageBtn(feddBtnStyled)
        }
    })
    // FEED PAGE

// PORTFOLIO PAGE 
portfolioBtn.addEventListener('click', () => {
    changePage(PORTFOLIO)
    changeScrollPage()
    showPageBtn(portfolioBtnStyled)
    footer.classList.remove('hidden')
    console.log(portfolioBtn)
    navbar.classList.remove('hidden')
    navbarText.innerText = 'Portefeuille'
})
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
});

function changeScrollPage() {
    const top = defaultMarginTop.getBoundingClientRect().top + defaultMarginTop.offsetHeight
    console.log(upScroll, window.innerHeight - top)
    const maxHeight = window.innerHeight - top
    upScroll.style.maxHeight = maxHeight + 'px'
    upScroll.style.minHeight = maxHeight + 'px'
    console.log(upScroll.getBoundingClientRect().top)
    console.log(top)
}
window.onscroll = () => {
    if (upScroll.getBoundingClientRect().top < 130) {
        upScroll.classList.remove('overflow-hidden')
        upScroll.classList.add('overflow-auto')
    } else {
        upScroll.classList.add('overflow-hidden')
        upScroll.classList.remove('overflow-auto')
    }
};
// PORTFOLIO PAGE

// ACADEMY
academyBtn.addEventListener('click', () => {
    changePage(ACADEMY_PAGE)
    showPageBtn(academyBtnStyled)
    footer.classList.remove('hidden')
    navbarText.innerText = 'Academy'
})
lessonCards.forEach(lessonCard => {
    lessonCard.addEventListener('click', () => {
        if (lessonCard.children[1].innerHTML == '<img src="./../../assets/feed/feather_lock.jpg">') {
            lessonCard.children[1].innerHTML = '<img src="./../../assets/feed/check.png">'
        } else {
            lessonCard.children[1].innerHTML = '<img src="./../../assets/feed/feather_lock.jpg">'
        }
    })
})
singleLessonPrevPageBtn.addEventListener('click', () => {
    changePage(lessonPage)
})
lesson2PrevBtn.addEventListener('click', () => {
    changePage(singleLessonPage)
})
playVideo.addEventListener('click', () => {
    if (playVideo.innerHTML == '<img src="./../../assets/feed/video_play.png" class="w-4">') {
        video.play()
        videoTime.style.width = video.currentTime + '%'
        playVideo.innerHTML = '<img src="./../../assets/feed/pause.png">'
    } else {
        video.pause()
        videoTime.style.width = video.currentTime + '%'
        playVideo.innerHTML = '<img src="./../../assets/feed/video_play.png" class="w-4">'
    }
    video.ontimeupdate = () => {
        videoTime.style.width = video.currentTime + '%'
    }
})

lockBtns.forEach(lockBtn => {
    lockBtn.addEventListener('click', () => {
        if (lockBtn.innerHTML == '<img src="./../../assets/feed/lock_blue.png">') {
            lockBtn.innerHTML = '<img src="./../../assets/feed/tick_icon.png">'
        } else {
            lockBtn.innerHTML = '<img src="./../../assets/feed/lock_blue.png">'
        }
    })
})

academyNextPageBtn.addEventListener('click', () => {
    changePage(lessonPage)
    footer.classList.add('hidden')
    navbar.classList.add('hidden')
})

lessonNextBtn.addEventListener('click', () => {
    changePage(singleLessonPage)
    footer.classList.add('hidden')
    navbar.classList.add('hidden')
})

intrClose.addEventListener('click', () => {
    closedPage.classList.add('hidden')
})

singleLessonNextPageBtn.addEventListener('click', () => {
    changePage(singleLesson2)
    navbar.classList.add('hidden')
    footer.classList.add('hidden')
})

closeBtn2.addEventListener('click', () => {
    closedDiv.classList.add('hidden')
})

// ACADEMY


// CHAT
chatBtn.addEventListener('click', () => {
    changePage(chat)
    navbarText.innerText = 'Chat'
    console.log(chatBtn)
    showPageBtn(chatBtnStyled)
})

amisBtn.addEventListener('click', () => {
    amisPage.classList.remove('hidden')
    amisBtn.className = 'bg-blue-normal font-bold py-1 rounded-full text-white w-1/2'
    groupesBtn.className = 'font-bold text-gray-600 w-1/2'
    groupesPage.classList.add('hidden')
})
groupesBtn.addEventListener('click', () => {
    amisPage.classList.add('hidden')
    groupesBtn.className = 'bg-blue-normal font-bold py-1 rounded-full text-white w-1/2'
    amisBtn.className = 'font-bold text-gray-600 w-1/2'
    groupesPage.classList.remove('hidden')
})
chatNextBtns.forEach(chatNextBtn => {
    chatNextBtn.addEventListener('click', () => {
        changePage(conversation)
        console.log(chatNextBtn)
        user.innerHTML = `
        <img src="${chatNextBtn.children[0].children[0].src}">
        <h3 class="font-extrabold ml-4">${chatNextBtn.children[0].children[1].children[0].innerText}</h3>
        `
        footer.classList.add('hidden')
        navbar.classList.add('hidden')
    })

})
conversationPrevBtn.addEventListener('click', () => {
    changePage(chat)
    navbar.classList.remove('hidden')
    footer.classList.remove('hidden')
})

chatForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newMessadge = document.createElement('div')
    newMessadge.innerHTML = `<div class="flex items-start mt-8">
                    <div class="bg-blue-dark px-4 py-2 rounded-2xl text-white" style="border-top-right-radius: 0;">
                        <div class="flex justify-between">
                            <h3 class="font-bold text-sm">Sam GAMEGIE</h3>
                            <p class="font-semibold text-gray-300 text-xs">${new Date().toLocaleTimeString()}</p>
                        </div>
                        <p class="font-normal mt-1 text-gray-300 w-72 overflow-auto text-sm">${chatForm.children[0].value}</p>
                    </div>
                    <img src="./../../assets/feed/Profile_image.png" class="ml-4">
                </div>`
    messadgeSite.appendChild(newMessadge)
    chatForm[0].value = ''

})

// CHAT

// SWIPER
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
});
// SWIPER

userProfileBtns.forEach(userProfileBtn => {
    userProfileBtn.addEventListener('click', () => {
        changePage(USER_PROFILE_PAGE)
        showPageBtn(profilBtnStyled)
        navbarText.innerText = 'Profil'
    })
})