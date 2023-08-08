const Roles = require('./db_Choices/db_Roles');
const main = require('../mainMenu');

function viewAllRoles() {
    const roleMenu = new Roles();
    roleMenu
    .viewAll()
    .then((roleTable) => {
        console.log(`
        `);
        console.table(roleTable);
        console.log('');
    })
    .then(() => {
        main.mainMenu();
    });

}

function addRole() {

    
}

module.exports = {viewAllRoles, addRole};