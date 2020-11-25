
function showOverlay(name) {
  overlay.style.display = "flex"
  overlay_image.src = "art/" + name + ".jpg"
  overlay_text.innerHTML = document.getElementById(name).innerHTML
}

function hideOverlay() {
  overlay.style.display = "none"
}
