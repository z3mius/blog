const selectItem = item => {
  const element = document.querySelector(item);
  if (element) {
    return element;
  } else {
    throw new Error(`Cannot find item with selector: ${item}`);
  }
}

// switch theme
const bodyElement = document.body;
const themeToggleBtn = selectItem('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
  bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
  bodyElement.classList.toggle('light-theme');

  if(bodyElement.classList.contains('light-theme')) {
    localStorage.setItem('currentTheme', 'themeSwitch');
  } else {
    localStorage.removeItem('currentTheme');
  }
});
