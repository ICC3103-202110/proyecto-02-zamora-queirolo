const {input1, input2, input3, input4} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView

        console.clear()
        console.log(title)
        printTable(table)

        // FORM (Ask user input)
        const {choise} = await input1()
        if(choise === 'Add City'){
            console.log('test Add City')
            const {city} = await input2()
            
            }
        if(choise === 'Update City'){
            console.log('test Update City')
            const {c_city} = await input3()
             
            }
        if(choise === 'Delete City'){
            console.log('test Delete City')
            const {c_city} = await input3()
             
            }
         
        }
    }


module.exports = {
    app
}