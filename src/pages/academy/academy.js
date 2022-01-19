const mainPage = document.getElementById('mainPage')
const mainNextBtn = document.getElementById('mainNextBtn')
const lessonPage = document.getElementById('lessonPage')
const lessonPagePrev = document.getElementById('lessonPagePrev')

mainNextBtn.addEventListener('click', () => {
    mainPage.classList.add('hidden')
    lessonPage.classList.remove('hidden')
})

lessonPagePrev.addEventListener('click', () => {
    mainPage.classList.remove('hidden')
    lessonPage.classList.add('hidden')
})

const lessonCards = document.querySelectorAll('.lessonCard')
lessonCards.forEach(lessonCard => {
    lessonCard.addEventListener('click', () => {
        if (lessonCard.children[1].innerHTML == '<img src="./../../assets/feed/feather_lock.jpg">') {
            lessonCard.children[1].innerHTML = '<img src="./../../assets/feed/check.png">'
        } else {
            lessonCard.children[1].innerHTML = '<img src="./../../assets/feed/feather_lock.jpg">'
        }
    })
})

const videoPlayBtn = document.getElementById('videoPlayBtn')
const singleLessonPage = document.getElementById('singleLesson')
const singleLessonPrevBtn = document.getElementById('singleLessonPrevBtn')
const singleLessonNextBtn = document.getElementById('singleLessonNextBtn')
const singleNextLesson = document.getElementById('singleNextLesson')
const lessonPrevBtns = document.querySelectorAll('.lessonPrevBtn')

videoPlayBtn.addEventListener('click', () => {
    lessonPage.classList.add('hidden')
    singleLessonPage.classList.remove('hidden')
})

// singleLessonPrevBtn.addEventListener('click', () => {
//     lessonPage.classList.remove('hidden')
//     singleLessonPage.classList.add('hidden')
// })

// singleLessonNextBtn.addEventListener('click', () => {
//     singleLessonPage.classList.add('hidden')
//     singleNextLesson.classList.remove('hidden')
// })

// lessonPrevBtns.forEach(lessonPrevBtn => {
//     lessonPrevBtn.addEventListener('click', () => {
//         singleNextLesson.classList.add
//     })
// })