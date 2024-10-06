const countElement = document.querySelector('.count');
const inputElement = document.querySelector('input');

inputElement.addEventListener("keyup", ()=>{
    let word = inputElement.value.toLowerCase();
    let vowelCount = 0;
    for(let i=0;i<word.length;i++){
        let letter = word[i];
        if(letter.match(/([a,e,i,o,u])/)){
            vowelCount++;
        }
    }
    countElement.innerHTML = `${vowelCount}`;
});