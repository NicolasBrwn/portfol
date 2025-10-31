// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Animate sections on scroll
const sections = document.querySelectorAll(".slide-up");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach((section) => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
});
