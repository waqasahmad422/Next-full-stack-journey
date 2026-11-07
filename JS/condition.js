// let color="green";
// if(color=="red"){
//     console.log("Stop");
// }
// else if(color==="yellow"){
//     console.log("wait")
// }
// else if(color==="green"){
//     console.log("Go");
// }
// else{
//     console.log("no signale");
// }

// let size="L";
// if(size==="XL"){ console.log("XL Popcorn price is 250");}
// else if(size==="L"){console.log("L Popcorn price is 200");}
// else if(size==="M"){console.log("M Popcorn price is 100");}
// else{console.log("Small Popcorn price is 50");}


// let str="Ahmad";
// if(str[0]==="a" && str.length>3 || str[0]==="A" && str.length>3){
//     console.log(str+" is a good string")
// }
// else{
//     console.log(str+" is a bad string");
// }

// let num=12;
// if((num%3===0)&&(num+1===15)||(num-1===11)){
//     console.log("safe");
// }
// else{
//     console.log("unsafe");
// }


// let name=prompt("Enter you name");
// let age=prompt("Enter your age");
// console.log(`${name} is ${age} years old.`);

// let num=30;
// if(num%10===0){
//     console.log(`${num} is divisible by 10 tha number is good`);
// }
// else{
//     console.log(`${num} is not divisble by 10 is bad number`);
// }

// let num1=32;
// let num2=345672;

// if(num1%10 === num2%10){
//     console.log("both have same last dgit")
// }
// else{
//     console.log("different");
// }


let quarter="quarter3";
switch(quarter){
    case "quarter1":
        console.log("January, February, March");
        break;
    case "quarter2":
        console.log("April, May, June");
        break;
    case "quarter3":
        console.log("July, August, September");
        break;
    case "quarter4":
        console.log("october, November, December");
        break;
    default:
        console.log("NO other quater in year");
}