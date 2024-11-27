document.addEventListener("DOMContentLoaded", async () => {
  const gameList = document.getElementById("game-list");

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
    `;

    gameList.appendChild(card);
  });
});
