// task 1
const button = document.getElementById("myButton");
const paragraph = document.getElementById("myParagraph");

button.addEventListener("click", () => {
  paragraph.textContent = "The button was clicked!";
});

// task 2

let img = document.getElementById('myImage')
img.addEventListener('dblclick',()=>{
    if (img.style.display == "none") {
        img.style.display = "block"
    }else{
        img.style.display = "none"
    }
})

// task 3

let mousehover = document.getElementById('myDiv')

mousehover.addEventListener('mouseover',()=>{
    mousehover.style.background = "red"
})

// Task 4

mousehover.addEventListener('mouseout',()=>{
    mousehover.style.background='lightgrey'
})

// task 5   
let value = []
let inputField = document.getElementById('myInput')
para = document.getElementById('myparagraph')
inputField.addEventListener('keydown',(e)=>{

    value   =  e.key == " " ? " space ": e.key
    // value += e.key
    console.log(value)
})

// task 6

inputField.addEventListener("keyup", () => {
    para.textContent = "Current value: " + inputField.value; 
  });


// task 7

let form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    event.preventDefault()

    let name = document.getElementById('name').value

    console.log(`From details\nname : ${name}`);
})

// task 8       
const select = document.getElementById('mySelect');
const selectedValueParagraph = document.getElementById('selectedValue');
select.addEventListener('change', () => {
  selectedValueParagraph.textContent = select.value;
});

// Task 9
let list = document.querySelector('#myList'); // Use the ID selector
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log(e.target.textContent); 
    }
});

// Task 10

// Task 10: Event Listener for Dynamically Added Children
const container = document.getElementById('container');
container.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') { // Check if the clicked element is a button
    console.log("Button clicked!");
    console.log(event.target.textContent);
  }
});

// Example: Adding buttons dynamically
const buttons = ["Button 1", "Button 2", "Button 3"];
buttons.forEach(buttonLabel => {
  const button = document.createElement('button');
  button.textContent = buttonLabel;
  container.appendChild(button);
});
