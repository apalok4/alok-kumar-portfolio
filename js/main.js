/* =============================================
   ALOK KUMAR PORTFOLIO — main.js
   ============================================= */

'use strict';

/* ─── NAVBAR: shrink on scroll + active link ─── */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Shrink navbar
  navbar.classList.toggle('scrolled', window.scrollY > 60);

  // Highlight active nav link
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${current}`
    );
  });
}, { passive: true });

/* ─── MOBILE NAV TOGGLE ─── */
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ─── SCROLL REVEAL ─── */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings inside grids
        const siblings = Array.from(
          entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')
        );
        const delay = siblings.indexOf(entry.target) * 80;

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach(el => revealObserver.observe(el));

/* ─── SMOOTH SCROLL for anchor links ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ─── COPY EMAIL on click (contact bar) ─── */
const emailLink = document.querySelector('a[href^="mailto"]');
if (emailLink) {
  emailLink.addEventListener('click', (e) => {
    // Let mailto open normally, but also copy to clipboard
    const email = emailLink.href.replace('mailto:', '');
    navigator.clipboard?.writeText(email).catch(() => {});
  });
}
