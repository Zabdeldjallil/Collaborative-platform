console.log('coucou')
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
    users.forEach(user => {
      const listItem = document.createElement("li");
      listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
      userListElement.appendChild(listItem);
    });
  }

  displayUserData();
