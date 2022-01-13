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
    newsBtn.classList.add('bg-normal')
    publicationsBtn.classList.add('text-gray-500')
    newsBtn.classList.add('text-white')
})