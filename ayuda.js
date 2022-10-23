fetch('https://api.bluelytics.com.ar/v2/latest')
    .then(res => res.json ())
    .then(data => {
        //console.log(data.results)
        data.results.forEach(element => {
            console.log(element.name)
        })
    })
    .catch(error => console.log(error))