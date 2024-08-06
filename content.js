function addFullScreenOverlay() {
    const existingOverlay = document.querySelector('.fullscreen-overlay');
    if (!existingOverlay) {
      const overlay = document.createElement('div');
      overlay.classList.add('fullscreen-overlay');
      document.body.appendChild(overlay);
    }
  }
  
  // Check if the user is on the Roblox home page
  function checkHomePage() {
    const url = window.location.href;
    if (url.includes('roblox.com/home')) {
      addFullScreenOverlay();
    }
  }
  
  // Run the check when the script is loaded
  checkHomePage();
  
  // Also run the check when the user navigates to a different page
  window.addEventListener('popstate', checkHomePage);
  