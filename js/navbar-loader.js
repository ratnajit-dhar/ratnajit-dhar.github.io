document.addEventListener('DOMContentLoaded', function () {
    function loadNavbar() {
        const navbarContainer = document.getElementById('main-navbar');
        if (navbarContainer) {
            console.log('Loading navbar...');
            console.log('Path:', window.location.pathname);

            // Dynamically resolve the correct path to navbar.html
            const basePath = window.location.pathname.includes('/pages/')
                ? '../pages/navbar.html' // If the current page is in the /pages/ folder
                : 'pages/navbar.html';   // If the current page is in the root folder

            fetch(basePath)
                .then(response => response.text())
                .then(data => {
                    navbarContainer.innerHTML = data;

                    // Highlight the active link based on the current URL
                    highlightActiveLink();

                    // Smooth scrolling for anchor links
                    navbarContainer.querySelectorAll('a[href^="#"]').forEach(anchor => {
                        anchor.addEventListener('click', function (e) {
                            e.preventDefault();
                            const targetId = this.getAttribute('href');
                            const targetElement = document.querySelector(targetId);

                            if (targetElement) {
                                targetElement.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }
                        });
                    });

                    // Update the URL on scroll and re-highlight the active link
                    updateURLOnScroll();
                })
                .catch(error => {
                    console.error('Error loading navbar:', error);
                });
        }
    }

    function highlightActiveLink() {
        const currentPath = window.location.pathname.split('/').pop(); // Get the current file name
        const currentHash = window.location.hash; // Get the current hash (e.g., #about)
        const fullPath = `${currentPath}${currentHash}`; // Combine path and hash
        console.log('Current full path:', fullPath);
    
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href').split('/').pop(); // Get the href of the link
            const href2 = '#'+link.getAttribute('href').split('#').pop(); // Get the href of the link
            console.log('Link href:', href);
            console.log('Link href2:,', href2)
    
            // Check if the href matches the full path (path + hash)
            if (href === fullPath || href === `#${currentHash}` || href2 === fullPath || href2 === `#${currentHash}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function updateURLOnScroll() {
        const sections = document.querySelectorAll('section[id]'); // Select all sections with an ID
        const observerOptions = {
            root: null, // Use the viewport as the root
            threshold: 0.6 // Trigger when 60% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id'); // Get the ID of the section
                    const newURL = `${window.location.origin}${window.location.pathname}#${id}`;
                    history.pushState(null, null, newURL); // Update the URL without reloading the page

                    // Re-highlight the active link based on the updated URL
                    highlightActiveLink();
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    loadNavbar();
});