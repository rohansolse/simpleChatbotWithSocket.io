var socket = io.connect("http://localhost:8000");

var message = document.getElementById("message");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");
var handle = document.getElementById("handle");
var btn = document.getElementById("send");


message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value)
})

btn.addEventListener('click',()=>{
    socket.emit('chat',{message:message.value,handle:handle.value})
})

socket.on('typing',(handle)=>{
    feedback.innerHTML=`<p><em>${handle} is typing</em></p>`
})

socket.on('chat',(data)=>{
    feedback.innerHTML='';
    output.innerHTML+=`<p><strong>${data.handle}:</strong> ${data.message}</p>`
})