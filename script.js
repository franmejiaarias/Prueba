// Año dinámico en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Cerrar el menú al hacer clic en un enlace (móvil)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Validación básica del formulario de contacto
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form) form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nombre = data.get("nombre").trim();
  const email = data.get("email").trim();
  const mensaje = data.get("mensaje").trim();

  if (!nombre || !email || !mensaje) {
    status.textContent = "Por favor, completa todos los campos.";
    status.className = "form-status error";
    return;
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    status.textContent = "Introduce un email válido.";
    status.className = "form-status error";
    return;
  }

  // Aquí conectarías un servicio real de envío (Formspree, EmailJS, etc.)
  status.textContent = "¡Gracias, " + nombre + "! Te responderemos pronto.";
  status.className = "form-status ok";
  form.reset();
});
