const progressElement = document.querySelector('.progress');
//window.onscroll=()=>scrollProgress()

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    //Height bar
    const scroll = 100*(scrollTop/pageHeight);
    progressElement.style.visibility = "visible";
    progressElement.style.width = scroll + "%";
    //console.log(scroll+"%");
}

const scrollBtn = document.querySelector('.top');
const rootElement = document.documentElement;
document.addEventListener("scroll",showBtn);
document.addEventListener("scroll",scrollProgress);
scrollBtn.addEventListener("click",scrollToTopFunction);


function showBtn(){
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if(rootElement.scrollTop/scrollTotal > 0.6){
        scrollBtn.classList.add('show-btn');
    }else{
        scrollBtn.classList.remove('show-btn');
    }
}

function scrollToTopFunction() {
    rootElement.scrollTo({
        top:0,
        behavior: "smooth"
    })
}
