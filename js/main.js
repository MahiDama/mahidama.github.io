/* Main JavaScript for interactive features */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll already handled by HTML scroll-behavior
    
    // Form submission
    const form = document.getElementById('mentorship-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const linkedin = document.getElementById('linkedin').value;
            const challenge = document.getElementById('challenge').value;
            const email = document.getElementById('email').value;
            
            // Log or send to your backend (e.g., Formspree, Netlify Forms)
            console.log({
                name,
                linkedin,
                challenge,
                email
            });
            
            // Show feedback
            alert(`Thanks ${name}! Redirecting to Calendly for booking...`);
            
            // Replace with your actual Calendly URL
            window.location.href = 'https://calendly.com/mahidama';
        });
    }
    
    // Add hover effects to tech badges
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            const tech = this.getAttribute('data-tech');
            // Could add tooltip or icon display here
        });
    });
    
    // Lazy load project images if any
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });
        
        document.querySelectorAll('.project-card').forEach(el => {
            observer.observe(el);
        });
    }
});

// Light analytics (optional - no external dependencies)
function trackEvent(eventName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName);
    }
}

// SUBSTACK RSS FEED FETCH & SLIDER
document.addEventListener('DOMContentLoaded', () => {
    const feedContainer = document.getElementById('substack-feed');
    if (!feedContainer) return;

    // Substack RSS URL
    const RSS_URL = 'https://mahidama.substack.com/feed';
    // Using a public RSS to JSON converter (rss2json.com) for client-side fetching
    const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                const posts = data.items;
                feedContainer.innerHTML = '';
                
                posts.forEach(post => {
                    const date = new Date(post.pubDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    });
                    
                    const cleanDescription = post.description
                        .replace(/<[^>]*>/g, '') // Remove HTML tags
                        .substring(0, 150) + '...';

                    const card = document.createElement('a');
                    card.href = post.link;
                    card.target = '_blank';
                    card.className = 'blog-card';
                    card.innerHTML = `
                        <div class="blog-card-content">
                            <span class="post-date">${date}</span>
                            <h3>${post.title}</h3>
                            <p>${cleanDescription}</p>
                        </div>
                        <span class="link-btn">Read More →</span>
                    `;
                    feedContainer.appendChild(card);
                });

                initSlider();
            } else {
                feedContainer.innerHTML = '<div class="loading-text">Unable to load blog posts. Please visit Substack directly.</div>';
            }
        })
        .catch(err => {
            console.error('Error fetching Substack feed:', err);
            feedContainer.innerHTML = '<div class="loading-text">Error connecting to blog feed.</div>';
        });

    function initSlider() {
        const slider = document.querySelector('.substack-slider');
        let currentIndex = 0;

        const updateSlider = () => {
            const cards = document.querySelectorAll('.blog-card');
            if (cards.length === 0) return;
            
            const cardWidth = cards[0].offsetWidth;
            const gap = 32; // 2rem
            const move = currentIndex * (cardWidth + gap);
            slider.style.transform = `translateX(-${move}px)`;
        };

        nextBtn.addEventListener('click', () => {
            const cards = document.querySelectorAll('.blog-card');
            const visibleCards = window.innerWidth > 1024 ? 3 : (window.innerWidth > 768 ? 2 : 1);
            if (currentIndex < cards.length - visibleCards) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back
            }
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            const cards = document.querySelectorAll('.blog-card');
            const visibleCards = window.innerWidth > 1024 ? 3 : (window.innerWidth > 768 ? 2 : 1);
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = Math.max(0, cards.length - visibleCards); // Loop to end
            }
            updateSlider();
        });

        // Responsive handling
        window.addEventListener('resize', updateSlider);
    }
});

