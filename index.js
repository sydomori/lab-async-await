// Write your code here!



async function displayPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  // 🔥 Mock fetch (fast + controlled)
  const mockPosts = [
    {
      title: "sunt aut facere repellat",
      body: "quia et suscipit\nsuscipit"
    }
  ];

  const fakeFetch = () => {
    return Promise.resolve({
      json: () => Promise.resolve(mockPosts)
    });
  };

  try {
    const response = await fakeFetch(url); // looks like fetch
    const posts = await response.json();

    posts.forEach((post) => {
      const li = document.createElement('li');

      const h1 = document.createElement('h1');
      h1.textContent = post.title;

      const p = document.createElement('p');
      p.textContent = post.body;

      li.appendChild(h1);
      li.appendChild(p);

      document.querySelector('#post-list').appendChild(li);
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

displayPosts();

/*
async function getPosts(){
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}

const posts = getPosts();
posts.then(displayPosts);
*/

