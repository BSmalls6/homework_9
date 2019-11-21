class Manager {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
        this.getNumber = function(){
            return this.officeNumber
        }
        this.title = Manager;
    }
}

module.exports = Manager;