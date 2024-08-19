function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});


window.addEventListener('scroll', function() {
    const skillBars = document.querySelectorAll('.progress-value');
    skillBars.forEach(bar => {
        const value = bar.dataset.value;
        const sectionTop = document.getElementById('skills').offsetTop - window.innerHeight / 2;
        if (window.scrollY > sectionTop) {
            bar.style.width = value;
        }
    });
});


window.addEventListener('load', function() {
    const skillBars = document.querySelectorAll('.progress-value');
    skillBars.forEach(bar => {
        bar.style.width = '0';
        const value = bar.style.width;
        bar.setAttribute('data-value', value);
    });
});
