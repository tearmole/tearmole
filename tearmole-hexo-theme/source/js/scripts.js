+function(){
var t=document.getElementById('back-top');
if(t){var n=function(){t.style.display=window.scrollY>300?'':'none'};n();window.addEventListener('scroll',n)}
var e=localStorage.getItem('theme');
var r=window.matchMedia('(prefers-color-scheme:dark)').matches;
if(e==='dark'||(!e&&r))document.documentElement.setAttribute('data-theme','dark');
var o=document.getElementById('theme-toggle');
if(o){var a=function(){var t=document.documentElement.getAttribute('data-theme')==='dark';o.textContent=t?'\u2600\ufe0f':'\ud83c\udf19'};a();o.addEventListener('click',function(){var t=document.documentElement.getAttribute('data-theme');var n=t==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',n);localStorage.setItem('theme',n);a()})}
document.querySelectorAll('pre').forEach(function(t){var n=document.createElement('button');n.textContent='\u590d\u5236';n.setAttribute('aria-label','\u590d\u5236\u4ee3\u7801');n.style.cssText='position:absolute;top:6px;right:6px;font-size:11px;padding:3px 8px;border:1px solid #dce3ea;border-radius:3px;background:#fff;color:#8b9aab;cursor:pointer;opacity:0;transition:opacity .15s';t.style.position='relative';t.appendChild(n);t.addEventListener('mouseenter',function(){n.style.opacity='1'});t.addEventListener('mouseleave',function(){n.style.opacity='0'});n.addEventListener('click',function(e){e.stopPropagation();var r=t.querySelector('code');var o=r?r.textContent:t.textContent;navigator.clipboard.writeText(o).then(function(){n.textContent='\u5df2\u590d\u5236';n.style.opacity='1';setTimeout(function(){n.textContent='\u590d\u5236'},1000)})})});
document.getElementById('year')&&(document.getElementById('year').textContent=new Date().getFullYear());
}();
