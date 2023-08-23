console.log(!!5);
console.log(!!0, !!-12);
console.log(!!'',!!``,!!"",!!"0",!!" ",!!"-123", !!"hi");
console.log(!!false,!!true) ;
console.log(!!null,!!undefined);

//  falsy مقادیر

console.log(!!null, !!undefined, !!"", !!0, !!false, !!-0, !!0n, !!NaN);
console.log(!![],!!{}); //truthy

//---------------------------------
console.log(
    true == true,
    true == false,
    true == 0,
    true == '',
    true == null,
    true == undefined,
    true == NaN,
    true == Infinity,
    true == [],
    1 == [1], //true
    true == {}
    );
    //
    //
    console.log(
      // true همه
        false == 0,
        null == undefined,
        [] == false,
        !![0] == true
    );
    //
    //
    console.log(
        // false همه
          false === 0,
          null === undefined,
          [] === false,
          !![0] === true   //true این فقط
      );
      //
      //
    console.log(
        // false همه
          false == null,
          false == undefined,
          NaN == NaN,
          Infinity == true,
          [] == true,
          [0] == true   
      );


      //
    if (true == true) {
        
    } else {
        
    }
    
    
    