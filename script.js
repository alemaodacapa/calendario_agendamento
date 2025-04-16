document.getElementById('appointment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const reason = document.getElementById('reason').value.trim();

    if (!date || !time || !name || !phone || !email || !address || !reason) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const formattedMessage = 
        `📅 *Agendamento de Visita Presencial*\n\n` +
        `👤 *Nome:* ${name}\n` +
        `📞 *Telefone:* ${phone}\n` +
        `📧 *Email:* ${email}\n` +
        `🏡 *Endereço:* ${address}\n` +
        `📅 *Data Escolhida:* ${date}\n` +
        `⏰ *Horário:* ${time}\n\n` +
        `📝 *Motivo do Agendamento:*\n${reason}`;

    const whatsappNumber = '5511948793902'; // Código do país + número
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappURL, '_blank');
});
