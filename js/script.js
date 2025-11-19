// Navegação Mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Função para fechar o menu
const closeMenu = () => {
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    if (menuToggle) {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    }
};

// Função para abrir/fechar o menu
const toggleMenu = () => {
    if (!navMenu || !menuToggle) return;
    const isExpanded = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active', isExpanded);
    menuToggle.setAttribute('aria-expanded', isExpanded);
    menuToggle.setAttribute('aria-label', isExpanded ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
};

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', toggleMenu);
}

// Fechar menu ao clicar em qualquer link do menu
// Usa múltiplos eventos para garantir que funcione mesmo quando o link leva para outra página
if (navLinks && navLinks.length > 0) {
    navLinks.forEach(link => {
        // Usa mousedown e touchstart para capturar antes da navegação
        link.addEventListener('mousedown', closeMenu);
        link.addEventListener('touchstart', closeMenu);
        link.addEventListener('click', (e) => {
            // Fecha o menu imediatamente
            closeMenu();
            // Se for link para outra página, permite a navegação normalmente
            // Se for âncora na mesma página, o código de scroll suave abaixo cuidará
        });
    });
}

// Fechar menu quando a página perder o foco (antes de navegar para outra página)
window.addEventListener('beforeunload', closeMenu);

// Fechar menu ao clicar fora dele (overlay)
if (navMenu) {
    document.addEventListener('click', (e) => {
        // Se o menu estiver aberto e o clique não for no menu nem no botão toggle
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !menuToggle?.contains(e.target)) {
            closeMenu();
        }
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

// Header: esconder ao rolar para baixo e mostrar ao rolar para cima
// Implementado com transform para evitar CLS (sem alterar o fluxo do layout)
let lastScrollTop = 0;
let ticking = false;
const header = document.getElementById('header');

if (header) {
    const onScroll = () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Estado visual (fundo/sombra) ao rolar
        if (currentScroll > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Não esconder se menu mobile estiver aberto
        const isMenuOpen = navMenu && navMenu.classList.contains('active');

        // Lógica de direção: esconde ao descer, mostra ao subir
        if (!isMenuOpen) {
            const isScrollingDown = currentScroll > lastScrollTop;
            const beyondThreshold = currentScroll > 120;

            if (isScrollingDown && beyondThreshold) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });
}

// Animação de entrada dos elementos - Otimizada para evitar CLS
// Usa will-change e garante que elementos já tenham espaço reservado
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Usa requestAnimationFrame para melhor performance
            requestAnimationFrame(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            });
        }
    });
}, observerOptions);

// Elementos para animar - DESABILITADO para evitar CLS
// As animações de entrada estavam causando layout shift (CLS 0.20)
// Mantendo elementos visíveis desde o início para melhor performance
const animateElements = document.querySelectorAll('.servico-card, .diferencial-item, .stat-item, .info-item, .galeria-item, .blog-preview-card, .numero-item, .produto-item');
if (animateElements) {
    animateElements.forEach(el => {
        // Elementos já visíveis desde o início - sem animação para evitar CLS
        el.style.opacity = '1';
        el.style.transform = 'none';
        // Removido observer para evitar qualquer layout shift
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
    contactForm.addEventListener('submit', async (e) => {
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

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton ? submitButton.textContent : '';

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
        }

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, telefone, mensagem })
            });

            const data = await response.json();

            if (!response.ok || !data?.success) {
                throw new Error(data?.message || 'Falha no envio');
            }

            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            contactForm.reset();
        } catch (error) {
            console.error('Erro ao enviar formulário de contato:', error);
            alert('Não foi possível enviar sua mensagem agora. Tente novamente mais tarde ou envie um e-mail diretamente para contato@apexengenhariapredial.com.br.');
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalText || 'Enviar Mensagem';
            }
        }
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