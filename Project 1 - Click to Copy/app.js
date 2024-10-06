const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");
/*
    * Check button
    btn.addEventListener("click",(e)=>{
        console.log("Click activate!")
    })
*/

btn.addEventListener("click", ()=>{
    coupon.select();
    coupon.setSelectionRange(0, 999999);
    navigator.clipboard.writeText(coupon.value);
    btn.textContent = "Copy Completed!";
    //set non select text 
    coupon.setSelectionRange(0, 0);
    setTimeout(()=>{
        btn.textContent = "Copy coupon";
    }, 5000)
})

// New feature: