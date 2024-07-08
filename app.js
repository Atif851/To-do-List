var btn1 = document.getElementById('btn');
var btn2 = btn1.innerText;
console.log(btn1);
var inp=document.getElementById("input");
var list = document.getElementById("list");
 
var edittodo = null;

var addtodo = ()=> {
    btn1.innerText=btn2;
    var getinput = inp.value.trim();
    if (getinput.length<=0) {
        alert("you must wright something thing");
        return false;
    }
    // condition for edit button
    if (btn1.value==="Edit") {
        edittodo.target.previousElementSibling.innerHTML=innerText;
        //   btn1.innerText=btn2;
          inp.value="";
      
      }
  
 // creat element li , p  ;
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.innerHTML = getinput;
    li.appendChild(p);
 // EDIT BUTTON;

 var editbutton  = document.createElement("button");
 editbutton.innerText = "Edit";
 editbutton.classList.add("btn","editbtn");
 li.appendChild(editbutton);
   
//   Delete button;
        var Deletbutton = document.createElement("button");
    Deletbutton.innerText="Remove";
    Deletbutton.classList.add("btn","deletbtn");
    li.appendChild(Deletbutton);

    list.appendChild(li);

    inp.value=""
}
// FUNCTION FOR ADETBTN,DELETEBTN;
var apdatetodo = (e)=>{
// console.log(e.target);
if (e.target.innerHTML==="Remove") {
    list.removeChild(e.target.parentElement);
}

 if(e.target.innerHTML === "Edit"){
    inp.value = e.target.previousElementSibling.innerHTML;
inp.focus();
btn1.innerText="Edit";

edittodo = e;
}}

btn1.addEventListener("click",addtodo);
list.addEventListener("click",apdatetodo);








    //   check 
//     var input = document.getElementById("input");
//     var button_add= document.getElementById("btn");


// button_add.addEventListener("click",function () {
//     var inputgetvalue = input.value;
     
// })
