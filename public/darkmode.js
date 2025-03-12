let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const iconswitch = document.querySelector('#iconswitch');
const illustrations = document.querySelectorAll('.illustration');

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled")
    iconswitch.src = "assets/images/sun.svg"; 
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
    iconswitch.src = "assets/images/moon.svg";
};

const getBasePath = () => {
  return window.location.pathname.includes("index.html") ? "assets/images/sun.svg" : "assets/images/moon.svg";
};

if (darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    if(darkMode !== "enabled") {
        iconswitch.src = "assets/images/sun.svg"
      }else{
        iconswitch.src = "assets/images/moon.svg"
      };
});
const body = document.querySelector('body');
    
document.addEventListener('scroll' , () => {
  const header = document.querySelector('header');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

});