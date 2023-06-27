// Sample article data
const articles = [
  {
    title: "Article 1",
    content: "This is the content of article 1.",
  },
  {
    title: "Article 2",
    content: "This is the content of article 2.",
  },
  // Add more articles as needed
];

// Function to create and display an article preview
function displayArticlePreview(articleIndex) {
  const container = document.getElementById("preview-container");

  // Clear previous article previews
  container.innerHTML = "";

  // Loop through the articles and create previews
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];

    const previewElement = document.createElement("div");
    previewElement.classList.add("preview");

    const titleElement = document.createElement("h2");
    titleElement.textContent = article.title;

    const previewButton = document.createElement("a");
    previewButton.href = `article.html?index=${i}`; // Link to article.html with article index as query parameter
    previewButton.textContent = "Read More";

    previewElement.appendChild(titleElement);
    previewElement.appendChild(previewButton);

    container.appendChild(previewElement);
  }
}

// Function to display the full article
function displayArticle(articleIndex) {
  const container = document.getElementById("article-container");

  // Clear previous article content
  container.innerHTML = "";

  // Get the article data
  const article = articles[articleIndex];

  // Create HTML elements for the article
  const articleElement = document.createElement("div");
  articleElement.classList.add("article");

  const titleElement = document.createElement("h2");
  titleElement.textContent = article.title;

  const contentElement = document.createElement("p");
  contentElement.textContent = article.content;

  articleElement.appendChild(titleElement);
  articleElement.appendChild(contentElement);

  // Append the article to the container
  container.appendChild(articleElement);
}

// Check if the current page is article.html
if (location.pathname.includes("article.html")) {
  // Get the article index from the query parameter
  const urlParams = new URLSearchParams(location.search);
  const articleIndex = parseInt(urlParams.get("index"));

  // Display the full article
  displayArticle(articleIndex);
} else {
  // Display the article previews on the index.html page
  displayArticlePreview();
}
