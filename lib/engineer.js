const Employee = require("./employee");
class Engineer {
    constructor(github){
        this.github = github;
        this.getGithub = function() {
            return this.github
        };
    }
    }
module.exports = Engineer;