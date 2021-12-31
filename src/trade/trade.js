window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

const element = document.getElementById('degree');
const originalHeight = element.offsetHeight;

async function scrollFunction() {
    console.log(document.body.scrollTop)
    if(document.documentElement.scrollTop==0) return;
    console.log('still')
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        const documentScrollTop = document.documentElement.scrollTop;
        const newHeight = (originalHeight - documentScrollTop + 40) > 150 ? originalHeight - documentScrollTop : 150;
        element.style.height = newHeight + 'px';
        element.style.maxHeight = '350px';
    } else {
        document.getElementById('degree').style.height = 'auto';
    }
}
window.onscroll = function () { scrollFunction() };