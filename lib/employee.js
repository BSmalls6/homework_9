class Employee {
constructor(name, id, role, email, getName, getId, getEmail, getRole) {
    if (!name) {
        throw new Error("You are missing the name.");
      }
     this.name = name;
     this.id=id;
     this.role=role;
     this.email=email;
     this.getName = function(){
       return this.name;
     };
     this.getId = function(){
      return this.id;
    };
     this.getEmail = function(){
      return this.email;
    };
     this.getRole = function(){
      return this.title;
    };
}


}
const newGuy = new Employee(response)
module.exports = Employee;