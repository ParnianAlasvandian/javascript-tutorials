// Try - Catch - Finally

let input = '  212     ' ; 
try {
    // myValue ;
    // allert("dgdg") ;
    //throw "email is invalid !"
    if(input.trim() == "") throw "input is empty !" ;
    if(isNaN(input)) throw "this input is not a number." ;
    input = Number(input) ;
    if(input < 5) throw "the number is lower than 5."
    if(input > 10) throw {message :"the number is bigger than 10.", code : 101}

    function foo(){

    }
    fooo() ;
} catch (error) {
    //console.log(error.message);
    //alert(error) ;

    if (typeof error == "object" && "message" in error) {
        alert(error.message) ;
    } else if(typeof error == "string") {
        alert(error) ;
    } else {
        alert("something is wrong.")
    } 
} finally {
    console.log("Finally is executed.");
}