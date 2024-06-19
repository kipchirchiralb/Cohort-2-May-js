const user = {
    name: "albert",
    age: 50,
    isKenyan: true,
    schools: ["meteitei","jkuat","mku"],
    work: {
        company: "Eldohub",
        role: "Instructor",
        since: 2022
    },
    siblings: [{name:"Alex",age:31}, {name:"Alfred", age: 25},{name:"Allan", age: 29}],
    height: 5.9,
}

// accessing values in an object ---using dot notation

// print/get albert's age 
console.log( user.age ); // 50
// show if albert is a kenyan

// age of the second sibling
console.log( user.siblings[1].age ); // 25


// alert("hellow there!!")
let choice = confirm("do you really want to continue?")
console.log(choice);