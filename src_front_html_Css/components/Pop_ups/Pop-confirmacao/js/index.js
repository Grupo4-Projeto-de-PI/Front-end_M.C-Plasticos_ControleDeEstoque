const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");


closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});


overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});