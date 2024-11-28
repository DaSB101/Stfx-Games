document.addEventListener("DOMContentLoaded", async () => {
  const gameList = document.getElementById("game-list");
  const themeToggle = document.getElementById("theme-toggle");
  const tabNameInput = document.getElementById("tab-name-input");
  const setTabNameBtn = document.getElementById("set-tab-name");
  const faviconUrlInput = document.getElementById("favicon-url-input");
  const setFaviconBtn = document.getElementById("set-favicon");

  // Fetch the game configuration
  const response = await fetch("config.json");
  const games = await response.json();

  // Populate the games
  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    card.innerHTML = `
      <img src="${game.thumbnail}" alt="${game.name}">
      <a href="${game.path}" target="_blank">${game.name}</a>
      <button onclick="showCredits('${game.creator}', '${game.link}')">Credits</button>
    `;

    gameList.appendChild(card);
  });

  // Theme Toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLightMode = document.body.classList.contains("light-mode");
    themeToggle.textContent = isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode";
  });

  // Change Tab Name
  setTabNameBtn.addEventListener("click", () => {
    const tabName = tabNameInput.value;
    if (tabName) {
      document.title = tabName;
    }
  });

  // Change Favicon
  setFaviconBtn.addEventListener("click", () => {
    const faviconUrl = faviconUrlInput.value;
    if (faviconUrl) {
      const faviconLink = document.getElementById("favicon");
      faviconLink.href = faviconUrl;
    }
  });
});

// Function to display credit popup
function showCredits(creator, link) {
  alert(`Game created by ${creator}. Visit the original page here: ${link}`);
}
