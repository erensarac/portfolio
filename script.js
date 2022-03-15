const pageBody = document.querySelector("body")
const themeIcon = document.querySelector("#theme-icon")

themeIcon.addEventListener("click", () => {
  if (themeIcon.classList.contains("ri-moon-line")){
    themeIcon.classList.remove("ri-moon-line")
    themeIcon.classList.add("ri-sun-line")
    
    pageBody.classList.remove("light-theme")
    pageBody.classList.add("dark-theme")
  } else {
    themeIcon.classList.remove("ri-sun-line")
    themeIcon.classList.add("ri-moon-line")
    
    pageBody.classList.remove("light-theme")
    pageBody.classList.add("dark-theme")
    
  }  
})
