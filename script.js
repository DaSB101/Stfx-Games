document.addEventListener("DOMContentLoaded", () => {
  const gamesContainer = document.getElementById("games-container");

  // Fetch the JSON config file
  fetch("config.json")
      .then((response) => {
          if (!response.ok) throw new Error("Failed to load config.json");
          return response.json();
      })
      .then((games) => {
          // Loop through each game in the JSON
          games.forEach((game) => {
              // Create a card
              const card = document.createElement("div");
              card.className = "game-card";

              // Add thumbnail
              const img = document.createElement("img");
              img.src = game.thumbnail;
              img.alt = `${game.name} Thumbnail`;

              // Add game name link
              const nameLink = document.createElement("a");
              nameLink.href = game.path;
              nameLink.textContent = game.name;
              nameLink.target = "_blank";

              // Add creator link
              const creatorLink = document.createElement("a");
              creatorLink.href = game.link;
              creatorLink.textContent = `By ${game.creator}`;
              creatorLink.target = "_blank";

              // Append elements to card
              card.appendChild(img);
              card.appendChild(nameLink);
              card.appendChild(creatorLink);

              // Add card to container
              gamesContainer.appendChild(card);
          });
      })
      .catch((error) => {
          console.error("Error loading games:", error);
          gamesContainer.innerHTML = "<p>Failed to load games. Please check the configuration.</p>";
      });
});
