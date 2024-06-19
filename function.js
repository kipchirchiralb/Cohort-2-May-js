/* declaring af function:there are three methods of declaring a function:
function declaration:funtion name,parameters<function body=>accessed at global level
function expression :a functon declared and stored in a variable:classes,local scope 
arrow function:for ease and expertise accesibility 

naming conventions functions:camelcase,pascal,snake

camelcase:function getName
pascal:function GET_NAME
snake:function get_name
 */


//function declaration
//function name
//parameters
//function block
//function call

/* let firstname="john"
let secondname="Mwangi" */

/* function getName(firstname,secondname){
    return(`${firstname} ${secondname}`)
    

} */
/* getName(firstname,secondname)
 */

function getArea(length,width){
    return(length*width)//value that shhould be returned to the browser
    
}
let length=10;
let width=12;
console.log(length*width)
//function expression
//first have to declare the variables before using them //due to its local scope 
/* let firstname="jenny"
let secondname='kiptoo'

let userName=function getName(firstname,secondname){
    console.log(`${firstname} ${secondname}`)
} */
/* userName(firstname,secondname) */

//arrow function
//the short hand notation to variable naming,used in call back functions,imbedded functions to ease
//simplicity
//the function name is replaced by the arrow symbol which is placed after the parameter brackets and curly braces 
let firstname="jenny"
let secondname='kiptoo'
let age=167
let userName=(firstname,secondname)=>{
    return(`${firstname} ${secondname}`,(age)=>{
        
    })
    
}
console.log("hello");

//use any functional methods to calculate the perimeter of a trinagle
/* tips declare the sides variables */

//calculating perimetr of a triangle
function findPerimeter(side1,side2,side3){
    if(side1<=0||side2<=0||side3<=0){
        console.log("error the sides should be greter than 0");
    }
    let perimeter=side1+side2+side3//formula declaration
    return perimeter;
}

let  side1=30;
let  side2=14;
let  side3=300;

const answer=findPerimeter(side1,side2,side3)
console.log(answer);

function getName(myname,myage){
    return(myname,myage) 
}

myname="peter"
myage=30


let newAge= getName(myname,myage)
console.log(newAge);

//write a function that is used to get data from a person and calculate the area of a cuboid






    
    


``