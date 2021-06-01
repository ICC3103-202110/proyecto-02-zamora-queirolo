const {printTable} = require('console-table-printer')
let a = [{a: 'hola',
        b: 'que tal',
        c: 'adios'}]
printTable(a)
a.push({a: 'test',
            b: 'Test',
            c: 'test'})
printTable(a)
a.pop()
printTable(a)