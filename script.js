  const pageBody = document.querySelector("body")
  const themeIcon = document.querySelector("#theme-icon")

  themeIcon.addEventListener("click", () => {
    if (themeIcon.classList.contains("ri-moon-line")){
      themeIcon.classList.add("ri-sun-line")
      themeIcon.classList.remove("ri-moon-line")

      pageBody.classList.add("dark-theme")
      pageBody.classList.remove("light-theme")
    } else {
      themeIcon.classList.add("ri-moon-line")
      themeIcon.classList.remove("ri-sun-line")

      pageBody.classList.add("light-theme")
      pageBody.classList.remove("dark-theme")

    }  
  })
