const pageBody = document.querySelector("body")
const app = document.querySelector(".app")
const themeIcon = document.querySelector("#theme-icon")
const loader = document.querySelector("#loader")

app.style.display = "none"

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(()=>{
    loader.style.opacity = "0"
  }, 2000)
  setTimeout(()=>{
    app.style.display = "block"
    loader.remove()
  }, 3000)
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
