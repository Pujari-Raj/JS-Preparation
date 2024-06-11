const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Swepson"
tinderUser.isLoggedIn = true

console.log(tinderUser);

const regularUser = {
    email: "Swepson@hindi.com",
    fullname: {
        userfullname: {
            firstname: "Mike",
            lastname: "Swepson"
        }
    }
}

// console.log(regularUser?.fullname?.userfullname?.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2 };
// console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} // spread-operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "mike@gmail.com"
    },
    {
        id: 2,
        email: "hike@gmail.com"
    },
    {
        id: 3,
        email: "tike@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checks whether it has object named as isLoggedIn

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Swepson"
}

// course.courseInstructor

// destructing the object
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
