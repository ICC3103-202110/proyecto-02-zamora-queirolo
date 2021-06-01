const {input1, input2, input3, input4} = require('./view')
const {printTable} = require('console-table-printer')


async function app(state, update, view){
    const {model, currentView} = state
    const {title} = currentView
    const table = []
    const fake_table = [{Name: '',
                        Temp: '',
                        Max: '',
                        Min: ''}]
    const citys = []
    while (true){
        
        //console.clear()
        if (table.length === 0){
            console.log(title)
            printTable(fake_table)  
        }
        else{
        console.log(title)
        printTable(table)
        }

        // FORM (Ask user input)
        const {choise} = await input1()
        if(choise === 'Add City'){
            console.log('test Add City')
            const {city} = await input2()
            console.log('test: ', city)
            const newMax = Math.floor(Math.random() * 50)
            const newMin = Math.floor(Math.random() * newMax)
            const newTemp = Math.floor(Math.random() * newMax)+newMin
            table.push({Name: city, Temp: newTemp, Max: newMax, Min: newMin})
            citys.push(city)
            }
        if(choise === 'Update City'){
            console.log('test Update City')
            const {c_city} = await input3()
             
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