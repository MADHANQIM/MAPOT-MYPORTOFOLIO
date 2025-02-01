let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');
let headerLink = document.querySelector('.header-links');

menuIcon.addEventListener('click', function () {
    headerLink.classList.add('active'); 
});

cancelIcon.addEventListener('click', function () {
    headerLink.classList.remove('active');
});

// Mengubah Warna Tema Secara Dinamis
let themeInput = document.getElementById('theme');
const root = document.documentElement;
const primarythemeColor = getComputedStyle(root).getPropertyValue('--primary-theme-color').trim();

themeInput.value = primarythemeColor;

themeInput.addEventListener('change', function () {
    document.documentElement.style.setProperty('--primary-theme-color', themeInput.value);
});

// Typing Animation
document.addEventListener("DOMContentLoaded", function () {
    const options = {
        strings: ['HUMAN', 'JUNIOR DATA ANALYST', 'WEB DEVELOPER', 'STUDENT', 'JUNIOR DATA SCIENCE'],
        typeSpeed: 150,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    };

    const multiTextElement = document.querySelector('.multi-text');
    let currentTextIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {
        const fullText = options.strings[currentTextIndex];

        currentText = isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1);

        multiTextElement.textContent = currentText;

        let typeSpeed = isDeleting ? options.backSpeed : options.typeSpeed;

        if (!isDeleting && currentText === fullText) {
            typeSpeed = options.backDelay;
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % options.strings.length;
        }

        setTimeout(type, typeSpeed);
    }

    type();
});

// Smooth Scroll Animasi dengan Intersection Observer
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.5 });

hiddenElements.forEach(element => observer.observe(element));

document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.querySelector("#skills");
    const progressBars = document.querySelectorAll(".progress-bar");

    function fillProgress() {
        progressBars.forEach((bar) => {
            const targetWidth = bar.getAttribute("aria-valuenow") + "%";
            bar.style.transition = "width 1.5s ease-in-out"; // Animasi smooth
            bar.style.width = targetWidth;
        });
    }

    function resetProgress() {
        progressBars.forEach((bar) => {
            bar.style.transition = "width 0.5s ease-in-out"; // Lebih cepat saat reset
            bar.style.width = "0%";
        });
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    fillProgress();
                } else {
                    resetProgress();
                }
            });
        },
        { threshold: 0.3 } // 30% dari elemen terlihat baru animasi dimulai
    );

    observer.observe(skillsSection);
});
