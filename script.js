// Typing animation (type once and stay)
const typingEl = document.getElementById('typing');
const text = 'Test Technician | Aspiring Developer | Problem Solver';
let i = 0;
function typeOnce() {
  if(i < text.length) {
    typingEl.textContent += text.charAt(i);
    i++;
    setTimeout(typeOnce, 45);
  }
}
document.addEventListener('DOMContentLoaded', ()=>{
  // start typing once
  typeOnce();

  // scroll reveal observer
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        // if it's a skill section, animate fills
        const fills = entry.target.querySelectorAll('.fill');
        fills.forEach(f=>{
          const width = f.style.width;
          f.style.width = '0';
          setTimeout(()=>{ f.style.width = width }, 80);
        });
      }
    });
  }, {threshold:0.15});

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
});