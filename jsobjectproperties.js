//This is the program to print the properties of a fan(JS object)
let js_object={
    speed_rotation:'50rev/min',
    size:9,
    company_name:'Baltra',
    type:'Ceiling'
}
console.log(`The properties of fan(object) are listed below:`);
for(let keys in js_object)
{
    console.log(keys);
}