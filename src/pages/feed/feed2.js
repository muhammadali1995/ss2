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
const mainWrapper = document.getElementById('main-wrapper')
const videoTime = document.getElementById('videoTime')
const videoTime2 = document.getElementById('videoTime2')
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
const lesson2PrevBtn = document.getElementById('lesson2PrevBtn')
const singleLessonNextBtn = document.getElementById('singleLessonNextBtn')
const commentCloseBtn = document.getElementById('commentCloseBtn')
const dropdownBtn = document.getElementById('dropdownBtn')
const commentDropdown = document.getElementById('commentDropdown')
const searchOthers = document.getElementById('searchOthers')
const commentSearchInput = document.getElementById('commentSearch')
const commentForm = document.getElementById('commentForm')
const commentSearchValue = document.getElementById('commentSearch')
const ActiveInput = document.activeElement
const videoPlayBtn = document.getElementById('videoPlayBtn')
const singleLessonPrevBtn = document.getElementById('singleLessonPrevBtn')
const singleNextLesson = document.getElementById('singleNextLesson')
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
const Inf_page = 'personalInformation'
const PORTFOLIO = 'portfolio'
const PROFIL_PAGE = 'profil'
const postPage = 'postPage'
const abonentsPage = 'abonents'
const ACADEMY_PAGE = 'academy'
const lessonPage = 'lessonPage'
const singleLessonPage = 'singleLesson'
const singleLesson2 = 'singleLesson2'
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
const followBtns = document.querySelectorAll('.follow')
const defaultMarginTop = document.getElementById('defaultMarginTop')
const personalPrevBtn = document.getElementById('personalPrevBtn')
const academyBtn = document.getElementById('academyBtn')
const upScroll = document.getElementById('upScroll')


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
searchInput.addEventListener('keyup', () => {
    if (searchInput.value != '') {
        changePage(rechercherPage)
        footer.classList.remove('hidden')
        rechercherInput.focus()
        rechercherInput.value = searchInput.value
        navbarText.innerText = 'Rechercher'
        rechercherPrevBtn.classList.remove('hidden')
    } else {
        changePage(FEED_PAGE)
        showPageBtn(feddBtnStyled)
        footer.classList.remove('hidden')
        navbarText.innerText = 'Feed'
        rechercherPrevBtn.classList.add('hidden')
    }
})
rechercherInput.addEventListener('keyup', () => {
    if (rechercherInput.value != '') {} else {
        searchInput.value = ''
        changePage(FEED_PAGE)
        showPageBtn(feddBtnStyled)
        footer.classList.remove('hidden')
        searchInput.focus()
        navbarText.innerText = 'Feed'
        rechercherPrevBtn.classList.add('hidden')
    }
})

rechercherPrevBtn.addEventListener('click', () => {
    changePage(FEED_PAGE)
    showPageBtn(feddBtnStyled)
    footer.classList.remove('hidden')
    searchInput.value = ''
})
postCloseBtn.addEventListener('click', () => {
    changePage(FEED_PAGE)
    showPageBtn(feddBtnStyled)
    footer.classList.remove('hidden')
    navbar.classList.remove('hidden')
    footer.classList.remove('hidden')
});
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
    navbar.classList.add('hidden')
})

academyMenuBtn.addEventListener('click', () => toggleDropdown())
academyNextBtn.addEventListener('click', () => {
    changePage(lessonPage)
    footer.classList.remove('hidden')
})
lessonPagePrev.addEventListener('click', () => {
    changePage(ACADEMY_PAGE)
    showPageBtn(academyBtnStyled)
    footer.classList.remove('hidden')
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

videoPlayBtn.addEventListener('click', () => {
    footer.classList.add('hidden')
    changePage(singleLessonPage)
})
singleLessonPrevBtn.addEventListener('click', () => {
    changePage(lessonPage)
    footer.classList.remove('hidden')
})
singleLessonNextBtn.addEventListener('click', () => {
    changePage(singleLesson2)
    footer.classList.add('hidden')
})

lesson2PrevBtn.addEventListener('click', () => {
    changePage(singleLessonPage)
})
playVideo.addEventListener('click', () => {
    if (playVideo.innerHTML == '<img src="./../../assets/feed/video_play.png">') {
        video.play()
        videoTime.style.width = video.currentTime + '%'
        playVideo.innerHTML = '<img src="./../../assets/feed/pause.png">'
    } else {
        video.pause()
        videoTime.style.width = video.currentTime + '%'
        playVideo.innerHTML = '<img src="./../../assets/feed/video_play.png">'
    }
    video.ontimeupdate = () => {
        videoTime.style.width = video.currentTime + '%'
    }
})
playVideo2.addEventListener('click', () => {
    console.log(playVideo2.innerHTML)
    if (playVideo2.innerHTML == '<img src="./../../assets/feed/pause.png">') {
        video2.play()
        videoTime2.style.width = video2.currentTime + '%'
        playVideo2.innerHTML = '<img src="./../../assets/feed/video_play.png">'
    } else {
        video2.pause()
        videoTime2.style.width = video2.currentTime + '%'
        playVideo2.innerHTML = '<img src="./../../assets/feed/pause.png">'
    }
    video2.ontimeupdate = () => {
        videoTime2.style.width = video2.currentTime + '%'
    }
});

// ACADEMY

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