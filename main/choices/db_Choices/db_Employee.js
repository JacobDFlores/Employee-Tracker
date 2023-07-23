const db = require('../../../db/createConnection');
const cTable = require('console.table');

class Employee {
    constructor(id, first_Name, last_Name, role_Id, manager_Id){
        this.id = id;
        this.first_Name = first_Name;
        this.last_Name = last_Name;
        this.role_Id = role_Id;
        this.manager_Id = manager_Id;
    }

    viewAll(){
        const sql = `SELECT * FROM employee`;
        return db
            .promise()
            .query(sql)
            .then(([table]) => {
                return table;
            });
    }
}

module.exports = Employee;