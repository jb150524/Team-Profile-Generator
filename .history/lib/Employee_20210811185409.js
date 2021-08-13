// Code to define and export Employee Class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id =id;
        this.email = email;
        this.title
}

    getName() {
        return this.name
}

    getId() {
        return this.id
}

    getEmail() {
        return this.email
}

    getRole () {
        return 'Employee';
    }
}

module.exports = Employee;