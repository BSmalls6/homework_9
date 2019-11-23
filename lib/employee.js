class Employee {
constructor(name, id, email) {
    if (!name) {
        throw new Error("You are missing the name.");
      }
     this.name = name;
     this.id=id;
     this.email=email;
    //  this.getName = function(){
    //    return this.name;
    //  };
    //  this.getId = function(){
    //   return this.id;
    // };
    //  this.getEmail = function(){
    //   return this.email;
    // };
     
}


}
module.exports = Employee;