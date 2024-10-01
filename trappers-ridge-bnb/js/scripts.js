function menuToggle() {
  document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamButton");

x.onclick = menuToggle;
