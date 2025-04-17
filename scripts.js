const resources = [
  {
    title: "OWASP Top 10",
    category: "Cheat Sheets",
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
    category: "Tools",
    description: "Best practices for configuring SSL and TLS for secure communications.",
    url: "https://www.sslshopper.com/ssl-tls-best-practices.html"
  },
  {
    title: "Password Security Guidelines",
    category: "Cheat Sheets",
    description: "Recommendations for creating and managing secure passwords.",
    url: "https://www.cyber.gov.au/acsc/view-all-content/publications/passwords"
  },
  {
    title: "Metasploit Framework",
    category: "Tools",
    description: "An open-source platform for developing, testing, and executing exploits.",
    url: "https://www.metasploit.com/"
  },
  {
    title: "Kali Linux",
    category: "Tools",
    description: "A popular open-source Linux distribution used for penetration testing and security auditing.",
    url: "https://www.kali.org/"
  },
  {
    title: "Security News from The Hacker News",
    category: "News",
    description: "Stay up-to-date with the latest cybersecurity news and updates.",
    url: "https://thehackernews.com/"
  },
  {
    title: "Security Weekly",
    category: "News",
    description: "A podcast and blog providing the latest in security news and analysis.",
    url: "https://securityweekly.com/"
  }
];

// Populate the category dropdown
const categories = new Set();
resources.forEach(resource => categories.add(resource.category));
const categorySelect = document.getElementById('categoryFilter');
categories.forEach(category => {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
});

// Function to render resources based on search and category filter
function renderResources() {
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const categoryValue = categorySelect.value;

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchValue) || resource.description.toLowerCase().includes(searchValue);
    const matchesCategory = categoryValue === 'all' || resource.category === categoryValue;
    return matchesSearch && matchesCategory;
  });

  const resourceList = document.getElementById('resourceList');
  resourceList.innerHTML = '';

  filteredResources.forEach(resource => {
    const resourceDiv = document.createElement('div');
    resourceDiv.classList.add('resourceItem');
    resourceDiv.innerHTML = `
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <a href="${resource.url}" target="_blank">View Resource</a>
    `;
    resourceList.appendChild(resourceDiv);
  });
}

// Event listeners for search and filter
document.getElementById('searchInput').addEventListener('input', renderResources);
categorySelect.addEventListener('change', renderResources);

// Initial render
renderResources();
