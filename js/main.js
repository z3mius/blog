// capture elements
const selectItem = item => {
  const element = document.querySelector(item);
  if (element) {
    return element;
  } else {
    throw new Error(`Cannot find item with selector: ${item}`);
  }
}

// search bar
const searchToggleBtn = selectItem("#search-toggle-btn");
const searchToggle = selectItem("#search-container");

// open search bar
searchToggleBtn.addEventListener("click", function () {
  searchToggle.classList.toggle("search-activated");
});

const searchExitBtn = selectItem("#search-close-btn");

//close search bar
searchExitBtn.addEventListener('click', () => {
  searchToggle.classList.remove("search-activated");
});


//search for articles
const searchInput = document.getElementById('search-input');

// Add event listener to the search input
searchInput.addEventListener('input', searchArticles);

function searchArticles() {
  // Clear previous search results
  const searchResultsContainer = document.querySelector('.search-results-inner');
  searchResultsContainer.innerHTML = '';

  // Get the search query
  const query = searchInput.value.toLowerCase().trim();

  // Clear the search results
  if (query === '') {
    return;
  }

  // Loop through each article container
  const articleContainers = document.querySelectorAll('.article-x-flex');
  articleContainers.forEach(articleContainer => {
    const titleElement = articleContainer.querySelector('.article-title');
    const articleTitle = titleElement.textContent;

    if (articleTitle.toLowerCase().includes(query)) {
      // Get the image source
      const imageElement = articleContainer.querySelector('.image');
      const imageSrc = imageElement.src;

      // Get the article date
      const dateElement = articleContainer.querySelector('.article-date');
      const articleDate = dateElement.textContent;

      // Find the first anchor tag within the article container
      const linkElement = articleContainer.querySelector('a');
      const articleLink = linkElement.getAttribute('href');

      // Create a search result container
      const searchResult = document.createElement('a');
      searchResult.classList.add('search-result');
      searchResult.href = articleLink;

      // Create a search imagery container
      const searchImagery = document.createElement('div');
      searchImagery.classList.add('search-imagery');

      // Create a search info container
      const searchInfo = document.createElement('div');
      searchInfo.classList.add('search-info');

      // Create an image element
      const image = document.createElement('img');
      image.classList.add('search-result-image');
      image.src = imageSrc;
      image.alt = '';

      // Create a title element
      const title = document.createElement('h2');
      title.classList.add('search-result-title');
      title.textContent = articleTitle;

      // Create a date element
      const date = document.createElement('span');
      date.classList.add('search-result-date');
      date.textContent = articleDate;

      // Append the image, title, and date elements to the search result container
      searchImagery.appendChild(image);
      searchInfo.appendChild(date);
      searchInfo.appendChild(title);

      searchResult.appendChild(searchImagery);
      searchResult.appendChild(searchInfo);

      // Append the search result container to the search results container
      searchResultsContainer.appendChild(searchResult);

      // Smooth appearance after a short delay
      setTimeout(() => {
        searchResult.classList.add('show');
      }, 100);
    }
  });
}


// load more articles
const loadMoreBtn = document.getElementById('load-more-btn');
const articlesGrid = document.querySelector('.articles-grid');
const articles = articlesGrid.querySelectorAll('.article-x');
const articlesPerLoad = 2; // Number of articles to load on each "Load More" click
let visibleCount = 2; // Number of initially visible articles

// function to show additional articles
function showMoreArticles() {
  for (let i = visibleCount; i < visibleCount + articlesPerLoad; i++) {
    if (articles[i]) {
      articles[i].style.display = 'block';
    }
  }
  visibleCount += articlesPerLoad;

  // hide "Load More" button if all articles are visible
  if (visibleCount >= articles.length) {
    loadMoreBtn.style.display = 'none';
  }
}

// show initially visible articles
for (let i = 0; i < visibleCount; i++) {
  articles[i].style.display = 'block';
}

// show the "Load More" button if there are more articles to load
if (visibleCount < articles.length) {
  loadMoreBtn.style.display = 'block';
} else {
  loadMoreBtn.style.display = 'none';
}

// Show additional articles when the button is clicked
loadMoreBtn.addEventListener('click', showMoreArticles);


