const timeElement = document.querySelector(".time");

function setTime(){
    //console.log(new Date());
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    timeElement.innerHTML = `
    ${hours<10 ? `0${hours}` : hours}:
    ${minutes<10 ? `0${minutes}` : minutes}:
    ${seconds<10 ? `0${seconds}` : seconds}`;
}
setTime();
setInterval(setTime, 1000);

const btnToggle = document.querySelector(".toggle");
btnToggle.addEventListener("click", (e)=>{
    //console.log("Change!") check!
    const html = document.querySelector('html');
    if(html.classList.contains("dark")){
        html.classList.remove("dark");
        e.target.innerHTML = "Dark mode";
    }else{
        html.classList.add("dark");
        e.target.innerHTML = "Light mode";
    }
})