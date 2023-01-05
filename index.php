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
