document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var greetingMessage = 'Hello, ' + name + '!';
    document.getElementById('greeting').innerHTML = greetingMessage;
});


let radioButtons = document.getElementsByClassName('radioBtn');
let radios = document.querySelectorAll('input[type="radio"]');

function reset(){
    let resetBtn = document.getElementsByClassName('resetBtn');
    radios.forEach((radio => {
        radio.checked = false;
    }))
    let order = [];
    document.getElementById('order-info').textContent = order;

    submittedOrder.textContent = "";
}

const submittedOrder = document.getElementById('order-submitted');

function submitOrder(){
    let order = [];
    radios.forEach(radio => {
        if (radio.checked){
            order.push(radio.nextElementSibling.textContent)
        }
    });
    document.getElementById('order-info').textContent = order;
    submittedOrder.textContent = "Your order has been submitted! 🍔 ";

}

const customItemTyped = "";

let customRadio = "";
let customProtein = document.getElementById("customProtein");
let customVeg = document.getElementById("customVeg");
let customSauce = document.getElementById("customSauce");
let customBun = document.getElementById("customBun");


//Function to show each burger image item
function displayBurger(){
    let burgerContainer = document.getElementsByClassName("burger-image");
    
}


function displayCustomItems(){
    let customItemsButton = document.querySelectorAll(".customRadioButton");
    let customTextBox = document.querySelectorAll(".customTextbox");
    
    for(let i= 0; i < customItemsButton.length; i++){
        customItemsButton[i].addEventListener('click', function showTextBox(){
            let textBox = customTextBox[i];
            textBox.classList.toggle('displayTextbox')
        });
    }
}

displayCustomItems();


