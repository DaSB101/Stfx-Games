document.addEventListener("DOMContentLoaded", async () => {
  const gameList = document.getElementById("game-list");
  const favoritesList = document.getElementById("favorites-list");
  const setTabStyleButton = document.getElementById("set-favicon");
  const faviconInput = document.getElementById("favicon-input");

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

  // Render games and favorites
  renderGames(games, gameList, favoritesList, favorites);

  // Event Listener: Set Tab Style
  setTabStyleButton.addEventListener("click", async () => {
    const siteURL = faviconInput.value.trim();
    if (!siteURL) {
      alert("Please enter a valid website URL.");
      return;
    }

    let formattedURL = siteURL.startsWith("http") ? siteURL : `https://${siteURL}`;

    try {
      const response = await fetch(formattedURL, { mode: "cors" });
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");

      // Fetch title and favicon
      const siteTitle = doc.querySelector("title")?.textContent || "Untitled Site";
      const faviconLink = doc.querySelector("link[rel='icon'], link[rel='shortcut icon']");

      if (faviconLink) {
        const faviconURL = new URL(faviconLink.getAttribute("href"), formattedURL).href;
        document.title = siteTitle;
        updateFavicon(faviconURL);

        // Save in localStorage
        localStorage.setItem("tabTitle", siteTitle);
        localStorage.setItem("tabFavicon", faviconURL);
      } else {
        alert("No favicon found on the provided site.");
      }
    } catch (error) {
      console.error("Error fetching site data:", error);
      alert("Failed to fetch site information. Please try another URL.");
    }
  });

  function renderGames(games, gameList, favoritesList, favorites) {
    gameList.innerHTML = "";
    favoritesList.innerHTML = "";

    games.forEach((game, index) => {
      const card = createGameCard(game, index, favorites.includes(index));
      if (favorites.includes(index)) {
        favoritesList.appendChild(card);
      } else {
        gameList.appendChild(card);
      }
    });
  }

  function createGameCard(game, index, isFavorited) {
    const card = document.createElement("div");
    card.classList.add("game-card");

    card.innerHTML = `
      <img src="${game.thumbnail}" alt="${game.name}">
      <a href="${game.path}" target="_blank" class="game-title">${game.name}</a>
      <button onclick="showCredits('${game.creator}', '${game.link}')">Credits</button>
      <button class="favorite-btn" data-index="${index}" aria-label="Favorite">
        <span>${isFavorited ? "★" : "☆"}</span>
      </button>
    `;

    const favoriteBtn = card.querySelector(".favorite-btn");
    favoriteBtn.addEventListener("click", () => toggleFavorite(index));

    return card;
  }

  function toggleFavorite(index) {
    if (favorites.includes(index)) {
      favorites = favorites.filter((favIndex) => favIndex !== index);
    } else {
      favorites.push(index);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderGames(games, gameList, favoritesList, favorites);
  }

  function updateFavicon(faviconURL) {
    let faviconLink = document.querySelector("link[rel='icon']");
    if (!faviconLink) {
      faviconLink = document.createElement("link");
      faviconLink.rel = "icon";
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = faviconURL;
  }
});

function showCredits(creator, link) {
  alert(`Creator: ${creator}\nOriginal Page: ${link}`);
}
