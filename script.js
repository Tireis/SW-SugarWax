// FAQ Accordion
document.querySelectorAll('.accordionBtn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var isExpanded = btn.getAttribute('aria-expanded') === 'true';
    var content = btn.nextElementSibling;

    // Close all open items
    document.querySelectorAll('.accordionBtn').forEach(function (b) {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });

    // Toggle clicked item
    if (!isExpanded) {
      btn.setAttribute('aria-expanded', 'true');
      content.classList.add('open');
    }
  });
});
