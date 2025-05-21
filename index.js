function chabanao() {
    return new Promise(function (resolved, reject) {
        console.log("cha banano suru hoilo");

        setTimeout(function () {
            let chahoise = false;

            if (chahoise) {
                resolved("successfully done",);
            }
            else {
                reject('hoi nai akhn oo')
            }

        }, 3000)
    })
}

chabanao()
    .then(function (result) {
        console.log("success", result);
    })
    .catch(function (error) {
        console.log("hbe na", error);
    })


    console.log("hi baby");