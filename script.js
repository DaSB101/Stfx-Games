// Load games from JSON configuration
async function loadGames() {
  const response = await fetch('config.json');
  const games = await response.json();
  const gamesList = document.getElementById('games-list');
  gamesList.innerHTML = '';

  games.forEach(game => {
    const gameCard = createGameCard(game, false);
    gamesList.appendChild(gameCard);
  });
}

// Create a game card
function createGameCard(game, isFavorite) {
  const gameCard = document.createElement('div');
  gameCard.className = 'game-card';

  const thumbnail = document.createElement('img');
  thumbnail.src = game.thumbnail;
  thumbnail.alt = `${game.name} thumbnail`;

  const title = document.createElement('h3');
  title.textContent = game.name;

  const playLink = document.createElement('a');
  playLink.href = game.path;
  playLink.textContent = 'Play';

  const creditsLink = document.createElement('a');
  creditsLink.href = game.link;
  creditsLink.textContent = 'Credits';
  creditsLink.style.marginLeft = '10px';

  const favoriteButton = document.createElement('button');
  favoriteButton.className = 'favorite-button';
  favoriteButton.textContent = isFavorite ? 'Remove from Favorites' : 'Add to Favorites';

  favoriteButton.addEventListener('click', () => {
    if (isFavorite) {
      removeFavorite(game);
    } else {
      addFavorite(game);
    }
  });

  gameCard.appendChild(thumbnail);
  gameCard.appendChild(title);
  gameCard.appendChild(playLink);
  gameCard.appendChild(creditsLink);
  gameCard.appendChild(favoriteButton);

  return gameCard;
}

// Add a game to favorites
function addFavorite(game) {
  const favoritesList = document.getElementById('favorites-list');
  const gameCard = createGameCard(game, true);
  favoritesList.appendChild(gameCard);
}

// Remove a game from favorites
function removeFavorite(game) {
  const favoritesList = document.getElementById('favorites-list');
  const children = Array.from(favoritesList.children);
  for (const child of children) {
    const title = child.querySelector('h3').textContent;
    if (title === game.name) {
      favoritesList.removeChild(child);
      break;
    }
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  loadGames();

  document.getElementById('set-tab-button').addEventListener('click', () => {
    const tabInput = document.getElementById('tab-input').value;
    if (tabInput) {
      document.title = tabInput;
    }
  });
});
