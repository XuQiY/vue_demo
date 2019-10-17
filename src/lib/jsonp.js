import jsonp from 'jsonp'
import {
    rejects
} from 'assert';



export function get(url) {
    const options = {
        parma: "callback",
        timeout: 6000,
        prefix: "",
        name: "callbackFun"
    }
    console.log('开始请求' + url)

    return new Promise((resolve, reject) => {
        jsonp(url, options, (err, res) => {
            if (err) {
                console.log(err);
                reject(err)
            } else {
                console.log(res)
                resolve(res)

            }
        })
    })

}