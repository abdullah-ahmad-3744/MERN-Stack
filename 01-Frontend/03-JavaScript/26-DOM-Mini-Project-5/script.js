const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

// Open lightbox when a thumbnail is clicked
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove "-thumbnail" from the image URL
    const fullImage = item.src.replace("-thumbnail", "");

    lightboxImage.src = fullImage;
    lightbox.style.display = "flex";
  });
});

// Close when the X button is clicked
closeBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click from bubbling to the lightbox
  lightbox.style.display = "none";
});

// Close when clicking anywhere on the lightbox background
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Prevent closing when clicking on the image itself
lightboxImage.addEventListener("click", (event) => {
  event.stopPropagation();
});