// TASK 5: Vowel Checker: Create a function that takes a character as input. Use an if-else statement chain (or a series of if-else statements) to check if the character is a vowel (a, e, i, o, u) and return "Vowel" if true. Otherwise, return "Consonant" or "Not a letter" (handle non-letter characters).


function vowelChecker(letter){
    // check if the letter is a vowel -- a,e,i,o,u    -- isNaN
    if(!isNaN(Number(letter))){
        console.log(letter + " is not a letter");
    }else if(letter.length >1){
        console.log("This function only deasl with single letters");
    }else if(letter.toLowerCase()=="a" || letter.toLowerCase()=="e" || letter.toLowerCase()=="i" || letter.toLowerCase()=="o" || letter.toLowerCase()=="u"  ){
        console.log(letter + " is a vowel");
    }else{
        console.log( letter + " is a consonant");
    }
}


vowelChecker("A") // a is a vowel
vowelChecker("k") // k is a consonant

vowelChecker("9") // not a letter
vowelChecker("@") // not a letter -- special characters !#$^%%&^
vowelChecker("B") // B is a consonant

vowelChecker("geo")

