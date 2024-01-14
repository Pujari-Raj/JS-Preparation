// object literal

const user = {
  username: "raghu",
  loginCount: 2,
  signedIn: false,

  getUserDetails: function () {
    //console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    // console.log(this);
  },
};

// check why does it gives undefined when use below line
/**
 * It gives undefined in the console is because the getUserDetails method of the user object doesn't explicitly return any value. In JavaScript, if a function doesn't have a return statement or if it explicitly returns undefined, it will return undefined by default.
 * add this below given line inside function
 * return this.username; // or any other value you want to return ***
 *
 */
// console.log(user.getUserDetails());
// user.getUserDetails();

function User(username, loginCount, IssignedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = IssignedIn;

  return this;
}

/** IMPORTANCE OF USING NEW KEYWORD
 * The new keyword ensures that a new object is created and this refers to that new object within the constructor.
When you use new, the constructor implicitly returns the newly created object, and user1 will be correctly assigned that new object.
 */
const user1 = new User("raghu", 12, true);
console.log(user1);
const user2 = new User("ram", 2, false);
console.log(user2);
