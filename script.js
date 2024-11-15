function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
window.onscroll = function() {
    const scrollButton = document.getElementById("scrollToTop");
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};
document.getElementById("scrollToTop").addEventListener("click", scrollToTop);