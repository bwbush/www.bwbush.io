
function showArt(name) {
  overlay.style.display = "flex"
  overlay_image.src = "art/" + name + ".jpg"
  overlay_text.innerHTML = document.getElementById(name).innerHTML
}

function showImage(image) {
  overlay.style.display = "flex"
  overlay_image.src = image.src
  overlay_text.innerText = image.alt.slice(0, -4)
}

function hideOverlay() {
  overlay.style.display = "none"
  main.focus()
}

function setup() {
  main.focus()
}
