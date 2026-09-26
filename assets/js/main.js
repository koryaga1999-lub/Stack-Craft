const button = document.querySelector('.menu-button'); 
const nav = document.querySelector('.site-nav');

if (button && nav) {
  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  matchMedia('(min-width: 761px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
}
