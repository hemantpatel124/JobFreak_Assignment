document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".sidebar a");
    const contentSections = document.querySelectorAll(".content-section");

    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();

        // Hide all content sections
        contentSections.forEach(function(section) {
          section.classList.add("hidden");
        });

        // Show the selected content section
        const target = link.getAttribute("data-target");
        const selectedSection = document.querySelector(target);
        selectedSection.classList.remove("hidden");
      });
    });
  });