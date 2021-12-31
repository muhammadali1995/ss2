const element = document.getElementById('degree');
const originalHeight = element.offsetHeight;

async function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        const documentScrollTop = document.documentElement.scrollTop;
        const newHeight = (originalHeight - documentScrollTop + 40) > 150 ? originalHeight - documentScrollTop : 150;
        element.style.height = newHeight + 'px'; 
    } else {
        document.getElementById('degree').style.height = 'auto';
    }
}
window.onscroll = function () { scrollFunction() };