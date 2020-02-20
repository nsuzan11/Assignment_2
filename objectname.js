class person{
    constructor(first_name,last_name){
        this.first_name=first_name;
        this.last_name=last_name;
    }
    printname(){
        console.log(`My name is ${this.first_name} ${this.last_name}`);
    }
}
var p1=new person('Himal','Neupane');
console.log(p1.printname());