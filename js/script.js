// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
    });
});

// Animações por scroll
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('in-view');
        }
    });
},{ threshold:0.2 });

document.querySelectorAll('.fade-in, .slide-in').forEach(el => observer.observe(el));

// Captura de leads
document.getElementById('leadForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Obrigado! Sua mensagem foi enviada.');
    this.reset();
});