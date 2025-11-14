const nodemailer = require('nodemailer');

const isJsonString = (value) => {
  if (typeof value !== 'string') {
    return false;
  }

  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
};

const readRequestBody = async (req) =>
  new Promise((resolve, reject) => {
    let data = '';

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => {
      resolve(data);
    });

    req.on('error', (error) => {
      reject(error);
    });
  });

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Método não permitido.' });
  }

  const rawBody =
    typeof req.body !== 'undefined' && req.body !== null ? await readRequestBody(req) : '{}';

  const payload =
    typeof rawBody === 'string' && rawBody.trim().length > 0
      ? JSON.parse(isJsonString(rawBody) ? rawBody : '{}')
      : rawBody;

  const { email } = payload || {};

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email é obrigatório.' });
  }

  // Validação básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Email inválido.' });
  }

  if (!process.env.ZOHO_MAIL_USER || !process.env.ZOHO_MAIL_PASS) {
    console.error('Variáveis de ambiente ZOHO_MAIL_USER e ZOHO_MAIL_PASS não configuradas.');
    return res.status(500).json({ success: false, message: 'Configuração de e-mail ausente.' });
  }

  const host = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com';
  const port = Number(process.env.ZOHO_SMTP_PORT || 465);
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.ZOHO_MAIL_USER,
      pass: process.env.ZOHO_MAIL_PASS,
    },
  });

  try {
    // Envia email de confirmação para o usuário
    await transporter.sendMail({
      from: `APEX Engenharia Predial <${process.env.ZOHO_MAIL_USER}>`,
      to: email,
      subject: 'Bem-vindo à Newsletter da APEX Engenharia Predial!',
      text: `Olá!\n\nObrigado por se inscrever na nossa newsletter!\n\nVocê receberá dicas exclusivas sobre pintura industrial, pintura predial, manutenção predial e muito mais.\n\nAtenciosamente,\nEquipe APEX Engenharia Predial`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00a8e8;">Bem-vindo à Newsletter da APEX!</h2>
          <p>Olá!</p>
          <p>Obrigado por se inscrever na nossa newsletter!</p>
          <p>Você receberá dicas exclusivas sobre:</p>
          <ul>
            <li>Pintura industrial e predial</li>
            <li>Manutenção predial</li>
            <li>Restauração de fachadas</li>
            <li>Impermeabilização</li>
            <li>E muito mais!</li>
          </ul>
          <p>Atenciosamente,<br><strong>Equipe APEX Engenharia Predial</strong></p>
        </div>
      `,
    });

    // Envia notificação para o administrador
    const adminEmail = process.env.ZOHO_MAIL_TO || process.env.ZOHO_MAIL_USER;
    await transporter.sendMail({
      from: `APEX Engenharia Predial <${process.env.ZOHO_MAIL_USER}>`,
      to: adminEmail,
      subject: `Nova inscrição na newsletter - ${email}`,
      text: `Nova inscrição na newsletter:\n\nEmail: ${email}\nData: ${new Date().toLocaleString('pt-BR')}`,
      html: `
        <h2>Nova inscrição na newsletter</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Inscrição realizada com sucesso!' });
  } catch (error) {
    console.error('Erro ao processar inscrição na newsletter', error);
    return res.status(500).json({ success: false, message: 'Falha ao processar inscrição.' });
  }
};

