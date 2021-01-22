let topHeader = document.getElementById('top-header');

window.onscroll = () => {
    if (window.pageYOffset > 50) {
        topHeader.classList.add('bg-white');
    } else {
        topHeader.classList.remove('bg-white');
    }
}