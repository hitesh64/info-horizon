// Mobile Responsive JavaScript for INFO HORIZONS
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile responsive JavaScript loading...');
    
    // Mobile Menu Elements
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    console.log('Mobile menu toggle:', mobileMenuToggle);
    console.log('Main nav:', mainNav);
    
    // Mobile Menu Toggle Functionality
    if (mobileMenuToggle && mainNav) {
        console.log('Setting up mobile menu...');
        
        // Toggle menu function
        function toggleMobileMenu() {
            console.log('Toggle mobile menu clicked');
            
            // Toggle active classes
            mainNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Toggle icon
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (mainNav.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                    console.log('Menu opened - changed to X');
                } else {
                    icon.className = 'fas fa-bars';
                    console.log('Menu closed - changed to bars');
                }
            }
            
            // Prevent body scroll when menu is open
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                console.log('Body scroll locked');
            } else {
                document.body.style.overflow = 'auto';
                console.log('Body scroll unlocked');
            }
        }
        
        // Add multiple event listeners for better compatibility
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu toggle clicked');
            toggleMobileMenu();
        });
        
        // Touch event for mobile devices
        mobileMenuToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu toggle touched');
            toggleMobileMenu();
        });
        
        // Mouse event for desktop testing
        mobileMenuToggle.addEventListener('mousedown', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu toggle mousedown');
            toggleMobileMenu();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (mainNav.classList.contains('active') && 
                !mobileMenuToggle.contains(event.target) && 
                !mainNav.contains(event.target)) {
                console.log('Clicked outside menu - closing');
                toggleMobileMenu();
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Nav link clicked - closing menu');
                if (mainNav.classList.contains('active')) {
                    toggleMobileMenu();
                }
            });
        });
        
        // Close menu on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                console.log('ESC key pressed - closing menu');
                toggleMobileMenu();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
                console.log('Screen resized to desktop - closing menu');
                toggleMobileMenu();
            }
        });
        
        // Test mobile menu functionality
        console.log('Testing mobile menu elements...');
        if (mobileMenuToggle) {
            console.log('Mobile menu toggle found and clickable');
            mobileMenuToggle.style.cursor = 'pointer';
            mobileMenuToggle.setAttribute('aria-label', 'Toggle mobile menu');
            mobileMenuToggle.setAttribute('role', 'button');
            mobileMenuToggle.setAttribute('tabindex', '0');
            
            // Ensure it's visible and clickable
            mobileMenuToggle.style.display = 'flex';
            mobileMenuToggle.style.visibility = 'visible';
            mobileMenuToggle.style.opacity = '1';
            mobileMenuToggle.style.pointerEvents = 'auto';
            mobileMenuToggle.style.zIndex = '1002';
        }
        
        if (mainNav) {
            console.log('Main navigation found');
            mainNav.setAttribute('aria-label', 'Main navigation');
            
            // Ensure it's properly positioned
            mainNav.style.position = 'fixed';
            mainNav.style.top = '100%';
            mainNav.style.left = '0';
            mainNav.style.width = '100%';
            mainNav.style.zIndex = '999';
        }
        
        console.log('Mobile menu setup complete');
        
        // Test click functionality
        setTimeout(() => {
            console.log('Testing mobile menu click functionality...');
            if (mobileMenuToggle) {
                console.log('Mobile menu toggle is ready for clicks');
                console.log('Toggle element styles:', {
                    display: getComputedStyle(mobileMenuToggle).display,
                    visibility: getComputedStyle(mobileMenuToggle).visibility,
                    opacity: getComputedStyle(mobileMenuToggle).opacity,
                    pointerEvents: getComputedStyle(mobileMenuToggle).pointerEvents,
                    cursor: getComputedStyle(mobileMenuToggle).cursor
                });
            }
        }, 1000);
        
    } else {
        console.error('Mobile menu elements not found!');
        console.error('mobileMenuToggle:', mobileMenuToggle);
        console.error('mainNav:', mainNav);
        
        // Fallback: Try to find elements by class
        const fallbackToggle = document.querySelector('.mobile-menu-toggle');
        const fallbackNav = document.querySelector('#main-nav');
        
        if (fallbackToggle && fallbackNav) {
            console.log('Found elements by class, setting up fallback...');
            fallbackToggle.addEventListener('click', function(e) {
                e.preventDefault();
                fallbackNav.classList.toggle('active');
                fallbackToggle.classList.toggle('active');
                console.log('Fallback mobile menu toggled');
            });
        }
    }
    
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active Navigation Highlighting
    function highlightActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('#main-nav a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || 
                (currentPage === 'index.html' && linkPage === '#home') ||
                (currentPage === 'aboutus.html' && linkPage === '#about') ||
                (currentPage === 'services.html' && linkPage === '#services') ||
                (currentPage === 'portfolio.html' && linkPage === '#portfolio') ||
                (currentPage === 'contactus.html' && linkPage === '#contact')) {
                link.classList.add('active');
            }
        });
    }
    
    highlightActiveNav();
    
    // Lazy Loading Images
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Form Validation Enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Remove error class after user starts typing
                    field.addEventListener('input', function() {
                        this.classList.remove('error');
                    });
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
    
    // Header Scroll Effect
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                header.classList.add('header-hidden');
            } else {
                // Scrolling up
                header.classList.remove('header-hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    // Touch-friendly improvements for mobile
    if ('ontouchstart' in window) {
        // Increase touch targets
        const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
        touchTargets.forEach(target => {
            target.style.minHeight = '44px';
            target.style.minWidth = '44px';
        });
        
        // Add touch feedback
        const touchElements = document.querySelectorAll('.btn, button, a');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(function() {
        // Any scroll-based functionality can go here
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // Accessibility improvements
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #007bff';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Add skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #007bff;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
        transition: top 0.3s;
    `;
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Show skip link on focus
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    // Add main content id if not present
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
    
    console.log('Mobile responsive JavaScript loaded successfully!');
    
    // Final test - log all mobile menu related elements
    console.log('=== MOBILE MENU DEBUG INFO ===');
    console.log('Window width:', window.innerWidth);
    console.log('Is mobile:', window.innerWidth <= 768);
    console.log('Mobile menu toggle found:', !!mobileMenuToggle);
    console.log('Main nav found:', !!mainNav);
    console.log('Header found:', !!document.querySelector('header'));
    console.log('Font Awesome loaded:', !!document.querySelector('.fas'));
    console.log('=== END DEBUG INFO ===');
});
