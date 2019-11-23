const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber;
        // this.getNumber = function(){
        //     return this.officeNumber
        // }
        // this.getRole = function(){
        //     return "Manager" ;
        //   };
    }
}

module.exports = Manager;