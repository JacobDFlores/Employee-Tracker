const inquirer = require('inquirer');
const Roles = require('./db_Choices/db_Roles');
const Employee = require('./db_Choices/db_Employee');
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

    const roles = new Roles();
    const managers = new Employee();

    roles.viewAll().then((rolesTable) => {
        managers.viewAll().then((employeeTable) =>{

            let employeeArray = employeeTable.map(employee =>{
                return `${employee.first_name} ${employee.last_name}`;
            });
            employeeArray.push('none');

            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the employee\'s first name?',
                    name: 'first_name',
                },
                {
                    type: 'input',
                    message: 'What is the employee\'s last name?',
                    name: 'last_name',
                },
                {
                    type: 'list',
                    message: 'What is the employees role?',
                    choices: rolesTable.map(role =>{
                        return `${role.title}`;
                    }),
                    name: 'role'
                },
                {
                    type: 'list',
                    message: 'Who is the employees manager?',
                    choices: employeeArray,
                    name: 'manager'
                },
                ])
            .then(({first_name, last_name, role, manager}) => {
                 
                main.mainMenu();
            });
        })
    })

}

function updateAnEmployee() {


}

module.exports = {viewAllEmployees, addAnEmployee, updateAnEmployee};