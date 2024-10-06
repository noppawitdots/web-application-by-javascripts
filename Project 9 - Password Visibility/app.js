const eyeIcon = document.querySelector('#eye');
const passwordElement = document.querySelector('#password');

eyeIcon.addEventListener("click", ()=>{
    if(eyeIcon.classList.contains("fa-eye")){
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        passwordElement.setAttribute("type","text");
    }else{
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        passwordElement.setAttribute("type","password");
    }
});