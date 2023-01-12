<script>
    // Get the form element
    var form = document.querySelector('form');
    // Add an event listener to the form
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Get the post data from the form
        var username = document.querySelector('#username').value;
        var topic = document.querySelector('#topic').value;
        var message = document.querySelector('#message').value;
        // Send the post data to the PHP script
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'save-post.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // The post was saved successfully
                // Clear the form fields
                document.querySelector('#username').value = '';
                document.querySelector('#topic').value = '';
                document.querySelector('#message').value = '';
                // Display the post on the page
                var post = document.createElement('div');
                post.innerHTML = '<h3>' + topic + '</h3><p>' + message + '</p><p>By: ' + username + '</p>';
                document.querySelector('#posts').appendChild(post);
            }
        };
        xhr.send('username=' + username + '&topic=' + topic + '&message=' + message);
    });
</script>
