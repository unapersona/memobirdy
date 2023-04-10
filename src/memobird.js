const config = require('../config');
const Memobird = require('memobird');
const memobird = new Memobird(config.memobird);

module.exports = {
    text(text) {
        return memobird.init()
            .then(() => memobird.printText(text))
            .then(printcontentid => memobird.glance(printcontentid, 3000))
    },
    image(image, caption) {
        const content = [memobird.encodeImage(image)]
        if (caption) content.push(memobird.encodeText('\n' + caption));
        return memobird.init()
            .then(() => memobird.print(...content))
            .then(printcontentid => memobird.glance(printcontentid, 3000))
    }
}