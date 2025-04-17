const cheatSheets = [
  {
    title: "OWASP Top 10",
    category: "General",
    description: "A list of the top 10 most critical security risks to web applications.",
    url: "https://owasp.org/www-project-top-ten/"
  },
  {
    title: "NIST Cybersecurity Framework",
    category: "Frameworks",
    description: "A guide for improving the cybersecurity posture of an organization.",
    url: "https://www.nist.gov/cyberframework"
  },
  {
    title: "SSL/TLS Best Practices",
    category: "Protocols",
    description: "Best practices for configuring SSL and TLS for secure communications.",
    url: "https://www.sslshopper.com/ssl-tls-best-practices.html"
  },
  {
    title: "Password Security Guidelines",
    category: "Authentication",
    description: "Recommendations for creating and managing secure passwords.",
    url: "https://www.cyber.gov.au/acsc/view-all-content/publications/passwords"
  }
  // Add more cheat sheets here
];

// Populate the category dropdown
const categories = new Set();
cheatSheets.forEach(sheet => categories.add(sheet.category));
const categorySelect = document.getElementById('categoryFilter');
categories.forEach(category => {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
});

// Function to render cheat sheets based on search and category filter
function renderCheatSheets() {
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const categoryValue = categorySelect.value;

  const filteredCheatSheets = cheatSheets.filter(sheet => {
    const matchesSearch = sheet.title.toLowerCase().includes(searchValue) || sheet.description.toLowerCase().includes(searchValue);
    const matchesCategory = categoryValue === 'all' || sheet.category === categoryValue;
    return matchesSearch && matchesCategory;
  });

  const cheatSheetList = document.getElementById('cheatSheetList');
  cheatSheetList.innerHTML = '';

  filteredCheatSheets.forEach(sheet => {
    const sheetDiv = document.createElement('div');
    sheetDiv.classList.add('cheatSheetItem');
    sheetDiv.innerHTML = `
      <h3>${sheet.title}</h3>
      <p>${sheet.description}</p>
      <a href="${sheet.url}" target="_blank">View Cheat Sheet</a>
    `;
    cheatSheetList.appendChild(sheetDiv);
  });
}

// Event listeners for search and filter
document.getElementById('searchInput').addEventListener('input', renderCheatSheets);
categorySelect.addEventListener('change', renderCheatSheets);

// Dark mode toggle
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Initial render
renderCheatSheets();
