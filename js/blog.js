// Funcionalidades específicas do Blog

// Sistema de Filtros de Categoria
const filterButtons = document.querySelectorAll('.filter-btn');
const postCards = document.querySelectorAll('.post-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona active ao botão clicado
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        
        // Filtra os posts
        postCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'todos' || cardCategory === category) {
                card.style.display = 'flex';
                // Animação de entrada
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Inicializa a animação dos posts
postCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 100);
});

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        const email = emailInput.value.trim();
        
        // Validação de email usando função centralizada
        if (!window.APEXUtils || !window.APEXUtils.isValidEmail(email)) {
            alert('Por favor, insira um email válido!');
            return;
        }

        const originalText = submitButton ? submitButton.textContent : '';

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Inscrevendo...';
        }

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (!response.ok || !data?.success) {
                throw new Error(data?.message || 'Falha na inscrição');
            }

            alert('Inscrição realizada com sucesso! Verifique sua caixa de entrada para confirmar.');
            newsletterForm.reset();
        } catch (error) {
            console.error('Erro ao inscrever na newsletter:', error);
            alert('Não foi possível realizar a inscrição agora. Tente novamente mais tarde ou entre em contato conosco.');
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalText || 'Inscrever';
            }
        }
    });
}

// Scroll suave para links internos usando função centralizada
// Usa a mesma lógica do script.js para consistência
if (window.APEXUtils && window.APEXUtils.initSmoothScroll) {
    // Inicializa scroll suave quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.APEXUtils.initSmoothScroll({
                headerOffset: 90,
                closeMenuOnScroll: true,
                excludeSelectors: ['.nav-link']
            });
        });
    } else {
        window.APEXUtils.initSmoothScroll({
            headerOffset: 90,
            closeMenuOnScroll: true,
            excludeSelectors: ['.nav-link']
        });
    }
} else {
    // Fallback caso utils.js não esteja carregado
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
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
}
