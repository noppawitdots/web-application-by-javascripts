const progressElement = document.querySelector('.progress');
window.onscroll=()=>scrollProgress()

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    //Height bar
    const scroll = 100*(scrollTop/pageHeight);
    progressElement.style.visibility = "visible";
    progressElement.style.width = scroll + "%";
    // console.log(scroll+"%");
}