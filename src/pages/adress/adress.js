const searchInput = document.querySelector('.search')
const next5 = document.getElementById('next')
const dropdown = document.getElementById('dropdown')
searchInput.addEventListener('keyup', () => {
    if (searchInput.value != '') {
        next5.disabled = false
        searchInput.className = 'search border border-blue-700 mt-4 px-4 py-3 rounded-t-2xl outline-none w-full'
        dropdown.classList.remove('hidden')
        next5.className = 'bg-gradient-to-r bottom-2 fixed font-extrabold from-blue-darker mt-12 next3  py-3 rounded-full text-white to-blue-lighter w-96'
    } else {
        searchInput.className = 'search border border-gray-400 mt-4 px-4 py-3 rounded-2xl outline-none w-full'
        dropdown.classList.add('hidden')
        next5.disabled = true
        next5.className = 'bg-gradient-to-r bottom-2 fixed font-extrabold from-blue-darker mt-12 next3 opacity-50 py-3 rounded-full text-white to-blue-lighter w-96'
    }
})



const searchInput2 = document.querySelectorAll('.search2')
const next6 = document.getElementById('next2')
const dropdown2 = document.getElementById('dropdown2')

searchInput2.forEach(inp => {
    inp.addEventListener('keyup', () => {
        if (inp.value != '') {
            inp.classList.add('blue')
        }
        if (inp.value == '') {
            inp.classList.remove('blue')
        }
        if ((searchInput2[0].value != '') && (searchInput2[1].value != '') && (searchInput2[2].value != '')) {
            next6.disabled = false
            next6.className = 'bg-gradient-to-r font-extrabold from-blue-darker mt-16 mx-auto  py-3 rounded-full text-white to-blue-lighter w-full'
        }
        if ((searchInput2[0].value == '') || (searchInput2[1].value == '') || (searchInput2[2].value == '')) {
            next6.disabled = true
            next6.className = 'bg-gradient-to-r font-extrabold from-blue-darker mt-16 mx-auto next3 opacity-50 py-3 rounded-full text-white to-blue-lighter w-full'
        }
    })
})

const PAGES = {
    ADRESS: 'adress',
    TYPE: 'adress-type',
    PICK: 'pick',
    TERM: 'term'
}

const { ADRESS, TYPE, PICK, TERM } = PAGES;

var currentPage = ADRESS;

window.onload = () => {
    const next = document.getElementById('next')
    const next2 = document.getElementById('next2')
    const next3 = document.getElementById('next3')
    const prev = document.getElementById('prev')
    const prev2 = document.getElementById('prev2')
    const prev3 = document.getElementById('prev3')
    next.addEventListener('click', () => {
        changePage(TYPE)
    })
    next2.addEventListener('click', () => {
        changePage(PICK)
    })
    next3.addEventListener('click', () => {
        changePage(TERM)
    })
    prev.addEventListener('click', () => {
        changePage(ADRESS)
    })
    prev2.addEventListener('click', () => {
        changePage(TYPE)
    })
    prev3.addEventListener('click', () => {
        changePage(PICK)
    })
}


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