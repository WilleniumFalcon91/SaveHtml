const fs = require('fs');
const https = require('https');

const file = fs.createWriteStream(__dirname + '/file.txt');

https.get('https://css-tricks.com/creating-book-cover-using-javascript-p5-js/', (buffer) =>  {
    buffer.pipe(file);
    file.on('finish', () => {
        file.close(function(err) {
            console.log('done');
        });
    });
});