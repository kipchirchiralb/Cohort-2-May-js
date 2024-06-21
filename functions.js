// a function is  a reusable block of code. 
likeVideo("kenan",6662727281) /// hoisting
// definit the function
function greet(user){
    // user-- an argument
    // {} -- block -- 
    console.log("hi there "+user);
}

// calling/using/invoking the function
greet("albert")
greet("victor")
greet("stella")
greet(99)

// functions can have no arguments, one or more arguments
function closeTab(){
    console.log("closing tabbbbb!!");
    console.log("Completed!!");
}
//call
closeTab()
closeTab()
closeTab()
closeTab()
closeTab()

function likeVideo(username,videoID){
    // db, owner notified,ui
    console.log("User "+ username);
    console.log("is");
    console.log("Liking "+ videoID);
}

likeVideo("albertkip",3553332)
likeVideo("tony",3553332)

// arrays, objects, function