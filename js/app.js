//Burger menu
burgerBtn.addEventListener("click", (ev) => {
  burgerMenu.classList.toggle("open");
  burgerBtn.classList.toggle("close");
});
window.addEventListener("load", (ev) => {
  burgerMenu.classList.add("transition");
});

//Popup
// let openPopup = document.querySelectorAll(".js-open-popup");
// openPopup.forEach(function (popupItem) {
//   popupItem.onclick = () => callbackPopup.classList.add("popup-window_active");
// });
// closePopupBtn.onclick = () =>
//   callbackPopup.classList.remove("popup-window_active");

//Copyright year
copyrightYear.textContent = new Date().getFullYear();