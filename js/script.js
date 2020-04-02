// document.addEventListener("DOMContentLoaded", stopScroll);
// // document.addEventListener("DOMContentLoaded", startScroll);
// //
// // let header = document.querySelector('.header');
// // let main = document.querySelector('.main');
// //
// // console.log(main);
// // console.log(header);
// //
// // function stopScroll() {
// //
// //     header.onmouseover = function () {
// //         header.classList.add('stop-scrolling');
// //     };
// //
// //
// // }
// //
// // function startScroll() {
// //
// //     header.addEventListener('mouseleave', function () {
// //         header.classList.remove('stop-scrolling');
// //     });
// //
// // }

document.addEventListener("DOMContentLoaded", clickBubble);

let tv = document.querySelector(".tv");
let bubble = document.querySelector(".bubble");
let main = document.querySelector('.main');

console.log(tv);
console.log(bubble);
console.log(main);

function clickBubble() {

     tv.addEventListener('click', function () {

         if(bubble.style.visibility === "visible"){
             bubble.style.visibility = "hidden";
         } else {
             bubble.style.visibility = "visible";
         }
     })
 }