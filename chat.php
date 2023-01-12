<?php
// retrieve messages from database
$db = new PDO('mysql:host=localhost;dbname=chat', 'username', 'password');
$stmt = $db->query('SELECT * FROM messages ORDER BY id DESC');
$messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

// handle new message
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $message = json_decode(file_get_contents('php://input'), true);
  $stmt = $db->prepare('INSERT INTO messages (text) VALUES (:text)');
  $stmt->execute(['text' => $message['message']]);
  exit();
}

// format messages for display
$output = '';
foreach ($messages as $message) {
  $output .= '<div>' . $message['text'] . '</div>';
}

echo $output;
