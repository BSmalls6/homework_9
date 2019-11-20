class employee {
constructor(name, id, title, getName, getId, getEmail, getRole) {
    if (!name) {
        throw new Error("You are missing the name.");
      }
     this.name = name;
     this.id=id;
     this.title=title;
     this.getName = getname();
     this.getId = getId();
     this.getEmail = getEmail();
     this.getRole = getRole();
}

getName() {

}

getId() {

}

getEmail(){

}

getRole(){

}
    
}
module.exports = employee;