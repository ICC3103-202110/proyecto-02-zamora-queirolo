function randomMaxTemperature(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function randomMinTemperature(min, max) {
    return Math.round(Math.random() * (max- min) + min)
}

function randomTemperature(){
    const max = randomMaxTemperature(-10,45)
    const min = randomMinTemperature(0,max)
    const temperature = Math.round(Math.random() * (max- min) + min)
    return {max, min, temperature}
}

console.log("temperature", randomTemperature())


module.exports = {
    randomTemperature,
    randomMaxTemperature, 
    randomMinTemperature
}
