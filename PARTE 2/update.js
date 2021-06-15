const request = require("request")
function UpdateTemperature(location){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&appid=1b071321e2299da975e40d293fdc2dce'
    //let max = 0
    //let min= 0 
    //let temperature =0 

    return new Promise((resolve, reject)=>{
        request(url, (error, response, body)=>{
            resolve(JSON.parse(body).main)
        })
    }) 

    
}


module.exports = {
    UpdateTemperature
}
