
async function callUsersApi() {
    try {
     
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      return data;

    } catch(err) {
      console.log(err);
    }
  }

 
  async function displayUserData() {
    const users = await callUsersApi();
    const userListElement = document.getElementById("user-list");
    userListElement.innerHTML = '';
    users.forEach(user => {
      const listItem = document.createElement("li");
      listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
      userListElement.appendChild(listItem);
    });
  }

  document.getElementById("fetch-users-btn").addEventListener("click", function() {
    displayUserData();
  });

  document.getElementById("search-input").addEventListener("input", function() {
    const searchTerm = this.value.trim().toLowerCase(); 
    const userListItems = document.querySelectorAll("#user-list li");
    userListItems.forEach(item => {
      const userName = item.textContent.toLowerCase();
      if (userName.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
