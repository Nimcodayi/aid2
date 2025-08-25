export function initContactForm() {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMessage");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      let response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      let result = await response.json();

      if (result.success) {
        msg.textContent = "✅ Message sent successfully!";
        msg.style.color = "limegreen";
        msg.style.display = "block";
        form.reset(); // clear inputs
      } else {
        msg.textContent = "❌ Something went wrong. Please try again.";
        msg.style.color = "red";
        msg.style.display = "block";
      }
    } catch (error) {
      msg.textContent = "⚠️ Network error. Please try again.";
      msg.style.color = "orange";
      msg.style.display = "block";
    }
  });
}
