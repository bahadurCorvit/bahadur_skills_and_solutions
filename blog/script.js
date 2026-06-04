document.addEventListener("DOMContentLoaded", async function () {

  const loaders = Object.entries(CMS_PAGES).map(([id, file]) =>
    loadComponent("i_" + id, file)
  );

  await Promise.all(loaders);

  // Initialize AOS after everything loads
  setTimeout(() => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true
      });
    }
  }, 100);

});

// Menu
function showMenu(){
  let navLinks = document.getElementById("navLinks");
  if(navLinks) navLinks.style.top = '0';
}

function hideMenu(){
  let navLinks = document.getElementById("navLinks");
  if(navLinks) navLinks.style.top = '-800px';
}