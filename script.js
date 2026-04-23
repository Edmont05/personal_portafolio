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
            nav_linkedin: "LinkedIn",
            nav_email: "Correo",
            nav_whatsapp: "WhatsApp",
            nav_download_cv: "Descargar CV",
            title_sobre_mi: "EDDY MONTAÑO",
            about_text: "Ser QA es más que una profesión para mí; surge de mi compromiso por entregar calidad y ponerme siempre en el lugar del usuario. Disfruto descubriendo los detalles que marcan la diferencia, aportando soluciones valiosas al equipo y asegurando que cada entrega sea verdaderamente confiable y significativa para quienes la usan.",
            test_cycle: "CICLO DE PRUEBAS",
            title_proyectos: "PROYECTOS",
            title_habilidades: "HABILIDADES",
            title_certificaciones: "CERTIFICACIONES",
            title_experiencia: "EXPERIENCIA LABORAL",
            exp1_title: "Tester y Control de Calidad de Software",
            exp1_date: "Septiembre 2025 - Presente",
            exp1_li1: "Ejecución de pruebas manuales (End-to-End) en plataformas web, desktop y mobile.",
            exp1_li2: "Elaboración y mantenimiento de casos de prueba y documentación técnica.",
            exp1_li3: "Identificación, reporte y seguimiento de bugs hasta su resolución.",
            exp1_li4: "Integración en flujos de trabajo ágiles y participación en dailies y retrospectives.",
            exp2_title: "QA Tester",
            exp2_date: "Enero 2024 - Junio 2025",
            exp2_li1: "Diseñar, planificar y ejecutar pruebas manuales en aplicaciones móviles y de escritorio.",
            exp2_li2: "Automatizar pruebas para aplicaciones web en frontend y backend.",
            exp2_li3: "Realizar pruebas de regresión y smoke testing, ampliando la cobertura de pruebas para asegurar la estabilidad en nuevas versiones.",
            exp2_li4: "Documentar todos los casos de prueba, reportar y dar seguimiento a bugs.",
            exp2_li5: "Participar activamente en equipos ágiles bajo metodología Scrum.",
            exp3_title: "Pasante QA",
            exp3_date: "Septiembre 2023 - Diciembre 2023",
            exp3_li1: "Ejecutar pruebas manuales en el sistema de licencias desarrollado internamente.",
            exp3_li2: "Validar las funcionalidades frente a requerimientos y criterios de aceptación.",
            exp3_li3: "Documentar resultados y reportar bugs.",
            exp3_li4: "Colaborar junto al equipo de desarrollo en la definición de procesos de pruebas y validación de nuevas funcionalidades.",
            skill_postman: "Postman",
            skill_selenium: "Selenium",
            skill_java: "Testing Java",
            skill_pytest: "Pytest",
            skill_cicd: "CI/CD",
            skill_sql: "SQL",
            skill_agile: "Metodologías Ágiles",
            skill_jira: "JIRA",
            pill_funcional: "Pruebas Funcionales",
            pill_selenium: "Selenium",
            pill_java: "Java",
            pill_typescript: "TypeScript",
            pill_excel: "Excel",
            pill_exploratory: "Pruebas Exploratorias",
            pill_playwright: "Playwright",
            pill_pytest: "Pytest",
            pill_postman: "Postman",
            pill_github_actions: "GitHub Actions",
            pill_scrum: "Scrum",
            pill_manual: "Pruebas Manuales",
            pill_test_planning: "Planificación de Pruebas",
            pill_test_design: "Diseño de Pruebas",
            pill_bug_tracking: "Seguimiento de Bugs"
        },
        en: {
            nav_inicio: "HOME",
            nav_sobre_mi: "ABOUT ME",
            nav_habilidades: "SKILLS",
            nav_proyectos: "PROJECTS",
            nav_certificaciones: "CERTIFICATIONS",
            nav_contacto: "CONTACT",
            nav_linkedin: "LinkedIn",
            nav_email: "Email",
            nav_whatsapp: "WhatsApp",
            nav_download_cv: "Download CV",
            title_sobre_mi: "EDDY MONTAÑO",
            about_text: "Being a QA is more than just a profession for me; it comes from my commitment to delivering quality and always putting myself in the user’s shoes. I enjoy discovering the details that make a difference, contributing valuable solutions to the team, and ensuring that every delivery is truly reliable and meaningful for those who use it.",
            test_cycle: "TEST CYCLE",
            title_proyectos: "PROJECTS",
            title_habilidades: "SKILLS",
            title_certificaciones: "CERTIFICATIONS",
            title_experiencia: "WORK EXPERIENCE",
            exp1_title: "Software QA Tester",
            exp1_date: "September 2025 - Present",
            exp1_li1: "Execution of manual tests (End-to-End) on web, desktop and mobile platforms.",
            exp1_li2: "Creation and maintenance of test cases and technical documentation.",
            exp1_li3: "Bug identification, reporting and tracking until resolution.",
            exp1_li4: "Integration into agile workflows and participation in dailies and retrospectives.",
            exp2_title: "QA Tester",
            exp2_date: "January 2024 - June 2025",
            exp2_li1: "Design, plan and execute manual tests on mobile and desktop applications.",
            exp2_li2: "Automate tests for frontend and backend web applications.",
            exp2_li3: "Perform regression and smoke testing, expanding test coverage to ensure stability across new versions.",
            exp2_li4: "Document test cases, report and track bugs.",
            exp2_li5: "Actively participate in agile teams under Scrum methodology.",
            exp3_title: "QA Intern",
            exp3_date: "September 2023 - December 2023",
            exp3_li1: "Execute manual tests on internally developed licensing systems.",
            exp3_li2: "Validate functionalities against requirements and acceptance criteria.",
            exp3_li3: "Document results and report bugs.",
            exp3_li4: "Collaborate with the development team to define testing processes and validate new features.",
            skill_postman: "Postman",
            skill_selenium: "Selenium",
            skill_java: "Java Testing",
            skill_pytest: "Pytest",
            skill_cicd: "CI/CD",
            skill_sql: "SQL",
            skill_agile: "Agile",
            skill_jira: "JIRA",
            pill_funcional: "Functional Testing",
            pill_selenium: "Selenium",
            pill_java: "Java",
            pill_typescript: "TypeScript",
            pill_excel: "Excel",
            pill_exploratory: "Exploratory Testing",
            pill_playwright: "Playwright",
            pill_pytest: "Pytest",
            pill_postman: "Postman",
            pill_github_actions: "GitHub Actions",
            pill_scrum: "Scrum",
            pill_manual: "Manual Testing",
            pill_test_planning: "Test Planning",
            pill_test_design: "Test Design",
            pill_bug_tracking: "Bug Tracking"
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

    // Generate binary background for Habilidades
    const habilidadesBox = document.getElementById('habilidades');
    if (habilidadesBox) {
        const binDiv = document.createElement('div');
        binDiv.className = 'binary-bg';
        let binStr = '';
        // 2000 characters to cover the backdrop well
        for (let i = 0; i < 2000; i++) {
            binStr += Math.random() > 0.5 ? '1' : '0';
        }
        binDiv.textContent = binStr;
        habilidadesBox.insertBefore(binDiv, habilidadesBox.firstChild);
    }

    // Automatic Stepping Projects Carousel
    const viewport = document.querySelector('.carousel-viewport');
    const track = document.getElementById('proyectos-track');
    
    if (viewport && track) {
        // Clone the cards individually so we can loop seamlessly 
        const originalCards = Array.from(track.children);
        const totalOriginal = originalCards.length;
        
        originalCards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });

        let currentIndex = 0;
        
        setInterval(() => {
            if (!track.children[0]) return;
            // Get current responsive width of one card + gap
            const cardWidth = track.children[0].offsetWidth;
            const gap = 20; 
            const slideWidth = cardWidth + gap;

            currentIndex++;
            
            // Slide to next item
            track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

            // Snap back when the exact clones are fully in view
            if (currentIndex === totalOriginal) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentIndex = 0;
                    track.style.transform = `translateX(0px)`;
                }, 600); // 600ms matches the CSS transition time
            }
        }, 4000); // Wait 4 seconds on each slide
    }

    // Generate ATS-friendly PDF dynamically
    const downloadBtn = document.getElementById('download-cv-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const t = translations[currentLang];
            
            const skillsStr = [
                t.skill_postman, t.skill_selenium, t.skill_java, t.skill_pytest, 
                t.skill_cicd, t.skill_sql, t.skill_agile, t.skill_jira
            ].join(', ');

            const tech1 = [t.pill_funcional, t.pill_selenium, t.pill_java, t.pill_typescript, t.pill_excel].join(', ');
            const tech2 = [t.pill_exploratory, t.pill_playwright, t.pill_pytest, t.pill_postman, t.pill_github_actions, t.pill_scrum].join(', ');
            const tech3 = [t.pill_manual, t.pill_test_planning, t.pill_test_design, t.pill_bug_tracking].join(', ');

            const docDefinition = {
                content: [
                    { text: 'EDDY MONTAÑO LÓPEZ', style: 'header' },
                    { text: '+591 62686586 | montanoeddy1120@gmail.com | linkedin.com/in/eddy-montaño-lópez/', style: 'contact' },
                    
                    { text: currentLang === 'es' ? 'RESUMEN PROFESIONAL' : 'PROFESSIONAL SUMMARY', style: 'sectionHeader' },
                    { text: t.about_text, style: 'body' },
                    
                    { text: currentLang === 'es' ? 'HABILIDADES CLAVE' : 'CORE SKILLS', style: 'sectionHeader' },
                    { text: skillsStr, style: 'body' },
                    
                    { text: currentLang === 'es' ? 'EXPERIENCIA LABORAL' : 'WORK EXPERIENCE', style: 'sectionHeader' },
                    
                    { text: t.exp1_title + (currentLang === 'es' ? ' | Septiembre 2025 - Presente' : ' | September 2025 - Present'), style: 'jobHeader' },
                    { ul: [t.exp1_li1, t.exp1_li2, t.exp1_li3, t.exp1_li4, (currentLang === 'es' ? 'Tecnologías: ' : 'Technologies: ') + tech1], style: 'list' },
                    
                    { text: t.exp2_title + (currentLang === 'es' ? ' | Enero 2024 - Junio 2025' : ' | January 2024 - June 2025'), style: 'jobHeader' },
                    { ul: [t.exp2_li1, t.exp2_li2, t.exp2_li3, t.exp2_li4, t.exp2_li5, (currentLang === 'es' ? 'Tecnologías: ' : 'Technologies: ') + tech2], style: 'list' },
                    
                    { text: t.exp3_title + (currentLang === 'es' ? ' | Septiembre 2023 - Diciembre 2023' : ' | September 2023 - December 2023'), style: 'jobHeader' },
                    { ul: [t.exp3_li1, t.exp3_li2, t.exp3_li3, t.exp3_li4, (currentLang === 'es' ? 'Tecnologías: ' : 'Technologies: ') + tech3], style: 'list' },

                    { text: currentLang === 'es' ? 'CERTIFICACIONES' : 'CERTIFICATIONS', style: 'sectionHeader' },
                    { ul: [
                        'Postman API Fundamentals Student Expert',
                        'SmallTalk English Speaking Level Test',
                        currentLang === 'es' ? 'Test Unitarios en SPRING BOOT' : 'Unit Testing in SPRING BOOT',
                        currentLang === 'es' ? 'Test Unitarios en ANGULAR' : 'Unit Testing in ANGULAR',
                        currentLang === 'es' ? 'Test Unitarios en FLUTTER' : 'Unit Testing in FLUTTER',
                        currentLang === 'es' ? 'Microsoft Excel Básico + Intermedio' : 'Microsoft Excel Basic + Intermediate'
                    ], style: 'list' }
                ],
                styles: {
                    header: { fontSize: 18, bold: true, alignment: 'center', margin: [0, 0, 0, 5] },
                    contact: { fontSize: 10, alignment: 'center', margin: [0, 0, 0, 15] },
                    sectionHeader: { fontSize: 12, bold: true, margin: [0, 15, 0, 5], decoration: 'underline' },
                    body: { fontSize: 10, margin: [0, 0, 0, 10], alignment: 'justify' },
                    jobHeader: { fontSize: 11, bold: true, margin: [0, 10, 0, 5] },
                    list: { fontSize: 10, margin: [0, 0, 0, 10] }
                },
                defaultStyle: { font: 'Roboto' }
            };

            pdfMake.createPdf(docDefinition).download(`CV_Eddy_Montano_${currentLang.toUpperCase()}.pdf`);
        });
    }
});
