"use strict";
const input = document.getElementById("inputbox");
const container = document.getElementById("container");
function addTask(){
    if(input === ""){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        container.appendChild(li);
    }
    input.value = "";
}