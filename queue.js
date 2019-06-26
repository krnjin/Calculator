export default class Queue{
    constructor(){
        this.items = []
    }

    // functions to be implmented
    // enqueue(item) : inserts item at the end of the queue
    // dequeue() : removes the item 
    // front()
    // isEmpty()
    // printQueue()

    enqueue(n){
        this.items.push(n)
    }

    dequeue(){
        if(this.length == 0){
            return "Queue is empty"
        }
        return this.items.shift()
    }

    front(){
        if(this.length == 0){
            return "Queue is empty"
        }
        return this.items[0]
    }

    printQueue(){
        for (var i = 0; i < this.items.length; i++){
            console.log(this.items[i])
        }
    }
}
