document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-menu");

  // Toggle mobile menu when button is clicked
  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Closes menu when clicking a link (for mobile usability)
  document.querySelectorAll(".navbar-menu li a").forEach(link => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    });
  });

  // Closes the menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggleButton.contains(e.target)) {
      menu.classList.remove("active");
    }
  });
});

// Lightbox for Image Gallery with Navigation
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery img");
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  document.body.appendChild(lightbox);

  const img = document.createElement("img");
  lightbox.appendChild(img);

  // Navigation buttons for lightbox
  const prevButton = document.createElement("button");
  prevButton.classList.add("prev");
  // Left arrow
  prevButton.innerHTML = "&#10094;"; 
  lightbox.appendChild(prevButton);

  const nextButton = document.createElement("button");
  nextButton.classList.add("next");
  // Right arrow
  nextButton.innerHTML = "&#10095;"; 
  lightbox.appendChild(nextButton);

  let currentIndex = 0;

  function updateImage(index) {
      if (index >= 0 && index < galleryImages.length) {
          img.src = galleryImages[index].src;
          currentIndex = index;
      }
  }

  galleryImages.forEach((image, index) => {
      image.addEventListener("click", () => {
          lightbox.style.display = "flex";
          updateImage(index);
      });
  });

  lightbox.addEventListener("click", (event) => {
      if (event.target !== img && event.target !== prevButton && event.target !== nextButton) {
          lightbox.style.display = "none";
      }
  });

  prevButton.addEventListener("click", () => {
      updateImage(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
      updateImage(currentIndex + 1);
  });

  // Close on pressing Esc
  document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
          lightbox.style.display = "none";
      }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cabinetsInput = document.getElementById("cabinets");
  const doorsInput = document.getElementById("doors");
  const squareFootageInput = document.getElementById("squareFootage");
  const estimatedCost = document.getElementById("estimatedCost");

  // Define pricing
  const pricePerCabinet = 120;
  const pricePerDoor = 160;
  const pricePerSquareFoot = 2.50;

  function updateEstimate() {
      const cabinets = parseInt(cabinetsInput.value) || 0;
      const doors = parseInt(doorsInput.value) || 0;
      const squareFootage = parseFloat(squareFootageInput.value) || 0;

      const total = (cabinets * pricePerCabinet) + 
                    (doors * pricePerDoor) + 
                    (squareFootage * pricePerSquareFoot);

      estimatedCost.textContent = `Estimated Cost: $${total.toFixed(2)}`;
  }

  cabinetsInput.addEventListener("input", updateEstimate);
  doorsInput.addEventListener("input", updateEstimate);
  squareFootageInput.addEventListener("input", updateEstimate);

  // Ensure initial value is displayed
  updateEstimate();
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  document.querySelectorAll("[data-parallax]").forEach((section) => {
    const speed = parseFloat(section.dataset.parallax) || 0.3;
    section.style.backgroundPositionY = `${scrolled * speed}px`;
  });
});