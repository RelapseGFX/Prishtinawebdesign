let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const iconswitch = document.querySelector('#iconswitch');

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
};

const updateIcon = () => {
    if (darkMode === 'enabled') {
        iconswitch.src = "assets/images/sun.svg";
    } else {
        iconswitch.src = "assets/images/moon.svg";
    }
};

// Initialize dark mode state
if (darkMode === "enabled") {
    enableDarkMode();
}
updateIcon(); // Update icon based on initial state

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    updateIcon(); // Update icon after toggling
});

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
