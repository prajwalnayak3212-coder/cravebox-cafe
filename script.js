// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Animate hamburger
      const spans = mobileMenuBtn.querySelectorAll('span');
      spans[0].style.transform = navLinks.classList.contains('active') 
        ? 'rotate(45deg) translate(10px, 10px)' 
        : 'rotate(0) translate(0, 0)';
      spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
      spans[2].style.transform = navLinks.classList.contains('active') 
        ? 'rotate(-45deg) translate(7px, -7px)' 
        : 'rotate(0) translate(0, 0)';
    });
  }

  // Close menu when clicking nav link
  const navLinksElements = document.querySelectorAll('.nav-link');
  navLinksElements.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      
      const spans = mobileMenuBtn.querySelectorAll('span');
      spans[0].style.transform = 'rotate(0) translate(0, 0)';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'rotate(0) translate(0, 0)';
    });
  });
});

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(element => {
  observer.observe(element);
});

// Video Modal Functions
let currentVideoItem = '';

function playVideo(itemName) {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('menuVideo');
  const imageContainer = document.getElementById('imageContainer');
  const menuImage = document.getElementById('menuImage');
  const imageLabel = document.getElementById('imageLabel');
  const videoPath = `./${itemName}.mp4`;

  // Reset modal state to image-first flow
  imageContainer.classList.add('hidden');
  video.style.display = 'block';
  video.src = videoPath;
  menuImage.src = `./${itemName}.jpg`;
  imageLabel.textContent = itemName.charAt(0).toUpperCase() + itemName.slice(1);

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  currentVideoItem = itemName;

  video.play().catch(() => {
    console.log('Video playback started');
  });
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('menuVideo');
  const imageContainer = document.getElementById('imageContainer');

  modal.classList.add('hidden');
  video.pause();
  video.currentTime = 0;
  video.src = '';
  imageContainer.classList.add('hidden');
  document.body.style.overflow = 'auto';
  currentVideoItem = '';
}

function showMenuImage() {
  const video = document.getElementById('menuVideo');
  const imageContainer = document.getElementById('imageContainer');
  const menuImage = document.getElementById('menuImage');
  const imageLabel = document.getElementById('imageLabel');

  video.style.display = 'none';
  const imagePath = `./${currentVideoItem}.jpg`;
  menuImage.src = imagePath;
  imageLabel.textContent = currentVideoItem.charAt(0).toUpperCase() + currentVideoItem.slice(1);
  imageContainer.classList.remove('hidden');
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('videoModal');
  const modalContent = document.querySelector('.modal-content');
  
  if (modal && !modal.classList.contains('hidden')) {
    if (event.target === modal || (event.target.classList && event.target.classList.contains('modal-overlay'))) {
      closeVideoModal();
    }
  }
  
  const galleryModal = document.getElementById('galleryModal');
  if (galleryModal && !galleryModal.classList.contains('hidden')) {
    if (event.target === galleryModal || (event.target.classList && event.target.classList.contains('modal-overlay'))) {
      closeGallery();
    }
  }
});

// Gallery Modal Functions
let currentGalleryIndex = 1;

function openGallery(num) {
  const modal = document.getElementById('galleryModal');
  const img = document.getElementById('galleryImage');
  
  currentGalleryIndex = num;
  img.src = `./gallery-${num}.jpg`;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function nextGallery() {
  currentGalleryIndex++;
  if (currentGalleryIndex > 8) {
    currentGalleryIndex = 1;
  }
  updateGalleryImage();
}

function prevGallery() {
  currentGalleryIndex--;
  if (currentGalleryIndex < 1) {
    currentGalleryIndex = 8;
  }
  updateGalleryImage();
}

function updateGalleryImage() {
  const img = document.getElementById('galleryImage');
  img.src = `./gallery-${currentGalleryIndex}.jpg`;
}

function closeGallery() {
  const modal = document.getElementById('galleryModal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Keyboard navigation for gallery
document.addEventListener('keydown', function(event) {
  const galleryModal = document.getElementById('galleryModal');
  
  if (galleryModal && !galleryModal.classList.contains('hidden')) {
    if (event.key === 'ArrowRight') {
      nextGallery();
    } else if (event.key === 'ArrowLeft') {
      prevGallery();
    } else if (event.key === 'Escape') {
      closeGallery();
    }
  }
  
  const videoModal = document.getElementById('videoModal');
  if (videoModal && !videoModal.classList.contains('hidden')) {
    if (event.key === 'Escape') {
      closeVideoModal();
    }
  }
});

// Review Form Handling
const ratingStars = document.getElementById('ratingStars');
const reviewRatingInput = document.getElementById('reviewRating');

if (ratingStars) {
  const stars = ratingStars.querySelectorAll('.star');
  
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const rating = this.getAttribute('data-rating');
      reviewRatingInput.value = rating;
      
      // Update visual state
      stars.forEach(s => {
        if (s.getAttribute('data-rating') <= rating) {
          s.classList.add('filled');
        } else {
          s.classList.remove('filled');
        }
      });
    });
    
    star.addEventListener('mouseenter', function() {
      const rating = this.getAttribute('data-rating');
      stars.forEach(s => {
        if (s.getAttribute('data-rating') <= rating) {
          s.style.color = '#C9B37E';
        } else {
          s.style.color = '#ddd';
        }
      });
    });
  });
  
  ratingStars.addEventListener('mouseleave', function() {
    const currentRating = reviewRatingInput.value;
    stars.forEach(s => {
      if (s.getAttribute('data-rating') <= currentRating) {
        s.style.color = '#C9B37E';
      } else {
        s.style.color = '#ddd';
      }
    });
  });
}

// Character counter for review
const reviewText = document.getElementById('reviewText');
const charCount = document.getElementById('charCount');

if (reviewText) {
  reviewText.addEventListener('input', function() {
    charCount.textContent = this.value.length;
    if (this.value.length > 500) {
      this.value = this.value.substring(0, 500);
      charCount.textContent = '500';
    }
  });
}

// Submit Review
function submitReview(event) {
  event.preventDefault();
  
  const name = document.getElementById('reviewName').value.trim();
  const rating = document.getElementById('reviewRating').value;
  const text = document.getElementById('reviewText').value.trim();
  
  if (!name || !text) {
    alert('Please fill in all fields');
    return;
  }
  
  // Create review object
  const review = {
    name: name,
    rating: rating,
    text: text,
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  };
  
  // Get existing reviews from localStorage
  let reviews = JSON.parse(localStorage.getItem('cravebox_reviews')) || [];
  reviews.unshift(review);
  
  // Save to localStorage
  localStorage.setItem('cravebox_reviews', JSON.stringify(reviews));
  
  // Reset form
  document.querySelector('.review-form').reset();
  reviewRatingInput.value = '5';
  charCount.textContent = '0';
  
  // Update stars visual
  const stars = ratingStars.querySelectorAll('.star');
  stars.forEach((s, index) => {
    if (index < 5) {
      s.classList.add('filled');
    } else {
      s.classList.remove('filled');
    }
  });
  
  // Show success message
  showReviewSuccess();
  
  // Reload reviews display
  displayReviews();
}

function showReviewSuccess() {
  const successMsg = document.createElement('div');
  successMsg.className = 'review-success-toast';
  successMsg.innerHTML = '<span>✓</span> Review posted successfully!';
  document.body.appendChild(successMsg);
  
  setTimeout(() => {
    successMsg.remove();
  }, 3000);
}

// Add toast styles
const styleTag = document.createElement('style');
styleTag.textContent = `
  .review-success-toast {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: #27ae60;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: slideInRight 0.3s ease-out;
    z-index: 3000;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-weight: 600;
  }
  
  .review-success-toast span {
    font-size: 1.3rem;
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
document.head.appendChild(styleTag);

// Display Reviews
function displayReviews() {
  const reviewsList = document.getElementById('reviewsList');
  const reviewCount = document.getElementById('reviewCount');
  
  let reviews = JSON.parse(localStorage.getItem('cravebox_reviews')) || [];
  
  reviewCount.textContent = reviews.length;
  
  if (reviews.length === 0) {
    reviewsList.innerHTML = `
      <div class="no-reviews">
        <p>No reviews yet. Be the first to share!</p>
      </div>
    `;
    return;
  }
  
  reviewsList.innerHTML = reviews.map((review, index) => `
    <div class="review-card" style="animation: fadeInUp 0.5s ease-out; animation-delay: ${index * 0.1}s; animation-fill-mode: both;">
      <div class="review-header">
        <div class="review-info">
          <h4>${escapeHtml(review.name)}</h4>
          <div class="star-rating">
            ${'★'.repeat(review.rating)}<span style="color: #ddd;">${'★'.repeat(5 - review.rating)}</span>
          </div>
          <span class="review-date">${review.date}</span>
        </div>
      </div>
      <p class="review-text">${escapeHtml(review.text)}</p>
    </div>
  `).join('');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Load reviews on page load
displayReviews();

// Booking Form Handling
function submitBooking(event) {
  event.preventDefault();
  
  const name = document.getElementById('bookingName').value.trim();
  const phone = document.getElementById('bookingPhone').value.trim();
  const guests = document.getElementById('bookingGuests').value;
  const date = document.getElementById('bookingDate').value;
  const time = document.getElementById('bookingTime').value;
  const requests = document.getElementById('bookingRequests').value.trim();
  
  // Validate phone format
  const phoneRegex = /^[+]?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    alert('Please enter a valid phone number');
    return;
  }
  
  // Validate date is in future
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (selectedDate < today) {
    alert('Please select a future date');
    return;
  }
  
  // Create booking object
  const booking = {
    name: name,
    phone: phone,
    guests: guests,
    date: date,
    time: time,
    requests: requests,
    bookingDate: new Date().toISOString()
  };
  
  // Get existing bookings from localStorage
  let bookings = JSON.parse(localStorage.getItem('cravebox_bookings')) || [];
  bookings.push(booking);
  
  // Save to localStorage
  localStorage.setItem('cravebox_bookings', JSON.stringify(bookings));
  
  // Show success message
  showBookingSuccess();
  
  // Reset form
  document.querySelector('.booking-form').reset();
  
  // Hide form and show success for a few seconds
  setTimeout(() => {
    hideBookingSuccess();
  }, 4000);
}

function showBookingSuccess() {
  const successDiv = document.getElementById('bookingSuccess');
  const form = document.querySelector('.booking-form');
  
  form.style.opacity = '0';
  form.style.pointerEvents = 'none';
  successDiv.classList.remove('hidden');
}

function hideBookingSuccess() {
  const successDiv = document.getElementById('bookingSuccess');
  const form = document.querySelector('.booking-form');
  
  successDiv.classList.add('hidden');
  form.style.opacity = '1';
  form.style.pointerEvents = 'auto';
}

// WhatsApp Integration
function openWhatsApp() {
  const phoneNumber = '919187670554'; // +91 91876 70554
  const message = 'Hi CraveBox Café! I\'d like to inquire about your menu and services.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}

// Smooth scrolling for navigation (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Prevent form submission on Enter in textarea
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && event.ctrlKey && event.target.id === 'reviewText') {
    document.querySelector('.review-form').dispatchEvent(new Event('submit'));
  }
});

// Load all data on page load
window.addEventListener('load', function() {
  displayReviews();
  
  // Set minimum booking date to today
  const bookingDate = document.getElementById('bookingDate');
  const today = new Date().toISOString().split('T')[0];
  bookingDate.setAttribute('min', today);
});

// Prevent form submission issues
document.addEventListener('submit', function(event) {
  if (event.target.classList.contains('review-form')) {
    // Already handled by submitReview
  } else if (event.target.classList.contains('booking-form')) {
    // Already handled by submitBooking
  }
});
