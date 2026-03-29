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
