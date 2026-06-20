// Get DOM Elements
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

// Open Lightbox when an image is clicked
galleryItems.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
    });
});

// Close Lightbox when clicking the 'X' button
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close Lightbox when clicking anywhere outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});