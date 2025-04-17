const cheatSheets = [
  {
    title: "OWASP Top 10",
    category: "Web Security",
    link: "https://cheatsheetseries.owasp.org/Glossary.html"
  },
  {
    title: "Linux Command Line",
    category: "Operating Systems",
    link: "https://files.fosswire.com/2007/08/fwunixref.pdf"
  },
  {
    title: "Nmap Cheat Sheet",
    category: "Networking",
    link: "https://cheatography.com/egre55/cheat-sheets/nmap/"
  },
  {
    title: "Burp Suite",
    category: "Web Security",
    link: "https://cheatography.com/pentestmonkey/cheat-sheets/burp-suite/"
  },
  {
    title: "Wireshark Filters",
    category: "Networking",
    link: "https://cheatography.com/fredwb/cheat-sheets/wireshark-display-filters/"
  },
  {
    title: "Metasploit",
    category: "Penetration Testing",
    link: "https://cheatography.com/thepwned/cheat-sheets/metasploit/"
  }
];

function renderCheatSheets(filter = "all", search = "") {
  const container = document.getElementById("cheatSheetList");
  container.innerHTML = "";

  const filtered = cheatSheets.filter(item => {
    return (
      (filter === "all" || item.category === filter) &&
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (filtered.length === 0) {
    container.innerHTML = "<p>No cheat sheets found.</p>";
    return;
  }

  filtered.forEach(sheet => {
    const card = document.createElement("div");
    card.className = "cheat-card";
    card.innerHTML = `
      <h3>${sheet.title}</h3>
      <p><strong>Category:</strong> ${sheet.category}</p>
      <a href="${sheet.link}" target="_blank">View Cheat Sheet</a>
    `;
    container.appendChild(card);
  });
}

function populateCategories() {
  const categories = [...new Set(cheatSheets.map(sheet => sheet.category))];
  const select = document.getElementById("categoryFilter");

  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

document.getElementById("categoryFilter").addEventListener("change", () => {
  renderCheatSheets(
    document.getElementById("categoryFilter").value,
    document.getElementById("searchInput").value
  );
});

document.getElementById("searchInput").addEventListener("input", () => {
  renderCheatSheets(
    document.getElementById("categoryFilter").value,
    document.getElementById("searchInput").value
  );
});

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

window.onload = () => {
  populateCategories();
  renderCheatSheets();
};
