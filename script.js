const greetingText = "Welcome to My Portfolio";
let index = 0;

function typeGreeting() {
    if (index < greetingText.length) {
        document.querySelector("h1").textContent += greetingText.charAt(index);
        index++;
        setTimeout(typeGreeting, 80);
    }
}

document.addEventListener("DOMContentLoaded", typeGreeting);

document.body.addEventListener("click", function(event) {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 800);
});

particlesJS("home", {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#ffd700" }, 
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 4,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffd700",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});


document.getElementById('emailButton').addEventListener('click', function() {
    var emailAddress = 'smittal1832005@gmail.com';
    
    // Try opening Gmail app on mobile devices
    var gmailAppScheme = 'googmail://co?to=' + emailAddress; // Gmail app URL scheme
    var webComposeUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=' + emailAddress; // Fallback to web version
    
    // Check if the user is on mobile and try to open the Gmail app scheme
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Simple check to see if on iOS or Android
    if (/android/i.test(userAgent)) {
        window.location = gmailAppScheme; // Attempt to open Gmail app on Android
        setTimeout(function() {
            window.location = webComposeUrl; // Fallback to web if Gmail app is not installed
        }, 2000);
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        window.location = gmailAppScheme; // Attempt to open Gmail app on iOS
        setTimeout(function() {
            window.location = webComposeUrl; // Fallback to web if Gmail app is not installed
        }, 2000);
    } else {
        window.location = webComposeUrl; // Default to web if not on mobile
    }
});


