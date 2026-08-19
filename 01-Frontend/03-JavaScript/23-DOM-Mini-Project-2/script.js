
const favoriteIcon = document.querySelectorAll(".favorite-icon");

function iconTogler(icon){
  if(!icon.classList.contains("filled")){
    icon.classList.add("filled");icon.innerHTML = "&#10084;";
  } else {
    icon.classList.remove("filled")
    icon.innerHTML = "&#9825";

  }
}
favoriteIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    iconTogler(icon)
})
})