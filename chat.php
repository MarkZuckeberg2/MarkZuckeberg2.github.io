<?php
// Connect to database
$db = new PDO('mysql:host=localhost;dbname=chat', 'username', 'password');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // retrieve messages from database
    $stmt = $db->query('SELECT * FROM messages ORDER BY id DESC');
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // format messages for display
    $output = '';
    foreach ($messages as $message) {
        $output .= '<div>' . $message['text'] . '</div>';
    }
    echo $output;
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // handle new message
    $message = json_decode(file_get_contents('php://input'), true);
    $stmt = $db->prepare('INSERT INTO messages (text) VALUES (:text)');
    $stmt->execute(['text' => $message['message']]);
    exit();
}
