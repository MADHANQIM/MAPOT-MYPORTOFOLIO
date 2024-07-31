let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');
let haederLink = document.querySelector('.header-links');

menuIcon.addEventListener('click', function(){
    haederLink.style.display='block';
    haederLink.style.right ='0';
});

cancelIcon.addEventListener('click', function(){
    haederLink.style.right ='-100vh';
    haederLink.style.display = 'none';
});

let themeInput = document.getElementById('theme');
const root = document.documentElement;
const primarythemecolor =getComputedStyle(root).getPropertyValue('--primary-theme-color');
themeInput.value = primarythemecolor;


themeInput.addEventListener('change', function(){
    const color = themeInput.value;
    document.documentElement.style.setProperty('--primary-theme-color', color);
});


//typing animation
document.addEventListener("DOMContentLoaded", function (){
    const option = {
        String: ['HUMAN', 'JUNIOR DATA ANALYSTIK', 'JUNIOR WEB DEVLOPER', 'STUDENT', 'JUNIOR DATA SCIENCE'],
        typeSpeed: 150,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    };

    const multiTextElement = document.querySelector('.multi-text');
    let currentTextIndex = 0;
    let currentText = ' ';
    let isDeleting = false;


    function type(){
        const fullText = option.String[currentTextIndex];
        if (isDeleting){
            currentText = fullText.substring(0, currentText.length - 1);

        }else{
            currentText =fullText.substring(0, currentText.length + 1);
        }

        multiTextElement.textContent = currentText;
        let typeSpeed =option.typeSpeed;
        if(isDeleting){
            typeSpeed /= 2;
        }
        if(!isDeleting && currentText === fullText){
            typeSpeed = option.backDelay;
            isDeleting =true;
        } else if (isDeleting && currentText ==='' ) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % option.String.length;
        }

        
        setTimeout(type, typeSpeed);
    }
    type();

});
