function showMessage(text="Empty Message. ") {
    //if ( text === undefined){
    //if(!text){
    //  text = "Empty message. " ;
    //}

    //text = text || "Empty message." ; 
    
    //text = text ?? "Empty message." ;
    alert(text);
}
showMessage();

function anything() {
    for (let index = 0; index <= 20; index++) {
         if(index %5 == 0) continue ;
         console.log(index);
         if (index%11==0) break ;
    }
}

function anything2() {
    nextPrime :for (let index = 2; index <= 20; index++) {
         for (let counter=2 ; counter < index; counter++) {
            if (index%counter == 0) continue nextPrime ;             
         }
         console.log(index);
    }
}

anything2() ;