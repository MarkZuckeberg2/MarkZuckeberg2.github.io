<?php

// connect to database
$host = "localhost";
$user = "username";
$password = "password";
$dbname = "database_name";

$conn = mysqli_connect($host, $user, $password, $dbname);

// check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// retrieve messages
$sql = "SELECT message FROM messages";
$result = mysqli_query($conn, $sql);

// create array to hold messages
$messages = array();

// add each message to array
while ($row = mysqli_fetch_assoc($result)) {
  $messages[] = $row['message'];
}

// return messages as JSON object
header('Content-Type: application/json');
echo json_encode($messages);

// close database connection
mysqli_close($conn);

?>

<?php

// connect to database
$host = "localhost";
$user = "username";
$password = "password";
$dbname = "database_name";

$conn = mysqli_connect($host, $user, $password, $dbname);

// check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// retrieve messages
$sql = "SELECT sender, message FROM messages";
$result = mysqli_query($conn, $sql);

// create array to hold messages
$messages = array();

// add each message to array
while ($row = mysqli_fetch_assoc($result)) {
  $messages[] = array(
    'sender' => $row['sender'],
    'message' => $row['message']
  );
}

// return messages as JSON object
header('Content-Type: application/json');
echo json_encode($messages);

// close database connection
mysqli_close($conn);

?>

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
        messageElem.innerHTML = `<b>${message.sender}:</b> ${message.message}`;
        document.getElementById('messages').appendChild(messageElem);
      });
    });
}
