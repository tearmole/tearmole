/* 泪痣 · 轻交互脚本 */

(function(){

/* ── 1. 回到顶部 ── */
var topBtn = document.getElementById('back-top');
if (topBtn) {
  var checkScroll = function() {
    topBtn.style.display = window.scrollY > 300 ? '' : 'none';
  };
  checkScroll();
  window.addEventListener('scroll', checkScroll);
  topBtn.addEventListener('click', function() {
    var start = window.scrollY;
    var step = 0;
    var duration = 400;
    var tick = function(ts) {
      if (!step) step = ts;
      var p = Math.min((ts - step) / duration, 1);
      window.scrollTo(0, start * (1 - p));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/* ── 2. 夜间/浅色切换 ── */
var saved = localStorage.getItem('theme');
var preferDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
if (saved === 'dark' || (!saved && preferDark)) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

var toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
  var syncIcon = function() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    toggleBtn.textContent = dark ? '☀️' : '🌙';
  };
  syncIcon();
  toggleBtn.addEventListener('click', function() {
    var now = document.documentElement.getAttribute('data-theme');
    var next = now === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    syncIcon();
  });
}

/* ── 3. 代码块复制按钮 ── */
var pres = document.querySelectorAll('pre');
pres.forEach(function(pre) {
  var btn = document.createElement('button');
  btn.textContent = '复制';
  btn.setAttribute('aria-label', '复制代码');
  btn.style.cssText = 'position:absolute;top:6px;right:6px;font-size:11px;line-height:1;padding:3px 8px;border:1px solid #dce3ea;border-radius:3px;background:#fff;color:#8b9aab;cursor:pointer;opacity:0;transition:opacity .15s';
  pre.style.position = 'relative';
  pre.appendChild(btn);
  pre.addEventListener('mouseenter', function(){ btn.style.opacity = '1'; });
  pre.addEventListener('mouseleave', function(){ btn.style.opacity = '0'; });
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    var code = pre.querySelector('code');
    var txt = code ? code.textContent : pre.textContent;
    navigator.clipboard.writeText(txt).then(function() {
      btn.textContent = '已复制';
      btn.style.opacity = '1';
      setTimeout(function(){ btn.textContent = '复制'; }, 1000);
    });
  });
});

})();
