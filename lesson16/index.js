let counter = 0;
while (counter <= 10) {
    console.log("Counter : ", counter);
    counter++;
}
//----------------------
// اعداد زوج
let counter2 = 0 ;
while(counter2 <= 10) {
    if (counter2 % 2 == 0) {
        console.log("It's even : ", counter2);
    } else {
        console.log("It's odd : ", counter2);
    }
    counter2 ++;
}
 counter2 = 0 ;
while(counter2 <= 10) {
    
    console.log("It's even : ", counter2);
    
    counter2 = counter2 + 2 ;
}
//-------------------------------------
//بدست آوردن تعداد مقسوم علیه های یک عدد
let input = 15 ;
counter = 0 ;
while (counter <= input) {
    if (input % counter == 0) {
        console.log(counter);
    }
    counter++ ;
}
//--------------------------------
//تشخیص کامل بودن یک عدد
input = 6 ;
let jam = 0 ;
counter = 0 ;
while(counter < input) {
    if (input % counter == 0) {
        jam = jam + counter ;
    }
    counter++;
}
if ( jam == input) {
    console.log("Perfect Number : ", jam);
} else{
    console.log("NOOOOOOO !!");
}
//-------------------------------
// تشخیص عدد اول
input = 9 ;
let temp = 0 ;
counter = 0;
while (counter<=input) {
    if (input % counter == 0) {
        temp++ ;
    }
    counter++ ;
}
if (temp == 2) {
    console.log("Adade Aval : ",input);
} else{
    console.log("NO AVAL !!");
}
//----------------------------------------------------------

let index = 0 ;
do {
    console.log("Index : ", index);
    index++ ;
} while (index <= 10)  

// اعداد زوج
let counter3 = 0 ;
do {
    if (counter3 % 2 == 0) {
        console.log("It's even : ", counter3);
    }
    counter3 ++ ;
} while(counter3 <= 10)

//بدست آوردن تعداد مقسوم علیه های یک عدد
input = 15 ;
counter = 0 ;
do {
    if (input % counter == 0) {
        console.log(counter);
    }
    counter++;
}while(counter<=input)

//--------------------------------
//تشخیص کامل بودن یک عدد
input = 6 ;
jam = 0 ;
counter = 0 ;
do {
    if (input % counter == 0) {
        jam  = jam + counter;
    }
    counter++;
} while(counter<input)
if (jam == input) {
    console.log("Perfect Number : ", jam);
} else{
    console.log("NOOOOOOO !!");
}
//-------------------------------
// تشخیص عدد اول
input = 23 ;
temp = 0 ;
counter = 0;
do {
    if(input % counter == 0) {
        temp ++;
    }
    counter++ ;
}while(counter <= input)

if (temp == 2) {
    console.log("Adade Aval : ",input);
} else{
    console.log("NO AVAL !!");
}