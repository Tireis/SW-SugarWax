// Mobiles Menü
(function () {
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    menu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  }

  burger.addEventListener('click', function () {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  window.matchMedia('(min-width: 900px)').addEventListener('change', function (e) {
    if (e.matches) setMenu(false);
  });
})();

// FAQ Accordion
document.querySelectorAll('.accordionBtn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    document.getElementById(btn.getAttribute('aria-controls')).classList.toggle('open', !open);
  });
});

// Feste Terminleiste erst nach dem Hero einblenden
(function () {
  var bar = document.getElementById('stickyCta');
  if (!bar) return;
  function update() {
    bar.classList.toggle('visible', window.scrollY > window.innerHeight * 0.6);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// Sanftes Einblenden beim Scrollen
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  items.forEach(function (el) { io.observe(el); });
})();
