// Burger menu
burgerBtn.addEventListener("click", (ev) => {
  burgerMenu.classList.toggle("open");
  mobileHeader.classList.toggle("shadow");
  burgerBtn.classList.toggle("close");
});
window.addEventListener("load", (ev) => {
  burgerMenu.classList.add("transition");
});

//Timer
let endDate = + new Date() + 45481000;

let timer = setInterval(function() {
    let now = new Date().getTime();
    let t = endDate - now;
    if (t >= 0) {
        let hrs = Math.floor((t % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("timerHours").innerHTML = ("0" + hrs).slice(-2);
        document.getElementById("timerMinutes").innerHTML = ("0" + mins).slice(-2);
        document.getElementById("timerSeconds").innerHTML = ("0" + secs).slice(-2);  
    } else {
        document.getElementById("timer").innerHTML = "Times Up!"
    }
}, 1000);

//Currency formatter
const currencyUSDFormatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

//Popup
let openPopup = document.querySelectorAll(".js-open-popup");
openPopup.forEach(function (popupItem) {
  popupItem.onclick = () => callbackPopup.classList.add("popup-window_active");
});
closePopupBtn.onclick = () =>
  callbackPopup.classList.remove("popup-window_active");

//Range
const
    range = document.getElementById('range'),
    rangeValue = document.getElementById('rangeValue'),
    profit = document.getElementById('profit'),
    rangeTrack = document.getElementById('rangeTrack'),
    setValue = ()=>{
        const
            newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
            newPosition = 7 - (newValue * 0.3);
            rangeValue.innerHTML = `<span class="range__value-item">${currencyUSDFormatter.format(range.value)}</span>`;
            profit.innerHTML = currencyUSDFormatter.format(Math.trunc(range.value * 1.2));
            rangeValue.style.left = `calc(${newValue}% + (${newPosition}px))`;
            rangeTrack.style.width= (range.value * 0.0001) + '%';
    };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);

//Copyright year
copyrightYear.textContent = new Date().getFullYear();