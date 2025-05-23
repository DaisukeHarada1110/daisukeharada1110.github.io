document.addEventListener('DOMContentLoaded', () => {   
   let current = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        })        
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    showSlide(current);
    setInterval(nextSlide, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("contactForm");
    const thankYou = document.getElementById("thankYouMessage");   

if (form) {
    form.addEventListener("submit", function() {        
        setTimeout(function() {
            thankYou.style.display = "block";
            form.style.display = "none";
        }, 1000); // Googleフォームのそうしんタイミングに合わせてる
    });
}
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("contactForm");
    const overlay = document.getElementById("thankYouOverlay");

    if (form) {
        form.addEventListener("submit", function () {
            setTimeout(function () {
                overlay.style.display = "flex";
                form.style.display = "none";
            }, 1000); // Googleフォーム送信後1秒で表示
        });
    }
});

function closeOverlay() {
    document.getElementById("thankYouOverlay").style.display = "none";
}
