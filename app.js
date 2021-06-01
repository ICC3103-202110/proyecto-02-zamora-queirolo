const {input1, input2, input3, input4} = require('./view')
const {printTable} = require('console-table-printer')
const { Table } = require('console-table-printer');

async function app(state, update, view){
    const {model, currentView} = state
    const {title, table} = currentView
    const table1 = new Table(['Name', 'Temp', 'Max', 'Min'])
    while (true){
        
        //console.clear()
        console.log(title)
        table1.printTable()

        // FORM (Ask user input)
        const {choise} = await input1()
        if(choise === 'Add City'){
            console.log('test Add City')
            const {city} = await input2()
            console.log('test: ', city)
            const newMax = Math.floor(Math.random() * 50)
            const newMin = Math.floor(Math.random() * newMax)
            const newTemp = Math.floor(Math.random() * newMax-1)+newMin
            table1.addRow({ Name: city, Temp: newTemp , Max:newMax  , Min: newMin }, { color: 'magenta' });
            }
        if(choise === 'Update City'){
            console.log('test Update City')
            const {c_city} = await input3()
             
            }
        if(choise === 'Delete City'){
            console.log('test Delete City')
            //const {c_city} = await input3()
            console.log(table1)
            console.log('test ',table1[1])
            }
         
        }
    }


module.exports = {
    app
}