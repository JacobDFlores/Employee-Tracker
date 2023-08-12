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

    roles.getAll().then((rolesTable) => {
        managers.getAll().then((employeeTable) =>{

            let employeeArray = employeeTable.map(employee =>{
                return `${employee.first_name} ${employee.last_name}`;
            });
            employeeArray.push('None');

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
                
                const findRole = new Roles(null, role, null, null);
                if (manager == 'None'){
                    findRole.getRoleID()
                    .then(([r]) =>{
                        let role_id = r.id;

                        const newEmployee = new Employee(null, first_name, last_name, role_id, null)
                        newEmployee.addEmployee()
                        .then(() =>{
                            console.log(`
                            Added employee to database successfully
                            `)
                            main.mainMenu();
                        })
                    })
                }
                else {
                    const man = manager.split(' ');
                    const findManager = new Employee(null, man[0], man[1], null, null );
                    findManager.getManagerID()
                    .then(([m]) =>{
                        findRole.getRoleID()
                        .then(([r]) =>{
                            let role_id = r.id;

                            const newEmployee = new Employee(null, first_name, last_name, role_id, m.id)
                            newEmployee.addEmployee()
                            .then(() =>{
                                console.log(`
Added employee to database successfully
                                `)
                                main.mainMenu();
                            })
                        })
                    })
                }      
            })
        })
    })
}

function updateAnEmployee() {
    const employees = new Employee()
    const roles = new Roles();

    employees.getAll().then((empTable) =>{
        roles.getAll().then((roleTable) =>{

            let roleArray = roleTable.map((r) =>{
                return `${r.title}`;
            });

            let empArray = empTable.map((e) =>{
                return `${e.first_name} ${e.last_name}`;
            });

            inquirer.prompt([
                {
                    type: 'list',
                    message: 'Wich employee\'s role would you like to update?',
                    choices: empArray,
                    name: 'employee',
                },
                {
                    type: 'list',
                    message: 'What is the employee\'s new role?',
                    choices: roleArray,
                    name: 'role',
                },
                ])
            .then(({employee, role}) => {

                const man = employee.split(' ');
                const findEmp = new Employee(null, man[0], man[1], null, null );
                findEmp.getManagerID()
                .then(([empRow]) =>{
                    const findRole = new Roles(null, role, null, null);
                    findRole.getRoleID()
                    .then(([roleRow]) =>{
                        const updateEmp = new Employee(empRow.id, null, null, roleRow.id, null );
                        updateEmp.updateEmployee()
                        .then(() =>{
                            console.log(`
Successfully updated Employee\'s role
                            `)

                            main.mainMenu();

                        })
                    })

                })
            })
        })
    }) 
}

module.exports = {viewAllEmployees, addAnEmployee, updateAnEmployee};