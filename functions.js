
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    // Check if dark mode is enabled and store it in localStorage
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
 }

 function applyStoredTheme() {
    // Get the dark mode preference from localStorage
    const darkMode = localStorage.getItem("darkMode");

    // If dark mode is enabled, apply it
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }
}

// Apply stored theme when the page loads
window.onload = applyStoredTheme;