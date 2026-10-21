
/* =========================================================
   Hamad Riyaz — Portfolio Scripts
   ========================================================= */

/* ---------- Header: scroll state + mobile navigation ---------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeNav();
  });
}

/* ---------- Active navigation state ---------- */
function initActiveNav() {
  const currentFile =
    (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

  document.querySelectorAll('#primary-nav a[href]').forEach((link) => {
    const target = link.getAttribute('href').split('/').pop().toLowerCase();

    if (target === currentFile) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');

  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px'
    }
  );

  items.forEach((item) => observer.observe(item));
}

/* ---------- Back to top ---------- */
function initBackToTop() {
  const button = document.querySelector('.to-top');

  if (!button) return;

  const onScroll = () => {
    button.classList.toggle('is-visible', window.scrollY > 500);
  };

  onScroll();

  window.addEventListener('scroll', onScroll, { passive: true });

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ---------- Footer year ---------- */
function initYear() {
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

/* ---------- AI projects: expand and collapse ---------- */
function initProjectLists() {
  document.querySelectorAll('[data-project-toggle]').forEach((button) => {
    const card = button.closest('.project');
    const list = card?.querySelector('[data-project-list]');

    if (!list) return;

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', String(!expanded));
      list.hidden = expanded;

      button.innerHTML = expanded
        ? 'View All Projects <span aria-hidden="true">＋</span>'
        : 'Hide Projects <span aria-hidden="true">−</span>';
    });
  });
}

/* ---------- Projects: filtering ---------- */
function initProjects() {
  const grid = document.getElementById('project-grid');

  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.project'));
  const emptyState = document.getElementById('projects-empty');
  const filterButtons = document.querySelectorAll('.filter');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((filterButton) => {
        filterButton.classList.remove('is-active');
        filterButton.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('is-active');
      button.setAttribute('aria-pressed', 'true');

      const selectedFilter = button.dataset.filter;
      let visibleCount = 0;

      cards.forEach((card) => {
        const categories = (card.dataset.category || '').split(/\s+/);

        const matches =
          selectedFilter === 'all' ||
          categories.includes(selectedFilter);

        card.classList.toggle('is-hidden', !matches);

        if (matches) visibleCount++;
      });

      if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
      }
    });
  });

  initProjectModal(cards);
}

/* ---------- Project details modal ---------- */
function initProjectModal(cards) {
  const modal = document.getElementById('project-modal');

  if (!modal) return;

  const panel = modal.querySelector('.modal__panel');
  const closeButton = modal.querySelector('.modal__close');
  const content = modal.querySelector('#modal-content');

  let lastFocusedElement = null;

  const openModal = (card) => {
    const details = card.querySelector('template');

    if (!details || !content) return;

    lastFocusedElement = document.activeElement;
    content.innerHTML = details.innerHTML;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (closeButton) closeButton.focus();
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (
      lastFocusedElement &&
      typeof lastFocusedElement.focus === 'function'
    ) {
      lastFocusedElement.focus();
    }
  };

  cards.forEach((card) => {
    const trigger = card.querySelector('[data-open-details]');

    if (trigger) {
      trigger.addEventListener('click', () => openModal(card));
    }
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (event) => {
    if (panel && !panel.contains(event.target)) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/* ---------- Contact form validation ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');

  if (!form) return;

  const status = document.getElementById('form-status');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const rules = {
    name: (value) =>
      value.trim().length >= 2
        ? ''
        : 'Please enter your name (2+ characters).',

    email: (value) =>
      emailPattern.test(value.trim())
        ? ''
        : 'Please enter a valid email address.',

    subject: (value) =>
      value.trim().length >= 3
        ? ''
        : 'Please add a short subject.',

    message: (value) =>
      value.trim().length >= 15
        ? ''
        : 'Please write at least 15 characters.'
  };

  const validateField = (input) => {
    const rule = rules[input.name];

    if (!rule) return true;

    const error = rule(input.value);
    const wrapper = input.closest('.field');

    if (!wrapper) return !error;

    wrapper.classList.toggle('has-error', Boolean(error));

    const errorElement = wrapper.querySelector('.error');

    if (errorElement) {
      errorElement.textContent = error;
    }

    input.setAttribute('aria-invalid', error ? 'true' : 'false');

    return !error;
  };

  form.querySelectorAll('input, textarea').forEach((input) => {
    input.addEventListener('blur', () => {
      validateField(input);
    });

    input.addEventListener('input', () => {
      const wrapper = input.closest('.field');

      if (wrapper?.classList.contains('has-error')) {
        validateField(input);
      }
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const inputs = Array.from(
      form.querySelectorAll('input, textarea')
    );

    const valid = inputs.map(validateField).every(Boolean);

    if (!valid) {
      if (status) {
        status.textContent = 'Please fix the highlighted fields.';
        status.style.color = '#ff8a8a';
      }

      const firstError = form.querySelector(
        '.field.has-error input, .field.has-error textarea'
      );

      if (firstError) firstError.focus();

      return;
    }

    if (status) {
      status.style.color = '';
      status.textContent = 'Sending message...';
    }

    try {
      const response = await fetch(
        'https://formspree.io/f/xppaglrz',
        {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json'
          }
        }
      );

      if (response.ok) {
        if (status) {
          status.style.color = '#35d6e6';
          status.textContent =
            'Message sent successfully! I will get back to you soon.';
        }

        form.reset();

        form.querySelectorAll('.field').forEach((field) => {
          field.classList.remove('has-error');

          const errorElement = field.querySelector('.error');

          if (errorElement) {
            errorElement.textContent = '';
          }
        });

        form.querySelectorAll('input, textarea').forEach((input) => {
          input.setAttribute('aria-invalid', 'false');
        });
      } else {
        if (status) {
          status.style.color = '#ff8a8a';
          status.textContent = 'Something went wrong. Please try again.';
        }
      }
    } catch (error) {
      if (status) {
        status.style.color = '#ff8a8a';
        status.textContent =
          'Unable to send message. Please try again later.';
      }
    }
  });
}

/* ---------- Initialize portfolio ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initActiveNav();
  initReveal();
  initBackToTop();
  initYear();
  initProjectLists();
  initProjects();
  initContactForm();
});
