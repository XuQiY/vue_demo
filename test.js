const f = require('fs')

let res = []
f.readFile('./image_urls.json', 'utf-8', (err, data) => {
    let list = JSON.parse(data)
    for (let i in list) {
        res.push({ 'img_url': i })
    }
    console.log(res)
    f.writeFile('./img_urls.json', JSON.stringify(res), 'utf-8', err => err);
})