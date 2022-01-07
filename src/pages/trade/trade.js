window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const element = document.getElementById('degree');
const bottomModal = document.getElementById('bottom-modal')
const originalHeight = element.offsetHeight;

async function scrollFunction() {
    // console.log(document.body.scrollTop)
    // if (document.documentElement.scrollTop == 0) return;
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        const documentScrollTop = document.documentElement.scrollTop;
        const newHeight = (originalHeight - documentScrollTop + 40) > 100 ? originalHeight - documentScrollTop : 100;
        element.style.height = newHeight + 'px';
        bottomModal.style.maxHeight = '400px';
        bottomModal.style.overflow = 'auto';
    } else {
        bottomModal.style.maxHeight = 'initial';
        bottomModal.style.overflow = 'initial';
        document.getElementById('degree').style.height = '100%';
    }
}
window.onscroll = function () { scrollFunction() };