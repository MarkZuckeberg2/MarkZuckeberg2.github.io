
// send message to server
function sendMessage() {
  // get message text
  var message = document.getElementById('message-input').value;

  // send message to server
  // ...

  // clear message input
  document.getElementById('message-input').value = '';
}

// retrieve and display messages from server
function getMessages() {
  // retrieve messages from server
  // ...

  // display messages
  // ...
}

// listen for form submission
document.getElementById('message-form').onsubmit = function(event) {
  event.preventDefault();
  sendMessage();
};

// get initial set of messages
getMessages();

// update messages every 10 seconds
setInterval(getMessages, 10000);

// retrieve and display messages from server
function getMessages() {
  // retrieve messages from server
  fetch('/messages')
    .then(response => response.json())
    .then(messages => {
      // clear existing messages
      document.getElementById('messages').innerHTML = '';

      // display messages
      messages.forEach(message => {
        var messageElem = document.createElement('div');
        messageElem.textContent = message;
        document.getElementById('messages').appendChild(messageElem);
      });
    });
}
