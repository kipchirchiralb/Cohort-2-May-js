let listOne = ["albert", "kevin", "jones"]


// by declaring an array- we automatically inherit methods and properties from the built-in Array Object in Javascipt
// example = .length, .pop() , .push(argument) , ..........

console.log( listOne.length );

console.log(listOne);
// console.log(listOne.includes("albert"));
// console.log(listOne.includes("stella"));

function checkPresence(name){
    if(listOne.includes(name)){
        console.log(name + " is present");
    }else{
        console.log(name + " is absent");
    }
}
checkPresence("stella")
checkPresence("jones")

let county = "Fungoma"

console.log( county.length );
console.log( county );
