const mainMenu = document.getElementById("main_menu");
const toggleMenu = document.getElementById("toggle_menu");
const openMenu = document.getElementById("open_menu");
const closeMenu = document.getElementById("close_menu");
const overlay = document.getElementById("overlay");
const [...listItems] = mainMenu.querySelectorAll("li");

// Function That Open The Menu
const openMenuFunc = () => {
  toggleMenu.classList.add("opened");
  overlay.style.transform = "scaleX(1)";
  mainMenu.style.transform = "scaleX(1)";
};

// Function That Close The Menu
const closeMenuFunc = () => {
  toggleMenu.classList.remove("opened");
  overlay.style.transform = "scaleX(0)";
  mainMenu.style.transform = "scaleX(0)";
};

// Open Menu By Clicking The openMenu Button
openMenu.addEventListener("click", openMenuFunc);

// Close Menu By Clicking The closeMenu Button
closeMenu.addEventListener("click", closeMenuFunc);

// Close Menu By Clicking The overlay
overlay.addEventListener("click", closeMenuFunc);

// Close Menu By Clicking List Items
listItems.forEach((item) => {
  if (window.innerWidth > 768) return;
  // Only if (window.innerWidth <= 768)
  item.addEventListener("click", closeMenuFunc);
});

// Close The Menu While Resiqing The Screen
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    openMenuFunc();
  } else {
    closeMenuFunc();
  }
});
