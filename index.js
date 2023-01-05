const form = document.getElementById('post-form');
const postsList = document.getElementById('posts');

// Add an event listener to the form to handle submission
form.addEventListener('submit', (event) => {
  // Prevent the form from reloading the page
  event.preventDefault();

  // Get the values of the form fields
  const name = event.target.elements.name.value;
  const post = event.target.elements.post.value;

  // Create a new post object
  const newPost = {
    name: name,
    post: post
  };

  // Get the existing posts from local storage, or an empty array if there are none
  let posts = JSON.parse(localStorage.getItem('posts')) || [];

  // Add the new post to the array of posts
  posts.unshift(newPost);

  // Save the updated array of posts to local storage
  localStorage.setItem('posts', JSON.stringify(posts));

  // Reset the form fields
  event.target.reset();
});

// When the page loads, get the saved posts from local storage and display them
window.addEventListener('load', () => {
  // Get the saved posts from local storage
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  // Loop through the posts and add them to the page
  for (const post of posts) {
    // Create a new post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <div class="post-header">
        <img src="https://picsum.photos/50/50" alt="${post.name}'s profile picture">
        <h3>${post.name}</h3>
      </div>
      <div class="post-body">
        ${post.post}
      </div>
    `;

    // Add the new post to the list of posts
    postsList.appendChild(postElement);
  }
});
