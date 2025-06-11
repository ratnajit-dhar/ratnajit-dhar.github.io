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


// ...existing code...

// Function to load certification content
function loadCertificationContent() {
    fetch('pages/certification.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('certification').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading certification content:', error);
            document.getElementById('certification').innerHTML = '<div class="container"><p>Error loading certifications. Please try again later.</p></div>';
        });
}

// Add this to your existing DOMContentLoaded event listener

document.addEventListener('DOMContentLoaded', function() {
    fetch('pages/project.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('project').innerHTML = data;
            initializeGallery();
            InitializeFiltering();
        })
        .catch(error => {
            console.error('Error loading project content:', error);
            document.getElementById('project').innerHTML = '<div class="container"><p>Error loading projects. Please try again later.</p></div>';
        });
});

function initializeGallery() {
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
        viewGalleryBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            card.classList.add('flipped');
            showImage(0);
        });

        // Rest of your gallery code...
        closeGalleryBtn.addEventListener('click', () => {
            card.classList.remove('flipped');
        });

        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            showImage(currentImageIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            showImage(currentImageIndex);
        });

        function showImage(index) {
            galleryImages.forEach(img => img.classList.remove('active'));
            galleryImages[index].classList.add('active');
            imageCounter.textContent = `${index + 1} / ${galleryImages.length}`;
        }
    });
}

function InitializeFiltering(){
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
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('pages/experience.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('experience').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading experience content:', error);
            document.getElementById('experience').innerHTML = '<div class="container"><p>Error loading experiences. Please try again later.</p></div>';
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('pages/publication.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('publication').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading publication content:', error);
            document.getElementById('publication').innerHTML = '<div class="container"><p>Error loading experiences. Please try again later.</p></div>';
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('pages/certification.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('certification').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading certification content:', error);
            document.getElementById('certification').innerHTML = '<div class="container"><p>Error loading publications. Please try again later.</p></div>';
        });
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the "active" class
});