
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
