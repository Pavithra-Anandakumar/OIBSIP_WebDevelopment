function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll(".progress-value");

    skillBars.forEach(bar => {
        let width = 0;
        const targetWidth = bar.style.width;
        bar.style.width = "0";
        const interval = setInterval(() => {
            if (width >= parseInt(targetWidth)) {
                clearInterval(interval);
            } else {
                width++;
                bar.style.width = width + "%";
            }
        }, 10);
    });
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for your message, " + name + "! We will get back to you soon.");
        
        this.reset();
    }
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
