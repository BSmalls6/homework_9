const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super (name, id, email);

        this.school = school;
        // this.getSchool = function(){
        //     return this.school
        // }
        // this.getRole = function(){
        //     return "Intern" ;
        //   };
    }
}

module.exports = Intern;