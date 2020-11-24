
function showOverlay(name) {
  overlay.style.display = "flex"
  overlay_image.src = "art/" + name + ".png"
  overlay_text.innerHTML = document.getElementById(name).innerHTML
}

function hideOverlay() {
  overlay.style.display = "none"
}
