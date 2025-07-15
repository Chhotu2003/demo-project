// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("para was clicked");

// });
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     // box.addEventListener("click",function(){
//     //     console.log("push the mouse")
//     // })
//     console.log("mouse inside div");
// });

// this eventListener 
// let btn=document.querySelector("button");
// let p=document.querySelector("p");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundcolor="blue";

// }
// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);

//keyboard Events

// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log(event.key);
//     console.log("key was pressed");
// });

//move the Arrow !
// let inp=document.querySelector("input");
// inp.addEventListener("keyboardpress",function(event){
//     console.log("code =",event.code);
//     if(event.code == "keyU"){
//         console.log("character moves up");
//     }
//     else if(event.code == "keyD"){
//         console.log("character move down");

//     }
//     else if(event.code == "keyL"){
//         console.log("character moves left");
//     }
//     else if(event.code == "keyR"){
//         console.log("character moves right");
//     }
// });

// <-----form events ---->
// let form =document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form submitted");
// });

// Extracting from data
// let form =document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let inp=document.querySelector("input");
//     console.log(inp);
//     console.log(inp.innerText);
//     console.log(inp.value);
//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`hi ${user.value},your password is set to ${pass.value}`);
// })

////////////////
let inp =document.querySelector("#text");
let p=document.querySelector("p");
inp.addEventListener("input",function(){
    console.log(inp.value);
    // p.innerText = inp.value;
});