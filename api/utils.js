const nodemailer = require('nodemailer');

/**
 * Verifica se uma string é um JSON válido
 * @param {*} value - Valor a ser verificado
 * @returns {boolean} - true se for JSON válido, false caso contrário
 */
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

/**
 * Lê o corpo da requisição HTTP
 * @param {Object} req - Objeto de requisição
 * @returns {Promise<string>} - Promise que resolve com o corpo da requisição
 */
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

/**
 * Cria e retorna um transporter do Nodemailer configurado com as variáveis de ambiente
 * @returns {Object} - Transporter do Nodemailer configurado
 */
const createTransporter = () => {
  if (!process.env.ZOHO_MAIL_USER || !process.env.ZOHO_MAIL_PASS) {
    throw new Error('Variáveis de ambiente ZOHO_MAIL_USER e ZOHO_MAIL_PASS não configuradas.');
  }

  const host = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com';
  const port = Number(process.env.ZOHO_SMTP_PORT || 465);
  const secure = port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.ZOHO_MAIL_USER,
      pass: process.env.ZOHO_MAIL_PASS,
    },
  });
};

/**
 * Valida um endereço de email usando regex
 * @param {string} email - Email a ser validado
 * @returns {boolean} - true se o email for válido, false caso contrário
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

module.exports = {
  isJsonString,
  readRequestBody,
  createTransporter,
  isValidEmail,
};

