const db = require('../../../db/createConnection');
const cTable = require('console.table');

class Roles {
    constructor(id, title, salary, department_id){
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }

    viewAll(){
        const sql = `SELECT * FROM roles`;
        return db
            .promise()
            .query(sql)
            .then(([table]) => {
                return table;
            });
    }
}

module.exports = Roles;