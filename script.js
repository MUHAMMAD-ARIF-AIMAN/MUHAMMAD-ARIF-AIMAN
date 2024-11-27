function darkFunction() {
    var element = document.body;
    var icon = document.getElementById("toggle-icon");
    element.classList.toggle("light-dark");
    if (element.classList.contains("light-dark")) {
        icon.innerHTML = "&#127765";
    } else  {
        icon.innerHTML = "&#127761";
    }
}