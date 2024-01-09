// if
/**
 * < ==> less than
 * > ==> greater than
 *  <= --> less than equalt to
 *  >= --> greater than equalt to
 *  == --> equal to 
 * != --> not equalto
 *  ===  --> triple equal to , it's used to check variables with same datatype,
 * !== --> not equal equal to
 */

const isUserSignin = false;
const temp =39;

// if (!isUserSignin) // (!isUserSignin == true)
//  {
//     console.log("user is not Signed in");
// }else{
//     console.log("user is  Signed in");
// }

// if (temp === 40) {
//     console.log("temp is <40");
// }else{
//     console.log("temp is > 30");
// }

// const score = 105;

// if ( score <50) {
//     console.log("kya baat hai!");
// }else if(score < 75){
//     console.log("aati utaambh");
// }
// else{
//     console.log("aah!! maza aa gaya!");
// }

const userLoggedIn = true;
const UPI = true;
const age = 18;
const loggedInfrommail = true;
const loggedInfromphone = false;

if (userLoggedIn && UPI && age >=18) {
    console.log("you can buy course");
}else{
    console.log("you cannot buy course");
}

//
if (loggedInfrommail || loggedInfromphone) {
    console.log("logged in successful using  ",loggedInfrommail ? "email": "phone");
}
else{
    console.log("Both login conditions are false");
}