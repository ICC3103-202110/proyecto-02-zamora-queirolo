const {input1, input2, input3, input4} = require('./view')
const {printTable} = require('console-table-printer')
const {randomTemperature, randomMaxTemperature, randomMinTemperature} = require('./update')
const figlet = require('figlet')
const chalk = require('chalk')


async function app(view){

    const {title} = view
    const table = []
    const fake_table = [{Name: '',
                        Temp: '',
                        Max: '',
                        Min: ''}]
    const citys = []
    while (true){
        
        console.clear()
        if (table.length === 0){
            console.log(chalk.magenta(
                figlet.textSync(
                    'Weather App',
                    {
                        horizontalLayout: 'full',
                        font: 'Nancyj-Underlined'
                    }
                )
            ))
            printTable(fake_table)  
        }
        else{
        console.log(chalk.magenta(
            figlet.textSync(
                'Weather App',
                {
                    horizontalLayout: 'full',
                    font: 'Nancyj-Underlined'
                }
            )
        ))
        printTable(table)
        }

        // FORM (Ask user input)
        const {choise} = await input1()
        if(choise === 'Add City'){
            console.log('test Add City')
            const {city} = await input2()
            console.log('test: ', city)
            const {
                max: newMax,
                min: newMin,
                temperature: newTemp
            } = UpdateTemperature()
            table.push({Name: city, Temp: newTemp, Max: newMax, Min: newMin})
            citys.push(city)
            }
        if(choise === 'Update City'){
            console.log('test Update City')
            const {c_city} = await input3(citys)
            let pos = citys.indexOf(c_city)
            citys.splice(pos, 1)
            table.splice(pos, 1)
            const {
                max: newMax,
                min: newMin,
                temperature: newTemp
            } = randomTemperature()
            table.push({Name: c_city, Temp: newTemp, Max: newMax, Min: newMin})
            citys.push(c_city)
            }
        if(choise === 'Delete City'){
            console.log('test Delete City')
            const {c_city} = await input3(citys)
            let pos = citys.indexOf(c_city)
            citys.splice(pos, 1)
            table.splice(pos, 1)
            }
         
        }
        
    }


module.exports = {
    app
}