const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.magenta(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    return [
        {'Name': name,
            'Temp': temp,
            'Max': max,
            'Min': min
        }
    ]
}



// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

function input1 (){
    const message = 'Select action: '
    const choices = ['Add City', 'Update City', 'Delete City']
    return inquirer.prompt({
        name: 'choise',
        type: 'list',
        message: message,
        default: 'choise',
        choices: choices
    })
}

function input2(model){
    const {name} = model
    const message = 'Add City'
    return inquirer.prompt([
        {
            name: 'city',
            type: 'input',
            message: message,
            default: name,
            
            
        }
    ])
}

function input3 (){
    const message = 'Select Location: '
    const choices = ['Add City', 'Update City', 'Delete City']
    return inquirer.prompt({
        name: 'c_city',
        type: 'list',
        message: message,
        default: name,
        choices: choices
    })
}
module.exports = {
    view, 
    input1,
    input2,
    input3
   
}