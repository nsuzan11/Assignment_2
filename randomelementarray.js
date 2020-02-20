let arr=[10,20,30,40,50];
function randomno(arr){
    return arr[Math.floor(Math.random()* arr.length)];
}
let rand=randomno(arr);
console.log(`The random number from the array is:${rand}`)