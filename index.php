<?php
    // Connect to the database
    $conn = mysqli_connect("host", "username", "password", "database");
    // Get the post data from the request
    $username = $_POST['username'];
    $topic = $_POST['topic'];
    $message = $_POST['message'];
    // Insert the post data into the database
    $query = "INSERT INTO posts (username, topic, message) VALUES ('$username', '$topic', '$message')";
    $result = mysqli_query($conn, $query);
?>
