let darkMode = localStorage.getItem('darkMode');
const darkModeToggles = document.querySelectorAll('.dark-mode-toggle');
const iconswitches = document.querySelectorAll('.iconswitch');
const illustrations = document.querySelectorAll('.illustration');

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
};

// Initialize dark mode state and set icon accordingly
if (darkMode === "enabled") {
    enableDarkMode();
} else {
    disableDarkMode(); // Ensure default state is set
}

// Set the icon based on the current dark mode state on page load
iconswitches.forEach(icon => {
    icon.src = darkMode === "enabled" ? "/assets/images/sun.svg" : "/assets/images/moon.svg";
});

// Toggle dark mode on both buttons
darkModeToggles.forEach((toggle, index) => {
    toggle.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
        // Update icon for each button
        iconswitches.forEach(icon => {
            icon.src = darkMode !== "enabled" ? "/assets/images/sun.svg" : "/assets/images/moon.svg";
        });
    });
});

// Scroll event for header styling
const body = document.querySelector('body');
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
