<?php
    // Connect to the database
    $conn = mysqli_connect("host", "username", "password", "database");
    // Get the posts from the database
    $query = "SELECT * FROM posts ORDER BY id DESC";
    $result = mysqli_query($conn, $query);
    $posts = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // Convert the posts to a JSON object
    $json = json_encode($posts);
    echo $json;
?>
