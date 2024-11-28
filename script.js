document.addEventListener("DOMContentLoaded", async () => {
  const toggleModeButton = document.getElementById("toggle-mode");
  const setTabNameButton = document.getElementById("set-tab-name");
  const tabNameInput = document.getElementById("tab-name-input");
  const setFaviconButton = document.getElementById("set-favicon");
  const faviconInput = document.getElementById("favicon-input");
  const gameList = document.getElementById("game-list");

  // 1. Fetch game data from config.json
  let games = [];
  try {
    const response = await fetch("./config.json");
    if (!response.ok) throw new Error("Failed to fetch config.json");
    games = await response.json();
  } catch (error) {
    console.error("Error loading game data:", error);
    gameList.innerHTML = "<p>Error loading game list. Please try again later.</p>";
    return;
  }

  // 2. Render games
  if (games.length === 0) {
    gameList.innerHTML = "<p>No games found. Please check the configuration.</p>";
    return;
  }

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

  // 3. Toggle Light/Dark Mode
  toggleModeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggleModeButton.textContent = document.body.classList.contains("light-mode")
      ? "Switch to Dark Mode"
      : "Switch to Light Mode";
  });

  // 4. Set Tab Name
  setTabNameButton.addEventListener("click", () => {
    const tabName = tabNameInput.value.trim();
    if (tabName) {
      document.title = tabName;
    } else {
      alert("Please enter a valid tab name.");
    }
  });

  // 5. Set Favicon
  setFaviconButton.addEventListener("click", () => {
    const faviconURL = faviconInput.value.trim();
    if (faviconURL) {
      const faviconLink = document.querySelector("link[rel='icon']");
      if (faviconLink) {
        faviconLink.href = faviconURL;
      } else {
        const newFavicon = document.createElement("link");
        newFavicon.rel = "icon";
        newFavicon.href = faviconURL;
        document.head.appendChild(newFavicon);
      }
    } else {
      alert("Please enter a valid favicon URL.");
    }
  });
});

// Show credits popup
function showCredits(creator, link) {
  alert(`Creator: ${creator}\nOriginal Page: ${link}`);
}
