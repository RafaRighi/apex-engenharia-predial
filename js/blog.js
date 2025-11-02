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
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido!');
            return;
        }
        
        // Aqui você pode adicionar a lógica para enviar para um serviço de newsletter
        // Por exemplo, MailChimp, SendGrid, etc.
        
        alert('Obrigado por se inscrever! Você receberá nossas novidades em breve.');
        newsletterForm.reset();
        
        // Exemplo de integração com serviço de newsletter (descomente e configure):
        /*
        fetch('https://seu-backend.com/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            alert('Inscrição realizada com sucesso!');
            newsletterForm.reset();
        })
        .catch(error => {
            alert('Erro ao realizar inscrição. Tente novamente.');
            console.error('Erro:', error);
        });
        */
    });
}

// Scroll suave para links internos (se houver)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignora links vazios ou apenas com #
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

// Função para compartilhamento social (para páginas de posts individuais)
function shareOnSocial(platform, url, title) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Adiciona event listeners para botões de compartilhamento
const shareButtons = document.querySelectorAll('.share-btn');
shareButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = button.classList.contains('facebook') ? 'facebook' :
                        button.classList.contains('twitter') ? 'twitter' :
                        button.classList.contains('linkedin') ? 'linkedin' :
                        button.classList.contains('whatsapp') ? 'whatsapp' : '';
        
        const url = window.location.href;
        const title = document.querySelector('.post-header h1')?.textContent || document.title;
        
        shareOnSocial(platform, url, title);
    });
});

// Lazy loading de imagens (opcional, para melhor performance)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Tempo de leitura estimado (para páginas de posts individuais)
function calculateReadingTime() {
    const article = document.querySelector('.post-article');
    if (article) {
        const text = article.textContent;
        const wordsPerMinute = 200;
        const words = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / wordsPerMinute);
        
        const readTimeElement = document.querySelector('.post-read-time');
        if (readTimeElement) {
            readTimeElement.textContent = `${readingTime} min de leitura`;
        }
    }
}

// Executa o cálculo de tempo de leitura se estiver em uma página de post
if (document.querySelector('.post-article')) {
    calculateReadingTime();
}

