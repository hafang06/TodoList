"use strict";

let fs = require('fs');

let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});
let newTask = {
    task: undefined
};
rl.on("line", (task) =>{
    newTask.task = task;
}).on("close", ()=>{
    const myData = JSON.stringify(newTask);
    if(newTask.task === ""){
        console.log("You must write something");
    }
    else{
        fs.writeFile("/Javascript/Todolist app/data.json", myData, function(err){
            if(err){
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }
});
// console.log()
