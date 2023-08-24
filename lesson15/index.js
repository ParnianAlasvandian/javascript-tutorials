for (let counter = 0 ; counter < 10; counter++) {
    console.log("counter : ", counter);
}

for (let num = 0; num <= 30; num++) {
    if (num % 2 == 0) {
        console.log("is even : ",num);
    } else {
        console.log("is odd : ",num);
    }
    
    
}

for (let num = 0; num <= 30; num = num+2) {
    console.log(num);
    
}

//-----------------------------------------------------------

//بدست آوردن تعداد مقسوم علیه های یک عدد
let input = 15 ;
for (let counter = 0; counter <= input ; counter++) {
    if(input % counter == 0) {
        console.log(counter);
    }
}

//-----------------------------------------------------------

//تشخیص کامل بودن یک عدد
let input2 = 28 ;
let jam = 0 ;
for (let counter = 0; counter < input2 ; counter++) {
    if(input2 % counter == 0) {
        jam += counter ;
    }
}
if (jam == input2) {
    console.log("Perfect Number : ", jam);
} else {
    console.log("NO !!");
}

//-----------------------------------------------------------

// تشخیص عدد اول
let input3 = 29 ;
let temp = 0 ;
for (let counter = 0; counter <= input3; counter++) {
     if (input3 % counter == 0) {
        temp ++ ;
     }    
}

if ( temp == 2) {
    console.log("Adade Aval : ",input3);
} else {
    console.log("NO Aval !!");
}
