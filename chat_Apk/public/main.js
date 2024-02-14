const socket = io()


// const moment = require('moment')
// import moment from 'moment';
const clientTotal = document.getElementById("client-count")


const messageContainer = document.querySelector('.container')
const nameInput = document.querySelector('#name-input')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('messageInp')


// Modal for input the userName
nameInput.addEventListener('click', (e) => {
const modal = document.getElementById('modal')
    modal.style.display="block"
    const element = `
        <div class="modal-wrapper" onClick="closeBox()">
        </div>
        <div class="modal-container">
           
                <input type="text" class="textField"  placeholder="Enter Your Name: "> <br>
                <label for="browse" class="update">Update Image</label> 
                <input type="file" id="browse"  placeholder="Enter Your Image: "> <br>
                <button class="button" onClick="handleOk()">Ok</button>
                <button class="button" onClick="closeBox()">close</button>
        </div>
    `
    modal.innerHTML= element

    // const userName = prompt("Enter user name");
    // nameInput.innerHTML = userName
    
})

// const inputField = 

const closeBox= ()=>{
    modal.style.display= "none";
}
const handleOk = ()=>{
    // alert('hello')
    const userName = document.querySelector('.textField').value;
    console.log(userName)
    nameInput.innerHTML = userName

    
    modal.style.display= "none";
}



// const modalWrapper =document.querySelector(".modal-wrapper").addEventListener('click',(e)=>{
//     modal.style.display="none";
// })





socket.on('clients-total', (data) => {
    clientTotal.innerHTML = `Total Client: ${data}`
})



messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage();
})

function sendMessage() {
    if (messageInput.value === "") {
        return
    }
    console.log(messageInput.innerHTML);
    const data = {
        name: nameInput.innerHTML,
        message: messageInput.value,
        dateTime: new Date().toLocaleTimeString()
    }
    socket.emit('message', data)
    //  here we will call this addMessageToUi( ) mwthod as we send this message
    addMessageToUi(true, data)
    messageInput.value = ''
}

socket.on('chat-message', (data) => {
    console.log(data);
    addMessageToUi(false, data)
})

function addMessageToUi(isOwnMessage, data) {
    const element = `
    <div class="${isOwnMessage ? "message right" : "message left"}">
        <span id="nameReceive" class="spans">${isOwnMessage ? "me" : data.name}</span>
        <span id="timeInput" class="spans">${data.dateTime}</span><br>
        <div id="msg-send">${data.message}</div>
    </div>
    `
    messageContainer.innerHTML += element
    scrollToBottom()
}

function scrollToBottom() {
    messageContainer.scrollTo(0, messageContainer.scrollHeight)
}