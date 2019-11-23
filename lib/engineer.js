const Employee = require("./employee");
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
        // this.getGithub = function() {
        //     return this.github
        // };
        // this.getRole = function(){
        //     return "Engineer" ;
        //   };
    }
    }
module.exports = Engineer;