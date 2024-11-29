document.addEventListener("DOMContentLoaded", async () => {
  const setTabStyleButton = document.getElementById("set-favicon");
  const faviconInput = document.getElementById("favicon-input");
  const gameList = document.getElementById("game-list");

  // Load saved tab style settings
  const savedTabTitle = localStorage.getItem("tabTitle");
  const savedFavicon = localStorage.getItem("tabFavicon");
  if (savedTabTitle) document.title = savedTabTitle;
  if (savedFavicon) updateFavicon(savedFavicon);

  // Load saved favorites
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Fetch game data from config.json
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

  // Render games
  if (games.length === 0) {
    gameList.innerHTML = "<p>No games found. Please check the configuration.</p>";
    return;
  }

  games.forEach((game, index) => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    // Check if game is favorited
    const isFavorited = favorites.includes(index);

    card.innerHTML = `
      <img src="${game.thumbnail}" alt="${game.name}">
      <a href="${game.path}" target="_blank" class="game-title">${game.name}</a>
      <button onclick="showCredits('${game.creator}', '${game.link}')">Credits</button>
      <button class="favorite-btn" data-index="${index}" aria-label="Favorite">
        <span>${isFavorited ? "★" : "☆"}</span>
      </button>
    `;

    gameList.appendChild(card);
  });

  // Event Listener: Set Tab Style (Favicon and Title)
  setTabStyleButton.addEventListener("click", async () => {
    const siteURL = faviconInput.value.trim();
    if (!siteURL) {
      alert("Please enter a valid website URL.");
      return;
    }

    let formattedURL = siteURL;
    if (!formattedURL.startsWith("http")) {
      formattedURL = `https://${formattedURL}`;
    }

    try {
      const response = await fetch(formattedURL, { mode: "cors" });
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");

      // Fetch site's title
      const siteTitle = doc.querySelector("title")?.textContent || "Untitled Site";
      document.title = siteTitle;
      localStorage.setItem("tabTitle", siteTitle);

      // Fetch site's favicon
      let faviconLink = doc.querySelector("link[rel='icon'], link[rel='shortcut icon']");
      if (faviconLink) {
        const faviconURL = new URL(faviconLink.getAttribute("href"), formattedURL).href;
        updateFavicon(faviconURL);
        localStorage.setItem("tabFavicon", faviconURL);
      } else {
        alert("No favicon found on the provided site.");
      }
    } catch (error) {
      console.error("Error fetching site data:", error);
      alert("Failed to fetch site information. Please try another URL.");
    }
  });

  // Event Listener: Handle Favorite Button Clicks
  gameList.addEventListener("click", (event) => {
    if (event.target.closest(".favorite-btn")) {
      const button = event.target.closest(".favorite-btn");
      const index = parseInt(button.dataset.index, 10);
      const isFavorited = favorites.includes(index);

      // Toggle favorite state
      if (isFavorited) {
        favorites = favorites.filter((favIndex) => favIndex !== index);
        button.innerHTML = "<span>☆</span>";
      } else {
        favorites.push(index);
        button.innerHTML = "<span>★</span>";
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  });

  // Utility function to update favicon
  function updateFavicon(faviconURL) {
    let faviconLink = document.querySelector("link[rel='icon']");
    if (!faviconLink) {
      faviconLink = document.createElement("link");
      faviconLink.rel = "icon";
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = faviconURL;
    console.log("Favicon updated to:", faviconURL);
  }
});

// Show credits popup
function showCredits(creator, link) {
  alert(`Creator: ${creator}\nOriginal Page: ${link}`);
}
