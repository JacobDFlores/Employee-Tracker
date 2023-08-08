const Department = require('./db_Choices/db_Department')
const main = require('../mainMenu');

function viewAllDepartments() {
    const depMenu = new Department();
    depMenu.viewAll()
    .then((depTable) => {
        console.log(`
        `);
        console.table(depTable);
        console.log('');
    })
    .then(() => {
        main.mainMenu();
    });

}

function addDepartment() {

    
}

module.exports = {viewAllDepartments, addDepartment};