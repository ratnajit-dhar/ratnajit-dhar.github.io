// Additional custom JavaScript can be added here
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Check if the link's href matches the current path
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active'); // Add the 'active' class
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add subtle animations or interactions
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Scroll animation for education items
document.addEventListener("DOMContentLoaded", () => {
    const educationItems = document.querySelectorAll(".education-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0 } // Trigger when 20% of the item is visible
    );

    educationItems.forEach((item) => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', function() {
    // Filter Functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            projectItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Existing filter functionality...

    // Gallery functionality
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const viewGalleryBtn = card.querySelector('.view-gallery');
        const closeGalleryBtn = card.querySelector('.close-gallery');
        const prevBtn = card.querySelector('.prev-btn');
        const nextBtn = card.querySelector('.next-btn');
        const galleryImages = card.querySelectorAll('.gallery-images img');
        const imageCounter = card.querySelector('.image-counter');

        let currentImageIndex = 0;

        // Flip to gallery
        viewGalleryBtn.addEventListener('click', () => {
            event.preventDefault();
            card.classList.add('flipped'); // Flip the card to show the gallery
            showImage(0); // Show the first image
        });
        

        // Close gallery
        closeGalleryBtn.addEventListener('click', () => {
            card.classList.remove('flipped');
        });

        // Previous image
        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            showImage(currentImageIndex);
        });

        // Next image
        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            showImage(currentImageIndex);
        });

        function showImage(index) {
            // Hide all images
            galleryImages.forEach(img => img.classList.remove('active'));
            
            // Show current image
            galleryImages[index].classList.add('active');
            
            // Update counter
            imageCounter.textContent = `${index + 1} / ${galleryImages.length}`;
        }
    });
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the "active" class
});