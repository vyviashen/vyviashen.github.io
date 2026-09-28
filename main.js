(function () {
  document.querySelectorAll('.frame img').forEach(function (img) {
    var frame = img.closest('.frame');
    function markEmpty() { frame.classList.add('empty'); }
    img.addEventListener('error', markEmpty);
    if (img.complete && img.naturalWidth === 0) markEmpty();
  });

  var btn = document.getElementById('copy-email');
  if (btn) {
    btn.addEventListener('click', function () {
      var el = document.getElementById('email');
      function reset() { setTimeout(function () { btn.textContent = 'Copy'; }, 1600); }
      function fallback() {
        var r = document.createRange(); r.selectNodeContents(el);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        btn.textContent = 'Selected'; reset();
      }
      try {
        navigator.clipboard.writeText(el.textContent).then(function () { btn.textContent = 'Copied'; reset(); }, fallback);
      } catch (e) { fallback(); }
    });
  }
})();
