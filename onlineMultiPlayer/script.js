const socket = io("http://localhost:3000")
const messagesContainer = document.querySelector(".messagesContainer")
const messageForm = document.querySelector("#messageForm")
const messageInput = document.querySelector("#messageInput")

const name = prompt("Chose your username")
appendMessage("You joined")
socket.emit("newUser", name)

socket.on("chatMessage", message => {
    appendMessage(`${message.name}: ${message.message}`)
})

socket.on("userConnected", name => {
    appendMessage(`${name} connected`)
})
socket.on("userDisconnected", name => {
    appendMessage(`${name} disconnected`)
})

messageForm.addEventListener("submit", e=>{
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`You: ${message}`)
    socket.emit("sendMessage", message)
    messageInput.value = ""
})

function appendMessage(message) {
    const messageElement = document.createElement("div")
    messageElement.innerText = message
    messagesContainer.append(messageElement)
}