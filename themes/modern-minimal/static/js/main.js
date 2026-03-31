/* Main JavaScript for interactive features */

document.addEventListener('DOMContentLoaded', function() {
    // CONTACT FORM SUBMISSION WITH RATE LIMITING
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // RATE LIMITING: Check if user has submitted in the last 24 hours
            const lastSubmission = localStorage.getItem('last_contact_submission');
            const now = new Date().getTime();
            const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

            if (lastSubmission && (now - lastSubmission < twentyFourHours)) {
                const remainingTime = Math.ceil((twentyFourHours - (now - lastSubmission)) / (60 * 60 * 1000));
                alert(`You've already sent a message recently. Please wait ${remainingTime} more hour(s) before sending another one. 🛡️`);
                return;
            }

            const data = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Record the submission time for rate limiting
                    localStorage.setItem('last_contact_submission', new Date().getTime());
                    
                    contactForm.style.display = "none";
                    formStatus.style.display = "block";
                    contactForm.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert("Oops! There was a problem submitting your form");
                        }
                    })
                }
            }).catch(error => {
                alert("Oops! There was a problem submitting your form");
            });
        });
    }
    
    // Add hover effects to tech badges
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            // Optional: tooltip logic
        });
    });
    
    // Intersection Observer for fade-in effects
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });
        
        document.querySelectorAll('section').forEach(el => {
            observer.observe(el);
        });
    }

    // Substack Slider logic
    initSubstackSlider();
});

function initSubstackSlider() {
    const feedContainer = document.getElementById('substack-feed');
    if (!feedContainer) return;

    const RSS_URL = 'https://mahidama.substack.com/feed';
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
                        month: 'short', day: 'numeric', year: 'numeric'
                    });
                    
                    const cleanDescription = post.description
                        .replace(/<[^>]*>/g, '')
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
                feedContainer.innerHTML = '<div class="loading-text">Unable to load blog posts.</div>';
            }
        });

    function initSlider() {
        const slider = document.querySelector('.substack-slider');
        let currentIndex = 0;

        const updateSlider = () => {
            const cards = document.querySelectorAll('.blog-card');
            if (cards.length === 0) return;
            const cardWidth = cards[0].offsetWidth;
            const gap = 32;
            const move = currentIndex * (cardWidth + gap);
            slider.style.transform = `translateX(-${move}px)`;
        };

        nextBtn.addEventListener('click', () => {
            const cards = document.querySelectorAll('.blog-card');
            const visibleCards = window.innerWidth > 1024 ? 3 : (window.innerWidth > 768 ? 2 : 1);
            if (currentIndex < cards.length - visibleCards) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            const cards = document.querySelectorAll('.blog-card');
            const visibleCards = window.innerWidth > 1024 ? 3 : (window.innerWidth > 768 ? 2 : 1);
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = Math.max(0, cards.length - visibleCards);
            }
            updateSlider();
        });

        window.addEventListener('resize', updateSlider);
    }
}
