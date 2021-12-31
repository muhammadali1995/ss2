async function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('degree').style.height = '100px';
        console.log(document.body.scrollTop)
    }
    else {
        document.getElementById('degree').style.height = 'auto';
        console.log(document.body.scrollTop);
    }
}
window.onscroll = function () { scrollFunction() };