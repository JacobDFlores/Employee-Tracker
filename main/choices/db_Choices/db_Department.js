const db = require('../../../db/createConnection');
const cTable = require('console.table');

class Department {
    constructor(id, dep_name){
        this.id = id;
        this.dep_name = dep_name;
    }

    viewAll(){
        const sql = `SELECT * FROM department`;
        return db
            .promise()
            .query(sql)
            .then(([table]) => {
                return table;
            });
    }
}

module.exports = Department;