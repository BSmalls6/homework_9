class engineer {
    constructor(github, getGithub, title){
        this.github = github;
        this.getGithub = function() {
            return this.github
        };
        this.title= engineer;
    }
}

module.exports = engineer;