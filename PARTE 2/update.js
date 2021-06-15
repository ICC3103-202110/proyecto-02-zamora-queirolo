const request = require("request")
async function UpdateTemperature(location){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&appid=1b071321e2299da975e40d293fdc2dce'
    //let max = 0
    //let min= 0 
    //let temperature =0 
    
    await request(url, (error, response, body) =>{
        const data = JSON.parse(body)
        const max = parseFloat(data.main.temp_max) 
        const min= parseFloat(data.main.temp_min) 
        const temperature = parseFloat(data.main.temp)
        console.log(max)
        console.log(min)
        console.log(temperature)
        
        return {max, min, temperature}   
    })
    
    

    
}


module.exports = {
    UpdateTemperature
}
