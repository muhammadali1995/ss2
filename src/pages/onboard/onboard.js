// const PAGES = {
//     SPLASH_PAGE: 'splash-page',
//     ONBOARD_PAGE: 'onboard-page'
// }

// const { ONBOARD_PAGE, SPLASH_PAGE } = PAGES;

// var currentPage = SPLASH_PAGE;

// window.onload = () => {
//     setTimeout(() => {
//         changePage(ONBOARD_PAGE)
//     }, 500)


//     const btnContinue = document.querySelectorAll('.ss-cont');
//     btnContinue.forEach(btn => {
//         btn.addEventListener('click', (event) => {
//             const nextPage = event.target.closest('.ss-page').nextElementSibling;
//             changePage(nextPage.id);
//         })
//     })
// }

// function changePage(page) {
//     hidePages();
//     showPage(page)
// }

// function hidePages() {
//     const pages = document.querySelectorAll('.ss-page');
//     Array.from(pages).forEach(element => {
//         if (!element.classList.contains('hidden')) element.classList.add('hidden')
//     });
// }

// function showPage(pageId) {
//     const currPage = document.getElementById(pageId);
//     currPage.classList.remove('hidden');
// }