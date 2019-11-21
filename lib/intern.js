class intern {
    constructor(school, getSchool, title){
        this.school = school;
        this.getSchool = function(){
            return this.school
        }
        this.title= intern;
    }
}

module.exports = intern;