// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named higherOrder with 3 parameters: x, y and callbackParam
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The higherOrder function should return the invocation of callback, passing x and y into callback as arguments
*/

  
  /* Step 2: Create several functions to callback with consume();
    * Create a function named subtract that returns the difference of two numbers
    * Create a function named division that returns the division of two numbers 
    * Create a function named goodbye that accepts a name and customFarewell param and returns "Goodbye {name}, {customFarewell}!"
  */
  
  
  /* Step 3: Check your work by un-commenting the following calls to consume(): */
  // console.log(higherOrder(2, 2, subtract)); // 0
  // console.log(higherOrder(16, 2, division)); // 8
  // console.log(higherOrder("Mary", "I'll see you tomorrow!", farewell)); // Goodbye Mary, I'll see you tomorrow!
  
  
  // ==== Closures ==== 
  
  // Explain in your own words why nested can access the variables outside and inside.
  
  
  const outside = "I'm outside the function";
  
  function yourFunction() {
    console.log(outside);
    const inside = "I'm inside the function!";
  
    function nested() {
      console.log(outside + " " + inside);
    };
    nested();
  }
  yourFunction();
  