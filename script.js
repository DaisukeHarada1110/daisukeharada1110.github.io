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

// クロールでフェードイン表示
const fadeElements = document.querySelectorAll('.fade-in');

const scrollHandler = () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
};

window.addEventListener('scroll', scrollHandler);
window.addEventListener('load', scrollHandler);

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel-track img");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    let Index = 0;

    const updateSide = () => {
        track.style.transform = `translateX(-${Index * 100}%)`;
    };

    nextBtn.addEventListener("click", () => {
        Index = (Index + 1) % images.length;
        updateSide();
    });

    prevBtn.addEventListener("click", () => {
        Index = (Index - 1 + images.length) % images.length;
        updateSide();
    });

    setInterval(() => {
        Index = (Index + 1) % images.length;
        updateSide();
    }, 3000); // 自動スライド間隔(3秒)
});