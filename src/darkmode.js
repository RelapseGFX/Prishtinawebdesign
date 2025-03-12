let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const iconswitch = document.querySelector('#iconswitch');
const illustrations = document.querySelectorAll('.illustration');

// Function to enable dark mode
const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
    iconswitch.src = "/assets/images/sun.svg"; 
};

// Function to disable dark mode
const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
    iconswitch.src = "/assets/images/moon.svg";
};

// Initialize dark mode state and set icon accordingly
if (darkMode === "enabled") {
    enableDarkMode();
} else {
    disableDarkMode(); // Ensure default state is set
}

// Update icon based on current state
iconswitch.src = darkMode === "enabled" ? "/assets/images/sun.svg" : "/assets/images/moon.svg";

darkModeToggle.addEvent
