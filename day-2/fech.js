
async function fetchUserData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Серверге сұраныс қате қайтарды");
      }
      return await response.json();
    } catch (error) {
      console.error("Қате орын алды!", error);
      return [];
    }
  }
  

  function displayUsers(users) {
    const container = document.getElementById("user-container");
    container.innerHTML = ""; 
  
    if (users.length === 0) {
      container.innerHTML = "<p>Қолданушы деректері жоқ</p>";
      return;
    }
  
    users.forEach(user => {
      const userBlock = document.createElement("div");
      userBlock.className = "user-block";
      userBlock.innerHTML = `
        <p><strong>Қолданушы аты:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
      `;
      container.appendChild(userBlock);
    });
  }
  
  
  async function init() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const users = await fetchUserData(url);
    displayUsers(users);
  }
  
 
  document.addEventListener("DOMContentLoaded", init);
  