const db = require('../../../db/createConnection');
const cTable = require('console.table');

class Department {
    constructor(id, dep_name){
        this.id = id;
        this.dep_name = dep_name;
    }

    viewAll(){
        const sql = `SELECT
        d.dep_name AS Departments
        FROM department d`;
        return db
            .promise()
            .query(sql)
            .then(([table]) => {
                return table;
            });
    }

    getAll(){
        const sql = `SELECT * FROM department`
        return db.promise().query(sql).then(([table]) =>{
            return table;
        })
    }

    addDepartment(){
        const sql = `INSERT INTO department(dep_name) 
        VALUES ('${this.dep_name}')`;
        return db
            .promise()
            .query(sql);
    }

    getDepartmentId(){
        const sql = `SELECT * FROM department WHERE dep_name='${this.dep_name}'`
        return db
            .promise()
            .query(sql)
            .then(([department]) => {
                return department;
            })
    }
}

module.exports = Department;