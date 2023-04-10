const memobird = require('./src/memobird');
const telegram = require('./src/telegram');


telegram.on('text', (msg) => {
    //console.log('text', msg);
    //telegram.send(msg.chat.id, 'Received your message');
    memobird.text(msg.text).then(result => telegram.send(msg.chat.id, '🖨 Sent to MemoBird'));
});
telegram.on('photo', async (msg) => {
    //console.log('image', msg);
    //telegram.send(msg.chat.id, 'Received your photo');
    const txt = msg.caption || '';
    const url = await telegram.getFile(msg.photo[1].file_id);
    memobird.image(url, txt).then(result => telegram.send(msg.chat.id, '🖨 Sent to MemoBird'))
});
telegram.on('file', async (msg) => {
    //console.log('file', msg);
    telegram.send(chatId, 'Filetype not supported 😥');
    return;
    const url = await telegram.getFile(msg.photo[1].file_id);
    memobird.image(url, caption).then(result => telegram.send(msg.chat.id, '🖨 Sent to MemoBird'))
});