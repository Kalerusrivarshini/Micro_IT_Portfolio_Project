<script>
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form submission (demo alert only)
  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission
    alert("Thanks for reaching out! I’ll get back to you soon.");
    contactForm.reset();
  });

  // Optional: Back to top button
  const backToTopBtn = document.createElement("button");
  backToTopBtn.textContent = "↑";
  backToTopBtn.className = "fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700";
  backToTopBtn.style.display = "none";
  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
</script>
