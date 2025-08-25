export function initPartnersToggle() {
  const toggleBtn = document.getElementById("toggleBtn");
  const scrollView = document.getElementById("scrollView");
  const diamondView = document.getElementById("diamondView");

  if (!toggleBtn || !scrollView || !diamondView) return;

  toggleBtn.addEventListener("click", () => {
    scrollView.classList.toggle("hidden");
    diamondView.classList.toggle("hidden");

    toggleBtn.textContent = diamondView.classList.contains("hidden")
      ? "See More"
      : "See Less";
  });
}
