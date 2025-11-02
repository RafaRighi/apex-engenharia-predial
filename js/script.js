// Navegação Mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animação do ícone hambúrguer
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 90;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header invisível ao rolar
let lastScrollTop = 0; 
const header = document.getElementById('header');
const scrollThreshold = 100;

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // --- 1. Lógica de Ocultar/Mostrar ---
        if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
            header.classList.add('hidden');
        } 
        else if (currentScroll < lastScrollTop || currentScroll <= scrollThreshold) {
            header.classList.remove('hidden');
        }
        
        // --- 2. Lógica para o efeito 'scrolled' ---
        if (currentScroll > 10) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elementos para animar
const animateElements = document.querySelectorAll('.servico-card, .diferencial-item, .stat-item, .info-item, .galeria-item, .blog-preview-card, .numero-item, .produto-item');
if (animateElements) {
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}


// Redirecionamento de Serviço
const servicoCards = document.querySelectorAll('.servico-card');

if (servicoCards.length > 0) {
    servicoCards.forEach(card => {
        const link = card.querySelector('.btn-link'); 
        
        if (link && link.href) {
            card.addEventListener('click', () => {
                window.location.href = link.href;
            });
        }
    });
}


// Formulário de contato (restante do seu código)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validação básica
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        if (!nome || !email || !telefone || !mensagem) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido!');
            return;
        }
        
        // Simulação de envio
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
    });
}

// Máscara para telefone
const telefoneInput = document.getElementById('telefone');
if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        }
        
        e.target.value = value;
    });
}


// Atualizar ano no footer automaticamente
const updateYear = () => {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = `&copy; ${currentYear} APEX Engenharia Predial. Todos os direitos reservados.`;
    }
};

updateYear();

// Prevenção de scroll horizontal
document.body.style.overflowX = 'hidden';

// Evento de clique no WhatsApp
document.addEventListener('click', function(e){
    const a = e.target.closest && e.target.closest('a.whatsapp-float');
    if (!a) return;
    e.preventDefault();
    window.open(a.href, '_blank', 'noopener');
});