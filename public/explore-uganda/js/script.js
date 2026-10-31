/* =========================================================
   EXPLORE UGANDA - SIMPLE JAVASCRIPT (js/script.js)
   1. Mobile menu toggle
   2. Highlight the current page in the navigation
   3. Gallery filter buttons
   4. Contact form validation message
   5. Automatic copyright year
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. Mobile menu toggle ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      var isOpen = navLinks.classList.contains("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });
  }

  /* ---------- 2. Highlight current page link ---------- */
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  /* ---------- 3. Gallery filter ---------- */
  var filterButtons = document.querySelectorAll(".filter-btn");
  var galleryItems = document.querySelectorAll(".gallery figure");
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var category = button.getAttribute("data-filter");
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      button.classList.add("active");
      galleryItems.forEach(function (item) {
        var match = category === "all" || item.getAttribute("data-category") === category;
        item.classList.toggle("hidden", !match);
      });
    });
  });

  /* ---------- 4. Contact form ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // No real server - we only show a message
      var message = document.getElementById("form-message");

      // Make sure at least one interest checkbox is ticked
      var interests = form.querySelectorAll('input[name="interests"]:checked');
      if (interests.length === 0) {
        message.textContent = "Please choose at least one interest.";
        message.classList.add("show");
        return;
      }

      var name = document.getElementById("fullname").value;
      message.textContent = "Thank you, " + name + "! Your travel enquiry has been received. We will contact you soon.";
      message.classList.add("show");
      form.reset();
    });
  }

  /* ---------- 5. Copyright year ---------- */
  document.querySelectorAll(".year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
