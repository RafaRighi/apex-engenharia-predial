/**
 * WhatsApp Button Loader
 * Carrega o botão WhatsApp de forma adiada para não bloquear a thread principal
 * Carrega 4 segundos após o evento 'load' ou na primeira interação do usuário (scroll/click)
 */
(function() {
    'use strict';

    let whatsappLoaded = false;
    let loadTimer = null;
    let interactionHandlersAttached = false;

    // HTML do botão WhatsApp
    const whatsappHTML = `
        <a href="https://wa.me/5551981078843?text=Olá%20APEX,%20gostaria%20de%20um%20orçamento" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="whatsapp-float" 
           title="Fale conosco no WhatsApp" 
           aria-label="WhatsApp APEX">
            <svg viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.409 1.417-5.267-0.316-0.518c-1.351-2.217-2.067-4.78-2.067-7.403 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62-6.11 13.62-13.62 13.62zM21.524 19.006c-0.272-0.137-1.609-0.795-1.859-0.886-0.248-0.09-0.429-0.137-0.61 0.137s-0.702 0.886-0.861 1.068c-0.158 0.182-0.316 0.205-0.589 0.068-0.272-0.137-1.149-0.423-2.187-1.35-0.809-0.721-1.355-1.612-1.514-1.884s-0.017-0.421 0.12-0.557c0.123-0.123 0.272-0.319 0.408-0.478s0.181-0.272 0.272-0.453c0.090-0.181 0.045-0.34-0.023-0.478s-0.61-1.471-0.837-2.012c-0.221-0.525-0.444-0.454-0.61-0.462-0.158-0.008-0.339-0.010-0.52-0.010s-0.476 0.068-0.725 0.34c-0.248 0.272-0.949 0.928-0.949 2.263s0.972 2.625 1.108 2.806c0.137 0.181 1.898 2.963 4.651 4.088 2.753 1.125 2.753 0.75 3.252 0.704s1.609-0.657 1.836-1.291c0.226-0.635 0.226-1.178 0.158-1.291s-0.248-0.181-0.52-0.319z"/>
            </svg>
        </a>
    `;

    /**
     * Carrega o botão WhatsApp no DOM
     */
    function loadWhatsApp() {
        if (whatsappLoaded) return;
        
        whatsappLoaded = true;
        
        // Remove handlers de interação se ainda não foram executados
        if (loadTimer) {
            clearTimeout(loadTimer);
            loadTimer = null;
        }
        
        // Remove event listeners de interação
        removeInteractionHandlers();
        
        // Insere o botão no body
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = whatsappHTML;
        const whatsappButton = tempDiv.firstElementChild;
        document.body.appendChild(whatsappButton);
        
        // Adiciona evento de clique para tracking (opcional)
        whatsappButton.addEventListener('click', function(e) {
            // Permite que o link funcione normalmente
            // Pode adicionar tracking aqui se necessário
        }, { passive: true });
    }

    /**
     * Adiciona handlers de interação do usuário
     */
    function attachInteractionHandlers() {
        if (interactionHandlersAttached || whatsappLoaded) return;
        
        interactionHandlersAttached = true;
        
        // Handler para scroll
        const onScroll = function() {
            loadWhatsApp();
        };
        
        // Handler para click
        const onClick = function() {
            loadWhatsApp();
        };
        
        // Adiciona listeners com passive para melhor performance
        window.addEventListener('scroll', onScroll, { passive: true, once: true });
        window.addEventListener('click', onClick, { passive: true, once: true });
        window.addEventListener('touchstart', onClick, { passive: true, once: true });
    }

    /**
     * Remove handlers de interação
     */
    function removeInteractionHandlers() {
        // Os listeners são removidos automaticamente com { once: true }
        // Mas mantemos a função para clareza do código
        interactionHandlersAttached = false;
    }

    /**
     * Inicializa o carregamento adiado do WhatsApp
     */
    function init() {
        // Se a página já carregou, agenda para 4 segundos
        if (document.readyState === 'complete') {
            loadTimer = setTimeout(loadWhatsApp, 4000);
            attachInteractionHandlers();
        } else {
            // Aguarda o evento 'load' e então agenda para 4 segundos
            window.addEventListener('load', function() {
                loadTimer = setTimeout(loadWhatsApp, 4000);
                attachInteractionHandlers();
            }, { once: true });
        }
        
        // Sempre anexa handlers de interação imediatamente
        // para carregar na primeira interação do usuário
        attachInteractionHandlers();
    }

    // Inicializa quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

