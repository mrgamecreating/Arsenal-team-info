const players = [
  // Goalkeepers
  { name: "David Raya", pos: "Goalkeeper", age: 30, num: 1, country: "🇪🇸 Spain", image: "raya.jpg" },
  { name: "Kepa Arrizabalaga", pos: "Goalkeeper", age: 31, num: 13, country: "🇪🇸 Spain", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kepa_Arrizabalaga_2018.jpg/800px-Kepa_Arrizabalaga_2018.jpg" },
  { name: "Illan Meslier", pos: "Goalkeeper", age: 26, num: 30, country: "🇫🇷 France", image: "" },
  { name: "Tommy Setford", pos: "Goalkeeper", age: 20, num: 35, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", image: "" },

  // Defenders
  { name: "William Saliba", pos: "Defender", age: 25, num: 2, country: "🇫🇷 France", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/William_Saliba_2022.jpg/800px-William_Saliba_2022.jpg" },
  { name: "Ben White", pos: "Defender", age: 28, num: 4, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ben_White_2021.jpg/800px-Ben_White_2021.jpg" },
  { name: "Gabriel Magalhães", pos: "Defender", age: 28, num: 6, country: "🇧🇷 Brazil", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Gabriel_Magalh%C3%A3es_2022.jpg/800px-Gabriel_Magalh%C3%A3es_2022.jpg" },
  { name: "Jurriën Timber", pos: "Defender", age: 25, num: 12, country: "🇳🇱 Netherlands", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jurrien_Timber_2022.jpg/800px-Jurrien_Timber_2022.jpg" },
  { name: "Riccardo Calafiori", pos: "Defender", age: 24, num: 33, country: "🇮🇹 Italy", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Riccardo_Calafiori_2024.jpg/800px-Riccardo_Calafiori_2024.jpg" },
  { name: "Myles Lewis-Skelly", pos: "Defender", age: 19, num: 49, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", image: "" },
  { name: "Marli Salmon", pos: "Defender", age: 16, num: 89, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", image: "" },

  // Midfielders
  { name: "Martin Ødegaard", pos: "Midfielder", age: 27, num: 8, country: "🇳🇴 Norway", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Martin_%C3%98degaard_2022.jpg/800px-Martin_%C3%98degaard_2022.jpg" },
  { name: "Eberechi Eze", pos: "Midfielder", age: 28, num: 10, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", image: "eze.jpg" },
  { name: "Ethan Nwaneri (On Loan)", pos: "Midfielder", age: 19, num: 22, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", image: "nwaneri.jpg" },
  { name: "Mikel Merino", pos: "Midfielder", age: 30, num: 23, country: "🇪🇸 Spain", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Mikel_Merino_2021.jpg/800px-Mikel_Merino_2021.jpg" },
  { name: "Declan Rice", pos: "Midfielder", age: 27, num: 41, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Declan_Rice_2022.jpg/800px-Declan_Rice_2022.jpg" },

  // Forwards
  { name: "Bukayo Saka", pos: "Forward", age: 24, num: 7, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bukayo_Saka_2022.jpg/800px-Bukayo_Saka_2022.jpg" },
  { name: "Gabriel Jesus", pos: "Forward", age: 29, num: 9, country: "🇧🇷 Brazil", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gabriel_Jesus_2018.jpg/800px-Gabriel_Jesus_2018.jpg" },
  { name: "Gabriel Martinelli", pos: "Forward", age: 25, num: 11, country: "🇧🇷 Brazil", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Gabriel_Martinelli_2022.jpg/800px-Gabriel_Martinelli_2022.jpg" },
  { name: "Viktor Gyökeres", pos: "Forward", age: 28, num: 14, country: "🇸🇪 Sweden", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Viktor_Gy%C3%B6keres_2023.jpg/800px-Viktor_Gy%C3%B6keres_2023.jpg" },
  { name: "Kai Havertz", pos: "Forward", age: 27, num: 29, country: "🇩🇪 Germany", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kai_Havertz_2019.jpg/800px-Kai_Havertz_2019.jpg" },
  { name: "Max Dowman", pos: "Forward", age: 16, num: 56, country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", image: "" }
];

const grid = document.getElementById("squad-grid");
const searchInput = document.getElementById("search-input");
const filterBtns = document.querySelectorAll(".filter-btn");

let activePlayerNumber = null;
let currentPositionFilter = "All";
let currentSearchQuery = "";

// Render Player Cards dynamically
function renderCards() {
  grid.innerHTML = ""; 

  const filteredPlayers = players.filter((p) => {
    const matchesPosition = currentPositionFilter === "All" || p.pos === currentPositionFilter;
    const matchesSearch = p.name.toLowerCase().includes(currentSearchQuery.toLowerCase());
    return matchesPosition && matchesSearch;
  });

  if (filteredPlayers.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #a0a6b5;">No players found.</p>`;
    return;
  }

  filteredPlayers.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    // Highlight card if it was active
    if (activePlayerNumber === p.num) {
      card.style.outline = "3px solid #DB0007";
      card.style.outlineOffset = "2px";
    }

    const imageHTML = p.image 
      ? `<img src="${p.image}" alt="${p.name}">`
      : `<div class="placeholder-icon">
           <svg viewBox="0 0 24 24"><path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3Z"/></svg>
           <span class="placeholder-text">Click card & Press Ctrl+V</span>
         </div>`;

    card.innerHTML = `
      <div class="squad-number">#${p.num}</div>
      <div class="photo-frame">
        ${imageHTML}
      </div>
      <div class="card-body">
        <div class="player-name">${p.name}</div>
        <div class="info-row"><span>Age</span><strong>${p.age}</strong></div>
        <div class="info-row"><span>Country</span><strong>${p.country}</strong></div>
        <span class="position-badge">${p.pos}</span>
      </div>
    `;

    // Select card and keep track of squad number
    card.addEventListener("click", () => {
      document.querySelectorAll(".card").forEach((c) => (c.style.outline = "none"));
      card.style.outline = "3px solid #DB0007";
      card.style.outlineOffset = "2px";
      activePlayerNumber = p.num;
    });

    grid.appendChild(card);
  });
}

// Search Filter Listener
searchInput.addEventListener("input", (e) => {
  currentSearchQuery = e.target.value;
  renderCards();
});

// Position Button Listener
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentPositionFilter = btn.getAttribute("data-pos");
    renderCards();
  });
});

// Clipboard Image Paste (Ctrl + V)
window.addEventListener("paste", (e) => {
  if (activePlayerNumber === null) {
    alert("Please click on a player card first, then paste!");
    return;
  }

  const items = (e.clipboardData || e.originalEvent.clipboardData).items;
  let imageFound = false;

  for (let item of items) {
    if (item.type.indexOf("image") === 0) {
      const blob = item.getAsFile();
      const reader = new FileReader();

      reader.onload = (event) => {
        // Find player in array and update their image property
        const targetPlayer = players.find((p) => p.num === activePlayerNumber);
        if (targetPlayer) {
          targetPlayer.image = event.target.result;
          renderCards(); // Re-render so the new image persists
        }
      };

      reader.readAsDataURL(blob);
      imageFound = true;
      break;
    }
  }

  if (!imageFound) {
    alert("No image found in clipboard! Right-click an image and select 'Copy Image' or take a screenshot, then try Ctrl+V again.");
  }
});

// Initial Render
renderCards();
