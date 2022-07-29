(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnRefClose = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuRefBackdrop = document.querySelector('[data-menu-backdrop]');
  const mobileBodyRef = document.querySelector('[body]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRefClose.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
    menuBtnRefClose.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    mobileMenuRefBackdrop.classList.toggle('is-open');
    mobileBodyRef.classList.toggle('body-fixed');
  });

  menuBtnRefClose.addEventListener('click', () => {
    const expanded = menuBtnRefClose.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRefClose.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
    menuBtnRefClose.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    mobileMenuRefBackdrop.classList.toggle('is-open');
    mobileBodyRef.classList.toggle('body-fixed');
  });
})();
