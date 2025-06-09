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
            // console.log('Link href:', href);
            // console.log('Link href2:,', href2)
    
            // Check if the href matches the full path (path + hash)
            if (href === fullPath || href === `#${currentHash}` || href2 === fullPath || href2 === `#${currentHash}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function updateURLOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const scrollY = window.scrollY;
                
                // Check if we've scrolled past the section's top position
                // Adding 100px offset for better detection
                if (scrollY >= (sectionTop - 300)) {
                    current = section.getAttribute('id');
                }
            });

            if (current) {
                // Update URL and highlight nav link
                const newURL = `${window.location.origin}${window.location.pathname}#${current}`;
                history.replaceState(null, null, newURL);
                highlightActiveLink();
                console.log('Current section:', current); // Debug log
            }
        });
    }

    loadNavbar();
});