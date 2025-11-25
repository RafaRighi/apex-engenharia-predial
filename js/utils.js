/**
 * Utilitários JavaScript para o site APEX Engenharia Predial
 * Funções compartilhadas para validação, navegação e UI
 */

// Objeto global para armazenar funções utilitárias
window.APEXUtils = window.APEXUtils || {};

/**
 * Valida um endereço de email usando regex
 * @param {string} email - Email a ser validado
 * @returns {boolean} - true se o email for válido, false caso contrário
 */
APEXUtils.isValidEmail = function(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Fecha o menu de navegação mobile
 * Função centralizada para garantir consistência
 */
APEXUtils.closeMenu = function() {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    if (menuToggle) {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    }
};

/**
 * Realiza scroll suave para um elemento alvo
 * @param {string} targetSelector - Seletor do elemento alvo (ex: '#secao')
 * @param {number} headerOffset - Offset do header em pixels (padrão: 90)
 * @param {Function} onComplete - Callback opcional executado após o scroll
 */
APEXUtils.smoothScrollTo = function(targetSelector, headerOffset = 90, onComplete) {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
    
    if (onComplete && typeof onComplete === 'function') {
        // Aguarda o scroll completar (aproximadamente)
        setTimeout(onComplete, 500);
    }
};

/**
 * Inicializa scroll suave para links de âncoras na mesma página
 * @param {Object} options - Opções de configuração
 * @param {number} options.headerOffset - Offset do header em pixels (padrão: 90)
 * @param {boolean} options.closeMenuOnScroll - Se deve fechar o menu ao fazer scroll (padrão: true)
 * @param {Array<string>} options.excludeSelectors - Seletores de links a serem ignorados (padrão: ['.nav-link'])
 */
APEXUtils.initSmoothScroll = function(options = {}) {
    const {
        headerOffset = 90,
        closeMenuOnScroll = true,
        excludeSelectors = ['.nav-link']
    } = options;
    
    const allLinks = document.querySelectorAll('a[href]');
    
    allLinks.forEach(anchor => {
        const href = anchor.getAttribute('href');
        
        // Ignora links vazios, apenas #, ou que contêm .html
        if (!href || 
            href === '#' || 
            href === '' || 
            href.includes('.html')) {
            return;
        }
        
        // Verifica se o link deve ser excluído
        let shouldExclude = false;
        excludeSelectors.forEach(selector => {
            if (anchor.matches(selector) || anchor.closest(selector)) {
                shouldExclude = true;
            }
        });
        
        if (shouldExclude) {
            return;
        }
        
        // Só intercepta links que começam com # (âncoras na mesma página)
        if (href.startsWith('#')) {
            // Evita adicionar múltiplos listeners
            if (anchor.dataset.smoothScrollAdded) return;
            anchor.dataset.smoothScrollAdded = 'true';
            
            anchor.addEventListener('click', function(e) {
                const targetHref = this.getAttribute('href');
                
                // Verificações de segurança
                if (targetHref.includes('.html')) {
                    return true; // Permite navegação normal
                }
                
                const target = document.querySelector(targetHref);
                if (target) {
                    e.preventDefault();
                    
                    // Fecha o menu se estiver aberto (mobile)
                    if (closeMenuOnScroll) {
                        const navMenu = document.getElementById('navMenu');
                        if (navMenu && navMenu.classList.contains('active')) {
                            APEXUtils.closeMenu();
                        }
                    }
                    
                    APEXUtils.smoothScrollTo(targetHref, headerOffset);
                    return false;
                }
            }, false);
        }
    });
};

/**
 * Scroll automático para âncora quando a página carrega com hash na URL
 * @param {number} headerOffset - Offset do header em pixels (padrão: 90)
 */
APEXUtils.scrollToHash = function(headerOffset = 90) {
    if (window.location.hash) {
        const hash = window.location.hash;
        const target = document.querySelector(hash);
        if (target) {
            // Aguarda um pouco para garantir que a página está totalmente renderizada
            setTimeout(() => {
                APEXUtils.smoothScrollTo(hash, headerOffset);
            }, 100);
        }
    }
};

