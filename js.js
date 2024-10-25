
function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("active");
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("active");
}
function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
}