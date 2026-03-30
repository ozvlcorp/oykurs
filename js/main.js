// Custom cursor
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0, my=0, rx=0, ry=0;
window.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function tick() {
  if(cur){cur.style.left=mx+'px';cur.style.top=my+'px';}
  rx+=(mx-rx)*.1; ry+=(my-ry)*.1;
  if(ring){ring.style.left=rx+'px';ring.style.top=ry+'px';}
  requestAnimationFrame(tick);
})();

// Scroll reveal
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target);} });
}, {threshold:0.1});
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// Client images
const clientImages = [
  { src: 'clients/logo-1.png',  alt: 'Pepito' },
  { src: 'clients/logo-2.png',  alt: 'BN' },
  { src: 'clients/logo-3.png',  alt: 'Bootfor' },
  { src: 'clients/logo-4.png',  alt: 'Leader Glass' },
  { src: 'clients/logo-5.png',  alt: 'Vitagum' },
  { src: 'clients/logo-6.png',  alt: 'Confelia' },
  { src: 'clients/logo-7.png',  alt: 'Eramax' },
  { src: 'clients/logo-8.png',  alt: 'Ario Electronics' },
  { src: 'clients/logo-9.png',  alt: 'BlissBerry' },
  { src: 'clients/logo-10.png', alt: 'Dodo Kids' },
  { src: 'clients/logo-11.png', alt: 'Bravium' },
  { src: 'clients/logo-12.png', alt: 'Quality Retail' },
  { src: 'clients/logo-13.png', alt: 'Asaxiy' },
  { src: 'clients/logo-14.png', alt: 'Bacelli' },
  { src: 'clients/logo-15.png', alt: 'Europol' },
  { src: 'clients/logo-16.png', alt: 'Yarko Market' },
  { src: 'clients/logo-17.png', alt: 'Kontrol UZ' },
  { src: 'clients/logo-18.png', alt: 'Fruit City' },
  { src: 'clients/logo-19.png', alt: 'UHUD' },
  { src: 'clients/logo-20.png', alt: 'Centro Wood' },
  { src: 'clients/logo-21.jpg', alt: 'Comfort Textile', invert: true },
];
const grid = document.getElementById('clientsGrid');
if(grid && clientImages.length){
  clientImages.forEach(({src, alt, invert}) => {
    const d = document.createElement('div'); d.className = 'client-cell';
    const img = document.createElement('img');
    img.src = src; img.alt = alt; img.loading = 'lazy'; img.title = alt;
    if(invert) img.classList.add('invert');
    d.appendChild(img); grid.appendChild(d);
  });
}

// GA4 Event Tracking for CTA buttons
document.querySelectorAll('.btn-magic, .btn-buy, .nav-pill').forEach(btn => {
  btn.addEventListener('click', function() {
    if(typeof gtag === 'function') {
      gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: this.textContent.trim(),
        transport_type: 'beacon'
      });
    }
    if(typeof ym === 'function') {
      ym(108208545, 'reachGoal', 'cta_click', {label: this.textContent.trim()});
    }
  });
});
</script>
