// Theme: Light and Dark support
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("ope-theme");

const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
const systemTheme = matchMedia.matches ?
    "dark" :
    "light";

const theme = savedTheme === "light" || savedTheme === "dark" ?
    savedTheme :
    systemTheme;

document.documentElement.dataset.theme = theme;

function setThemeIcon(theme) {
    if (theme === "dark") {
        themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" id="light-icon" class="theme-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="m4.93 4.93 1.42 1.42"/>
            <path d="m17.65 17.65 1.42 1.42"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m6.35 17.65-1.42 1.42"/>
            <path d="m19.07 4.93-1.42 1.42"/>
        </svg>
    `;
    } else if (theme === "light") {
        themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" id="dark-icon" class="theme-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.9 13A9 9 0 0 1 11 3.1
                   9 9 0 1 0 20.9 13Z"/>
        </svg>
    `;
    }
}

setThemeIcon(theme);

// change theme on system theme changes
matchMedia.addEventListener("change", (event) => {
    const savedTheme = localStorage.getItem("ope-theme");

    if (savedTheme !== "light" && savedTheme !== "dark") {
        document.documentElement.dataset.theme =
            event.matches ? "dark" : "light";
    }
});

function setTheme(theme) {
    if (theme !== "light" && theme !== "dark") return;

    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ope-theme", theme);
    setThemeIcon(theme);
}

// icon and menu toggles
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const navSide = document.getElementById("navLinksBack");

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

    navigation.classList.toggle("active", isOpen);
});

navSide.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

    navigation.classList.toggle("active", isOpen);
});

//changes site theme
themeToggle.addEventListener("click", () => {
    const storedTheme = localStorage.getItem("ope-theme");
    if (storedTheme === "light") {
        setTheme("dark");
    } else if (storedTheme === "dark") {
        setTheme("light");
    } else {
        // if its the first click
        const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
        const systemTheme = matchMedia.matches ?
            "dark" :
            "light";

        if (systemTheme === "light") {
            setTheme("dark");
        } else if (systemTheme === "dark") {
            setTheme("light");
        }
    }
});