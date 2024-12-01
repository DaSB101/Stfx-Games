const games = [
  { name: "Stranded On A Raft", image: "https://example.com/raft.jpg", url: "https://example.com/raft.html" }
];

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderGames() {
  const gameList = document.getElementById("gameList");
  const favoritesList = document.getElementById("favoritesList");

  gameList.innerHTML = "";
  favoritesList.innerHTML = "";

  favorites.forEach((fav) => {
      const card = createGameCard(fav, true);
      favoritesList.appendChild(card);
  });

  games.forEach((game) => {
      const card = createGameCard(game, false);
      gameList.appendChild(card);
  });
}

function createGameCard(game, isFavorite) {
  const card = document.createElement("div");
  card.className = "game-card";

  const img = document.createElement("img");
  img.src = game.image;
  img.alt = game.name;

  const title = document.createElement("h3");
  title.textContent = game.name;

  const playButton = document.createElement("button");
  playButton.textContent = "Play";
  playButton.onclick = () => window.location.href = game.url;

  const favButton = document.createElement("button");
  favButton.textContent = isFavorite ? "Unfavorite" : "Favorite";
  favButton.onclick = () => toggleFavorite(game);

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(playButton);
  card.appendChild(favButton);

  return card;
}

function toggleFavorite(game) {
  const index = favorites.findIndex((fav) => fav.name === game.name);
  if (index > -1) {
      favorites.splice(index, 1);
  } else {
      favorites.push(game);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderGames();
}

function setTabStyle() {
  const siteUrl = document.getElementById("siteUrlInput").value.trim();
  if (!siteUrl) {
      alert("Please enter a valid URL");
      return;
  }

  fetch(siteUrl)
      .then((response) => response.text())
      .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const favicon = doc.querySelector("link[rel~='icon']")?.href;
          const title = doc.querySelector("title")?.textContent || "Unknown Site";

          if (favicon) {
              document.title = title;
              const link = document.createElement("link");
              link.rel = "icon";
              link.href = favicon;
              document.head.appendChild(link);
              alert("Tab style set successfully!");
          } else {
              alert("Failed to fetch site information. Please try another URL.");
          }
      })
      .catch(() => alert("Failed to fetch site information. Please try another URL."));
}

renderGames();
