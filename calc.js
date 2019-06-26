import Queue from './queue.js'

var queue = new Queue();

/* debug
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
console.log(queue.front())
queue.printQueue()
*/



var allRow = document.querySelectorAll(".row");

for (var i = 0 ; i < allRow.length; i++){
    if (allRow[i].hasAttribute("value")){
        allRow[i].setAttribute("onClick","temp(" + allRow[i].value + ")")
    }
}

function temp(n){
    document.querySelector("#number").append(n);
}


// clr button
var clr = document.querySelector("#clear")
clr.addEventListener("click", () => {
    document.querySelector("#number").innerText = "";
    total = 0;
})

document.querySelector("#plus").addEventListener("click", () => {
    
})

/*
document.querySelector("#minus").addEventListener("click", () => {
    
})

document.querySelector("#multiply").addEventListener("click", () => {
    
})

document.querySelector("#divide").addEventListener("click", () => {
    
})
*/