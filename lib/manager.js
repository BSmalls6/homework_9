const Employee = require("./employee");

class Manager {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
        this.getNumber = function(){
            return this.officeNumber
        }
    }
}

module.exports = Manager;