{
    let tabMenu = document.getElementById("tabMenu"),
    tabMenuBg = document.getElementById("tabMenuBg");

    function openTabMenu() {
    tabMenu.style.display = "flex";
    tabMenuBg.style.display = "block";
    }
    
    function closeTabMenu() {
    tabMenu.style.display = "none";
    tabMenuBg.style.display = "none";
    }
}
