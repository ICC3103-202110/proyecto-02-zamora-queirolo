const {input1, input2, input3} = require('./view')
const {printTable} = require('console-table-printer')
const {UpdateTemperature} = require('./update')
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
            console.log('Loading: ', city)
            const{temp_max, temp_min, temp} = await UpdateTemperature(city) 

            table.push({Name: city, Temp: temp, Max: temp_max, Min: temp_min})
            citys.push(city)
            }
        if(choise === 'Update City'){
            console.log('test Update City')
            const {c_city} = await input3(citys)
            let pos = citys.indexOf(c_city)
            citys.splice(pos, 1)
            table.splice(pos, 1)
            const{temp_max, temp_min, temp} = await UpdateTemperature(c_city)
            table.push({Name: c_city, Temp: temp, Max: temp_max, Min: temp_min})
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