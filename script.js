const pageBody = document.querySelector("body")
const themeIcon = document.querySelector("#theme-icon")

themeIcon.addEventListener("click", () => {
  if (themeIcon.classList.contains("ri-sun-line")){
    themeIcon.classList.remove("ri-sun-line")
    themeIcon.classList.add("ri-moon-line")
    
    pageBody.classList.add("light-theme")
    pageBody.classList.remove("dark-theme")
  } else {
    themeIcon.classList.add("ri-sun-line")
    themeIcon.classList.remove("ri-moon-line")
    
    pageBody.classList.remove("light-theme")
    pageBody.classList.add("dark-theme")
    
  }  
})
