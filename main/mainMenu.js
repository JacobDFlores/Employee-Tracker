const inquirer = require('inquirer');
const {viewAllEmployees, addAnEmployee,
      updateAnEmployee} = require('./choices/employee');

function mainMenu() {

    inquirer.prompt([
    {
        type: 'list',
        message: 'What do you want to do?',
        name: 'mainMenu',
        choices:[
            'View all employees',
            'View all roles',
            'View all departments',
            'Add an employee',
            'Add a role',
            'Add a department',
            'Update an employee'
        ],
    },
    ])
    .then(({mainMenu}) => {
        switch(mainMenu){
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'View all roles':
                break;
            case 'View all departments':
                break;
            case 'Add an employee':
                break;
            case 'Add a role':
                break;
            case 'Add a department':
                break;
            case 'Update an employee':

        }
    });
}


exports.mainMenu = mainMenu;



