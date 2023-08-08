const Employee = require('./db_Choices/db_Employee')
const main = require('../mainMenu');


function viewAllEmployees() {
    const empMenu = new Employee();
    empMenu
    .viewAll()
    .then((empTable) => {
        console.log(`
        `);
        console.table(empTable);
        console.log('');
    })
    .then(() => {
        main.mainMenu();
    });
    
}

function addAnEmployee() {


}

function updateAnEmployee() {


}

module.exports = {viewAllEmployees, addAnEmployee, updateAnEmployee};