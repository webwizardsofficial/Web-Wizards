const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuContainer = document.getElementById('mobile-menu-container');
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
const closeMenuByLinks = document.querySelectorAll('.mobile-menu-link');
const counters = document.querySelectorAll('.counter');
const body = document.body;

// Function to open mobile menu
menuBtn.addEventListener('click', () => {
    mobileMenuContainer.classList.remove('hidden');
    mobileMenu.classList.remove('translate-x-full');
    body.classList.add('overflow-hidden')
    
    // Add animation to menu links
    mobileMenuLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.remove('opacity-0');
            link.classList.remove('translate-x-4');
        }, 100 * index); // Delay each link's animation
    });
});

// Function to close mobile menu
closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    body.classList.remove('overflow-hidden')
    setTimeout(() => {
        mobileMenuContainer.classList.add('hidden');
    }, 300); // Wait for animation to finish before hiding container
});

// Function to close mobile menu by clicking on links
closeMenuByLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        body.classList.remove('overflow-hidden')
        setTimeout(() => {
            mobileMenuContainer.classList.add('hidden');
        }, 300); // Wait for animation to finish before hiding container
    });
});

// Stats Counter Section........................
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    const speed = 700; // Speed of count-up effect

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                const increment = target / speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = `${target}+`;
                }
            };
            updateCount();
        });
    };

    // Check if section is in view
    const statsSection = document.getElementById('stats');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(statsSection); // Stop observing once animation starts
            }
        });
    });

    observer.observe(statsSection); // Start observing
});

// Function to Display Which Service Details On Click of Button
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.content-button');
    const contents = document.querySelectorAll('.content');

    // Set focus on the first button
    if (buttons.length > 0) {
        buttons[0].focus();
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-content');

            contents.forEach(content => {
                if (content.id === target) {
                    content.classList.add('active');
                    content.classList.remove('hidden');
                } else {
                    content.classList.remove('active');
                    content.classList.add('hidden');
                }
            });
        });
    });
});