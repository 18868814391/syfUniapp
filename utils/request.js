export function Post (url,obj) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: url, //仅为示例，并非真实接口地址。
            data: obj,
            method:'POST',
            success: (res) => {
                resolve(res);
            },
            fail(err) {
                reject(err)
            }
        });
    })
}