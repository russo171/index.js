const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Criar cliente do WhatsApp
const client = new Client();

client.on('qr', qr => {
    console.log('Escaneie este QR Code para fazer login:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp conectado com sucesso!');
});

client.initialize();
