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
    const message = 'Add City'
    return inquirer.prompt([
        {
            name: 'city',
            type: 'input',
            message: message, 
            validate: function(value){
                if(value !== '' ){
                    return true
                } else {
                    return 'Enter a valid city'
                }
            } 
        }
    ])
}

function input3 (citys){
    const message = 'Select Location: '
    const choices = citys
    return inquirer.prompt({
        name: 'c_city',
        type: 'list',
        message: message,
        choices: choices
    })
}
module.exports = {
    view, 
    input1,
    input2,
    input3
   
}