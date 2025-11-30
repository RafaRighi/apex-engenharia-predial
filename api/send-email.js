const { isJsonString, readRequestBody, createTransporter } = require('./utils');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Método não permitido.' });
  }

  const rawBody =
    typeof req.body !== 'undefined' && req.body !== null ? req.body : await readRequestBody(req);

  const payload =
    typeof rawBody === 'string' && rawBody.trim().length > 0
      ? JSON.parse(isJsonString(rawBody) ? rawBody : '{}')
      : rawBody;

  const { nome, email, telefone, mensagem, condominio, empresa } = payload || {};

  console.log('📧 API send-email recebeu:', { nome, email, telefone, mensagem, condominio, empresa });

  // Validação: nome e telefone são obrigatórios
  if (!nome || !telefone) {
    console.error('❌ Validação falhou: nome ou telefone ausente');
    return res.status(400).json({ success: false, message: 'Nome e telefone são obrigatórios.' });
  }

  // Se não tiver email, usa um email padrão baseado no telefone
  const emailFinal = email || `contato-${telefone.replace(/\D/g, '')}@apexengenhariapredial.com.br`;
  
  // Monta a mensagem com informações disponíveis
  let mensagemFinal = mensagem || '';
  if (condominio) {
    mensagemFinal += (mensagemFinal ? '\n\n' : '') + `Condomínio: ${condominio}`;
  }
  if (empresa) {
    mensagemFinal += (mensagemFinal ? '\n\n' : '') + `Empresa: ${empresa}`;
  }
  if (!mensagemFinal) {
    mensagemFinal = 'Solicitação de orçamento via landing page';
  }

  let transporter;
  try {
    transporter = createTransporter();
  } catch (error) {
    console.error('Variáveis de ambiente ZOHO_MAIL_USER e ZOHO_MAIL_PASS não configuradas.');
    return res.status(500).json({ success: false, message: 'Configuração de e-mail ausente.' });
  }

  const emailTo = process.env.ZOHO_MAIL_TO || process.env.ZOHO_MAIL_USER;
  const emailFrom = process.env.ZOHO_MAIL_USER;
  
  console.log('📤 Preparando envio de email:', {
    from: emailFrom,
    to: emailTo,
    subject: condominio ? `Novo orçamento - Pintura Predial - ${nome}` : empresa ? `Novo orçamento - Pintura Industrial - ${nome}` : `Novo contato pelo site - ${nome}`
  });

  try {
    const emailResult = await transporter.sendMail({
      from: `APEX Engenharia Predial <${emailFrom}>`,
      to: emailTo,
      replyTo: email || emailFinal,
      subject: condominio ? `Novo orçamento - Pintura Predial - ${nome}` : empresa ? `Novo orçamento - Pintura Industrial - ${nome}` : `Novo contato pelo site - ${nome}`,
      text: `Nome: ${nome}\n${email ? `Email: ${email}\n` : ''}Telefone: ${telefone}${condominio ? `\nCondomínio: ${condominio}` : ''}${empresa ? `\nEmpresa: ${empresa}` : ''}\n\nMensagem:\n${mensagemFinal}`,
      html: `
        <h2>${condominio ? 'Novo orçamento - Pintura Predial' : empresa ? 'Novo orçamento - Pintura Industrial' : 'Novo contato pelo site'}</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
        <p><strong>Telefone/WhatsApp:</strong> ${telefone}</p>
        ${condominio ? `<p><strong>Condomínio:</strong> ${condominio}</p>` : ''}
        ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
        <p><strong>Mensagem:</strong></p>
        <p>${mensagemFinal.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('✅ Email enviado com sucesso!', {
      messageId: emailResult.messageId,
      response: emailResult.response
    });

    return res.status(200).json({ success: true, messageId: emailResult.messageId });
  } catch (error) {
    console.error('❌ Erro ao enviar e-mail:', error);
    console.error('Detalhes do erro:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    });
    return res.status(500).json({ success: false, message: 'Falha ao enviar e-mail.', error: error.message });
  }
};
