
let num = document.querySelector(".pro-no");

let value = num.innerHTML;
let endvalue = parseInt(num.getAttribute("data-val"));
// console.log(value);
let startvalue = 0;
let counter = setInterval((value) => {
    num.innerHTML = startvalue;
    startvalue += 1;
    if (startvalue == endvalue + 1) {
        clearInterval(counter);
    }
}, 400);

// ----------------menu button function--------------------
const menuBtn = document.getElementById('menu-btn');
const menu_list = document.querySelector('.toggle-menu');
console.log(menuBtn);
console.log(menu_list);
menuBtn.addEventListener('click',()=>{
    menu_list.classList.toggle('hide');

})


