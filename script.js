const pageBody = document.querySelector("body")
const themeIcon = document.querySelector("#theme-icon")

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark")
  {
    makeDarkTheme()
  } else {
    makeLightTheme()
  }
})

themeIcon.addEventListener("click", () => {
  if (themeIcon.classList.contains("ri-moon-line"))
  {
    makeDarkTheme()
  } else {
    makeLightTheme()
  }
})

function makeDarkTheme(){
  console.log("sa");
  themeIcon.classList.add("ri-sun-line")
  themeIcon.classList.remove("ri-moon-line")
  pageBody.classList.add("dark-theme")
  pageBody.classList.remove("light-theme")
  localStorage.setItem("theme", "dark")
}

function makeLightTheme(){
  console.log("as");
  themeIcon.classList.add("ri-moon-line")
  themeIcon.classList.remove("ri-sun-line")
  pageBody.classList.add("light-theme")
  pageBody.classList.remove("dark-theme")
  localStorage.setItem("theme", "light")
}
