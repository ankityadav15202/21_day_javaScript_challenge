class Node{
    constructor(value){
        this.values = value
        this.next = null
    }
}

const node1 = new Node(1)
const node2 = new Node(2)

node1.next = node2

console.log("node 1: ",node1.values);
console.log("node 1: ",node1.next.values);

// Task 3: Implement a Stack class with methods push, add element, pop (remove element), and peek (view the top element).

class Stack{
    constructor(){
        this.list =[]
    }

    push(elements){
        this.list.push(elements)
    }

    add(elements){
        this.push(elements)
    }

    pop(){
        if(this.isEmpty()){
            return null
        }else{
            return this.list.pop() //removes ans returns last element
        }
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.list[this.list.length-1]
    }
    isEmpty(){
        return this.list.length === 0
    }
}

const myStack = new Stack()

myStack.push(10)
myStack.push(20)
myStack.push(30)

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(input){
    this.stack = new Stack()

    for(let st of input){
        stack.push(st)
    }

    let reversed = ''
    while(!stack.isEmpty()){
        reversed += stack.pop()
    }

    

    return reversed
}

const OriginalString = "hello world"
const reversedString = reverseString(OriginalString)
console.log(reversedString);
