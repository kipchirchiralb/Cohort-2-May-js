// a method is a function attached to an object/ a function that s a value of an object

let user = {
    email: "albert@eldohub.co.ke",
    age: 28,
    sing: function singing(){
        console.log("Leo ni kufinish kumalo!!");
        console.log("Leo ni kufinish kumalo!!");
        console.log("Leo ni kufinish kumalo!!");
    },
    log: function logging(content){
        console.log("Logging: "+ content);
    }
}
user.sing()

// sing is a method for the object user. 


// in js almost everything is an object. 

// js data types- string, number and array , have methods built into their global objects String, Number,Array that allow for manipulation of this data
// exmaple: string method-> charAt(index)

// EXPLORE  String methods and Array Methods in jss