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

  const { nome, email, telefone, mensagem } = payload || {};

  if (!nome || !email || !telefone || !mensagem) {
    return res.status(400).json({ success: false, message: 'Campos obrigatórios ausentes.' });
  }

  let transporter;
  try {
    transporter = createTransporter();
  } catch (error) {
    console.error('Variáveis de ambiente ZOHO_MAIL_USER e ZOHO_MAIL_PASS não configuradas.');
    return res.status(500).json({ success: false, message: 'Configuração de e-mail ausente.' });
  }

  try {
    await transporter.sendMail({
      from: `APEX Engenharia Predial <${process.env.ZOHO_MAIL_USER}>`,
      to: process.env.ZOHO_MAIL_TO || process.env.ZOHO_MAIL_USER,
      replyTo: email,
      subject: `Novo contato pelo site - ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\n\nMensagem:\n${mensagem}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar e-mail', error);
    return res.status(500).json({ success: false, message: 'Falha ao enviar e-mail.' });
  }
};
