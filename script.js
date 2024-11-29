document.addEventListener("DOMContentLoaded", async () => {
  const setTabNameButton = document.getElementById("set-tab-name");
  const setFaviconButton = document.getElementById("set-favicon");
  const faviconInput = document.getElementById("favicon-input");
  const tabNameInput = document.getElementById("tab-name-input");
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

  // 3. Set Tab Name (Custom)
  setTabNameButton.addEventListener("click", () => {
    const tabName = tabNameInput.value.trim();
    if (tabName) {
      document.title = tabName;
    } else {
      alert("Please enter a valid tab name.");
    }
  });

  // 4. Set Favicon and Tab Name Dynamically from URL
  setFaviconButton.addEventListener("click", async () => {
    const siteURL = faviconInput.value.trim();
    if (!siteURL) {
      alert("Please enter a valid website URL.");
      return;
    }

    try {
      const response = await fetch(siteURL, { mode: "cors" }); // Attempt to fetch the site
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");

      // Fetch site's title
      const siteTitle = doc.querySelector("title")?.textContent || "Untitled Site";
      document.title = siteTitle;

      // Fetch site's favicon
      let faviconLink = doc.querySelector("link[rel='icon'], link[rel='shortcut icon']");
      if (faviconLink) {
        const faviconURL = new URL(faviconLink.getAttribute("href"), siteURL).href;
        updateFavicon(faviconURL);
      } else {
        alert("No favicon found on the provided site.");
      }
    } catch (error) {
      console.error("Error fetching site data:", error);
      alert("Failed to fetch site information. Please try another URL.");
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
