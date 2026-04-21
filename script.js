document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for depth and zero-gravity feel
    const container = document.querySelector('.zero-gravity-container');
    const floatingElements = document.querySelectorAll('.glass-plate');

    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;

        floatingElements.forEach((el, index) => {
            // Give different depths to different plates
            const depth = (index % 3) + 1;
            el.style.transform = `rotateY(${xAxis / depth}deg) rotateX(${yAxis / depth}deg) translateZ(${depth * 10}px)`;
        });
    });

    // Reset transform on mouse leave to prevent getting stuck
    document.addEventListener('mouseleave', () => {
        floatingElements.forEach(el => {
            el.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0px)`;
            el.style.transition = 'all 0.5s ease';
        });
    });

    // Remove transition when moving to make parallax responsive
    document.addEventListener('mouseenter', () => {
        floatingElements.forEach(el => {
            el.style.transition = 'none';
        });
    });

    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        let theme = 'dark';
        if (document.body.classList.contains('light-theme')) {
            theme = 'light';
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        localStorage.setItem('theme', theme);
    });

    // Language Toggle Logic
    const translations = {
        es: {
            nav_inicio: "INICIO",
            nav_sobre_mi: "SOBRE MÍ",
            nav_habilidades: "HABILIDADES",
            nav_proyectos: "PROYECTOS",
            nav_certificaciones: "CERTIFICACIONES",
            nav_contacto: "CONTACTO",
            title_sobre_mi: "EDDY MONTAÑO",
            about_text: "Ser QA es más que una profesión para mí; surge de mi compromiso por entregar calidad y ponerme siempre en el lugar del usuario. Disfruto descubriendo los detalles que marcan la diferencia, aportando soluciones valiosas al equipo y asegurando que cada entrega sea verdaderamente confiable y significativa para quienes la usan.",
            test_cycle: "CICLO DE PRUEBAS",
            title_proyectos: "PROYECTOS",
            title_habilidades: "HABILIDADES",
            title_certificaciones: "CERTIFICACIONES"
        },
        en: {
            nav_inicio: "HOME",
            nav_sobre_mi: "ABOUT ME",
            nav_habilidades: "SKILLS",
            nav_proyectos: "PROJECTS",
            nav_certificaciones: "CERTIFICATIONS",
            nav_contacto: "CONTACT",
            title_sobre_mi: "EDDY MONTAÑO",
            about_text: "Being a QA is more than just a profession for me; it comes from my commitment to delivering quality and always putting myself in the user’s shoes. I enjoy discovering the details that make a difference, contributing valuable solutions to the team, and ensuring that every delivery is truly reliable and meaningful for those who use it.",
            test_cycle: "TEST CYCLE",
            title_proyectos: "PROJECTS",
            title_habilidades: "SKILLS",
            title_certificaciones: "CERTIFICATIONS"
        }
    };

    const langBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('language') || 'es';

    const applyLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
        langBtn.title = lang === 'es' ? 'Switch to English' : 'Cambiar a Español';
    };

    // Apply saved language on load
    if (currentLang !== 'es') {
        applyLanguage(currentLang);
    } else {
        langBtn.textContent = 'EN';
        langBtn.title = 'Switch to English';
    }

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        applyLanguage(currentLang);
        localStorage.setItem('language', currentLang);
    });

    // Initialize particles.js for dust motes
    if (window.particlesJS) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 0.5,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 150,
                        "size": 4,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Generate binary background for Habilidades (center-plate)
    const centerPlate = document.querySelector('.center-plate');
    if (centerPlate) {
        const binDiv = document.createElement('div');
        binDiv.className = 'binary-bg';
        let binStr = '';
        // 2000 characters to cover the backdrop well
        for (let i = 0; i < 2000; i++) {
            binStr += Math.random() > 0.5 ? '1' : '0';
        }
        binDiv.textContent = binStr;
        centerPlate.insertBefore(binDiv, centerPlate.firstChild);
    }
});
