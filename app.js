// ========================================
// Navigation
// ========================================
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    navLinks.classList.toggle('active');
    mobileBtn.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (!navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileBtn.classList.remove('active');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after click
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.mobile-menu-btn').classList.remove('active');
        }
    });
});

// ========================================
// Contact Form
// ========================================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

// Backend API configuration
const API_BASE_URL = 'https://gift-shop-backend-production.up.railway.app'; // Railway backend URL
const GIFTBAG_API = `${API_BASE_URL}/api/giftbag`; // GiftBag B2B API

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value.trim()
    };
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    setLoading(true);
    hideMessage();
    
    try {
        const response = await fetch(`${GIFTBAG_API}/inquiry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            showMessage('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.', 'success');
            contactForm.reset();
        } else {
            showMessage(data.message || 'Failed to send message. Please try again later.', 'error');
        }
    } catch (error) {
        console.error('Error sending message:', error);
        showMessage('Network error. Please check your connection and try again.', 'error');
    } finally {
        setLoading(false);
    }
});

function setLoading(isLoading) {
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    if (isLoading) {
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
    } else {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideMessage() {
    formMessage.style.display = 'none';
}

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes
document.querySelectorAll('.product-card, .benefit-card, .about-card, .option-item').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// ========================================
// Hero Animation on Load
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// Product Image Placeholder - Replace with real images
// ========================================
// To use your actual product images, replace the placeholder divs with img tags:
// <img src="path-to-your-image.jpg" alt="Product Name" loading="lazy">

// Example usage:
// <div class="product-image">
//     <img src="images/product-1.jpg" alt="Premium Laser Bag" loading="lazy">
// </div>

// ========================================
// Console info for developers
// ========================================
console.log('%cGiftBuyBuy Website', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cB2B Custom Laser Gift Bags', 'font-size: 14px; color: #64748b;');
console.log('%cWebsite: www.giftbuybuy.com', 'font-size: 12px; color: #94a3b8;');
