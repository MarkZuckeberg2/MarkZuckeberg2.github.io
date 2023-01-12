// handle form submission
const chatForm = document.getElementById('chat-form');
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // get message text
  const chatInput = document.getElementById('chat-input');
  const message = chatInput.value;
  
  // send message to server
  fetch('chat.php', {
    method: 'POST',
    body: JSON.stringify({ message: message }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then((response) => response.text())
  .then((data) => {
    // add message to chat output
    const chatOutput = document.getElementById('chat-output');
    chatOutput.innerHTML += data;
    
    // clear input
    chatInput.value = '';
  });
});

// retrieve messages from server
setInterval(() => {
  fetch('chat.php')
  .then((response) => response.text())
  .then((data) => {
    const chatOutput = document.getElementById('chat-output');
    chatOutput.innerHTML = data;
  });
}, 1000);
