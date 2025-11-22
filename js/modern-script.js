/**
 * ICAST 2026 - Modern Professional JavaScript
 * Handles all interactive elements and animations
 */

(function() {
  'use strict';

  // =======================================
  // Navigation Functionality
  // =======================================
  const initNavigation = () => {
    const nav = document.getElementById('main-nav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
      });

      // Close menu when clicking on a link
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
        });
      });
    }

    // Sticky navigation on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    const highlightNav = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', highlightNav);
  };

  // =======================================
  // Smooth Scroll
  // =======================================
  const initSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        if (href === '#' || !href) return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 80;

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // =======================================
  // Back to Top Button
  // =======================================
  const initBackToTop = () => {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      });

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  };

  // =======================================
  // Intersection Observer for Animations
  // =======================================
  const initScrollAnimations = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Animate elements on scroll
    const animateElements = document.querySelectorAll(`
      .topic-card,
      .speaker-card,
      .sponsor-item,
      .info-card,
      .contact-card,
      .guideline-card
    `);

    animateElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(el);
    });
  };

  // =======================================
  // Timeline Animation
  // =======================================
  const initTimelineAnimation = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }
      });
    }, {
      threshold: 0.2
    });

    timelineItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-50px)';
      item.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
      timelineObserver.observe(item);
    });
  };

  // =======================================
  // Form Validation
  // =======================================
  const initFormValidation = () => {
    const form = document.querySelector('.contact-form');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !subject || !message) {
          alert('Please fill in all fields');
          return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address');
          return;
        }

        // If validation passes, you can submit the form
        // For now, just show a success message
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
      });
    }
  };

  // =======================================
  // Counter Animation for Stats
  // =======================================
  const initCounterAnimation = () => {
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const animateCounter = (element) => {
      const target = element.textContent;
      const isPlus = target.includes('+');
      const numericValue = parseInt(target.replace(/\D/g, ''));

      if (isNaN(numericValue)) return;

      let current = 0;
      const increment = numericValue / 50;
      const duration = 2000;
      const stepTime = duration / 50;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
        }

        if (target.includes('th')) {
          element.textContent = Math.floor(current) + 'th';
        } else if (isPlus) {
          element.textContent = Math.floor(current) + '+';
        } else {
          element.textContent = Math.floor(current);
        }
      }, stepTime);
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          stats.forEach(stat => {
            animateCounter(stat);
          });
        }
      });
    }, {
      threshold: 0.5
    });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
      counterObserver.observe(heroStats);
    }
  };

  // =======================================
  // Parallax Effect for Hero
  // =======================================
  const initParallax = () => {
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      });
    }
  };

  // =======================================
  // Loading Animation
  // =======================================
  const initPageLoad = () => {
    document.body.style.opacity = '0';

    window.addEventListener('load', () => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    });
  };

  // =======================================
  // Lazy Load Images
  // =======================================
  const initLazyLoad = () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  };

  // =======================================
  // Modal/Popup Functionality (if needed)
  // =======================================
  const initModals = () => {
    const modalTriggers = document.querySelectorAll('[data-modal]');

    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.dataset.modal;
        const modal = document.getElementById(modalId);

        if (modal) {
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    // Close modals
    const closeButtons = document.querySelectorAll('[data-close-modal]');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  };

  // =======================================
  // Tooltip Functionality
  // =======================================
  const initTooltips = () => {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(el => {
      el.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = el.dataset.tooltip;
        document.body.appendChild(tooltip);

        const rect = el.getBoundingClientRect();
        tooltip.style.position = 'absolute';
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        tooltip.style.opacity = '1';
      });

      el.addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
          tooltip.remove();
        }
      });
    });
  };

  // =======================================
  // Countdown Timer
  // =======================================
  const initCountdown = () => {
    const conferenceDate = new Date('2026-10-24T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = conferenceDate - now;

      if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<div class="countdown-ended">Conference Has Started!</div>';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const daysEl = document.getElementById('days');
      const hoursEl = document.getElementById('hours');
      const minutesEl = document.getElementById('minutes');
      const secondsEl = document.getElementById('seconds');

      if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  };

  // =======================================
  // AOS Animation Initialization
  // =======================================
  const initAOS = () => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        delay: 0
      });
    }
  };

  // =======================================
  // Enhanced Counter Animation for Stats
  // =======================================
  const initEnhancedCounters = () => {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    let hasAnimated = false;

    const animateValue = (element, start, end, duration) => {
      const range = end - start;
      const increment = range / (duration / 16); // 60fps
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        element.textContent = Math.floor(current);
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            animateValue(stat, 0, target, 2000);
          });
        }
      });
    }, {
      threshold: 0.5
    });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
      observer.observe(statsSection);
    }
  };

  // =======================================
  // Initialize All Functions
  // =======================================
  const init = () => {
    // Core functionality
    initNavigation();
    initSmoothScroll();
    initBackToTop();

    // Hero enhancements
    initCountdown();
    initAOS();
    initEnhancedCounters();

    // Animations
    initScrollAnimations();
    initTimelineAnimation();
    initCounterAnimation();
    initParallax();

    // Form & interactions
    initFormValidation();
    initModals();
    initTooltips();

    // Performance
    initLazyLoad();
    initPageLoad();

    // Log initialization
    console.log('%c ICAST 2026 Website Initialized ', 'background: #1a237e; color: #ffa726; padding: 10px; font-weight: bold;');
    console.log('%c Enhanced Hero Section Active ', 'background: #ffa726; color: #1a237e; padding: 5px; font-weight: bold;');
  };

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
