function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

console.log(greeter(user)); //Correct usage: passing a string

//Alternative solution: Modify the function to accept an array of strings
function greeter2(people: string[]) {
    return "Hello, " + people.join(", ");
}

let users = ["Jane User", "John Doe"];
console.log(greeter2(users)); //Correct usage: passing an array of strings