// local - global variables

let message = "This is a global variable";
 
  function anyThing() {
    console.log("AnyThing : ", message);
    function showMessage() {
        console.log("ShowMessage : ",message);
        function any() {
            let message = "This is a local variable";
            console.log("Any : ", message);
        }
        any(); 
     }
     showMessage();
 }
 anyThing() ;
 
//------------------------------------
 let scope = "scope0";
 {
    let scope = "scope1" ;
    {
        let scope = "scope2" ;
        console.log(scope);
    }
 }