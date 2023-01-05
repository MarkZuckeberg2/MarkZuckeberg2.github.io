<!-- posts.php -->
<!doctype html>
<html>
<head>
  <title>Posts</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign Up</a></li>
        <li><a href="/posts">Posts</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Posts</h1>
    <ul>
      <?php
        // Connect to the database
        $db = mysqli_connect('localhost', 'username', 'password', 'database');

        // Get the posts from the database
        $query = "SELECT * FROM posts";
        $result = mysqli_query($db, $query);
        while ($row = mysqli_fetch_
