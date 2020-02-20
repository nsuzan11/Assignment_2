//let j=alert(prompt("Enter the number of country name to be entered:"));
//This is the program to check the longest name of the 3 countries entered by the user
// import java.util.Scanner; 
// class Demo { 
// 	public static void main(String args[]) { 
// 		String s; 
// 		Scanner sc = new Scanner(System.in);
//  		System.out.println("Enter a string"); 
//  		s = sc.nextLine();  
// 		System.out.println("You entered String "+s);
//  	} 
// }
let arr1=['nepal','USA',"iran"];
// for (let n=0;n<3;n++)
// {
//     arr1[n]=prompt("Enter the country name");
// }
if(arr1[0].length > arr1[1].length && arr1[0].length>arr1[2].length)
{
    console.log(`The longest name is:${arr1[0]}`);
}
else if(arr1[1].length > arr1[0].length && arr1[0].length>arr1[2].length)
{
    console.log(`The longest name is:${arr1[1]}`);
}
else {
    console.log(`The longest name is:${arr1[2]}`);
}
