const html = document.documentElement;
const btn = document.querySelector(".darkmodebtn");
const icon = document.querySelector("#themeIcon");

// Når siden loader
if (localStorage.getItem("darkmode") === "true") {
  html.classList.add("dark");
  icon.src = "imgs/sun.svg";
} else {
  icon.src = "imgs/moon.svg";
}

// Klik på knappen
btn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    icon.src = "imgs/sun.svg";
    localStorage.setItem("darkmode", "true");
  } else {
    icon.src = "imgs/moon.svg";
    localStorage.setItem("darkmode", "false");
  }
});
