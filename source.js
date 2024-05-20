"use strict";

let fs = require('fs');

const newTask = document.getElementById("inputbox");
const container = document.getElementById("container");


function addTask(){
    if(newTask === ""){
        alert("You must write something");
    }
    else{
        fs.writeFile("/data.json", newTask.value, function(err){
            if(err){
                return console.log(err);
            }
            console.log("The file was saved!");
        });
        let li = document.createElement("li");
        li.innerHTML = newTask.value;
        container.appendChild(li);
    }
    newTask.value = "";
}