const Employee = require("./");

class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email)
        this.school = school
    }
    getRole () {
        return 'Intern'
    }
    getSchool () {
        return this.school
    }
}