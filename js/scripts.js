document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-menu");

  // Toggle mobile menu when button is clicked
  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Close menu when clicking a link (for mobile usability)
  document.querySelectorAll(".navbar-menu li a").forEach(link => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    });
  });

  // Optional: Close the menu when clicking outside
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
  prevButton.innerHTML = "&#10094;"; // Left arrow
  lightbox.appendChild(prevButton);

  const nextButton = document.createElement("button");
  nextButton.classList.add("next");
  nextButton.innerHTML = "&#10095;"; // Right arrow
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

  // Prevent navigation from going out of bounds
  prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
          updateImage(currentIndex - 1);
      }
  });

  nextButton.addEventListener("click", () => {
      if (currentIndex < galleryImages.length - 1) {
          updateImage(currentIndex + 1);
      }
  });
});

// Background Image Rotator
const backgrounds = [
  'images/uploads/EXT_House2_Background.jpeg',
  'images/uploads/INT_Background.jpeg',
  'images/uploads/INT_Background2.jpeg',
  'images/uploads/INT_Background3.jpeg'
];

let backgroundIndex = 0;

// Function to change the background
function changeBackground() {
  document.body.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;
  backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
}

// Set initial background
changeBackground();

// Rotate background every 5 seconds
setInterval(changeBackground, 5000);

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("quoteForm");
  const cabinetsInput = document.getElementById("cabinets");
  const drawersInput = document.getElementById("drawers");
  const doorsInput = document.getElementById("doors");
  const squareFootageInput = document.getElementById("squareFootage");
  const estimatedCost = document.getElementById("estimatedCost");

  // Define pricing
  const pricePerCabinet = 50; 
  const pricePerDrawer = 30;
  const pricePerDoor = 75;
  const pricePerSquareFoot = 2.50;

  // Function to calculate estimate
  function updateEstimate() {
      const cabinets = parseInt(cabinetsInput.value) || 0;
      const drawers = parseInt(drawersInput.value) || 0;
      const doors = parseInt(doorsInput.value) || 0;
      const squareFootage = parseFloat(squareFootageInput.value) || 0;

      const total = (cabinets * pricePerCabinet) + 
                    (drawers * pricePerDrawer) + 
                    (doors * pricePerDoor) + 
                    (squareFootage * pricePerSquareFoot);

      estimatedCost.textContent = `$${total.toFixed(2)}`;
  }

  // Attach event listeners to input fields
  cabinetsInput.addEventListener("input", updateEstimate);
  drawersInput.addEventListener("input", updateEstimate);
  doorsInput.addEventListener("input", updateEstimate);
  squareFootageInput.addEventListener("input", updateEstimate);

  // Form submission handler
  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const formData = new FormData(form);
      fetch("send_quote.php", {
          method: "POST",
          body: formData
      }).then(response => response.text()).then(data => {
          alert("Quote request submitted successfully! We will contact you soon.");
          form.reset();
          estimatedCost.textContent = "$0";
      }).catch(error => console.error("Error:", error));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded");

  const homeButton = document.querySelector('.navbar-menu a[href="#home"]');
  const homeSection = document.getElementById("home");

  if (homeButton && homeSection) {
    console.log("🏠 Home button found:", homeButton);
    console.log("📍 Home section found:", homeSection);

    homeButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevents default anchor behavior

      console.log("🏠 Home button Clicked! Scrolling to #home...");

      homeSection.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        history.pushState(null, null, window.location.pathname);
        console.log("🏠 Scroll and hash reset complete.");
      }, 500);
    });
  } else {
    console.warn("⚠️ Home button or Home section not found.");
  }
// });


// DEBUGGING FORM BUTTON JS
document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ JavaScript Loaded!");

  setTimeout(() => {
    const submitButton = document.querySelector(".quote-btn");

    if (!submitButton) {
        console.error("🚨 ERROR: Submit button not found! Check if it's inside a hidden div.");
        return;
    }

    console.log("🟢 Submit button found!", submitButton);

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("🟢 Button clicked!");
        alert("🟢 Button is now working!");
    });
}, 1000);
});

//   // Toggle Mobile Navbar Menu
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  if (navbarToggle && navbarMenu) {
      navbarToggle.addEventListener("click", () => {
          navbarMenu.classList.toggle("active");
      });
  }
});