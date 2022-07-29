function getFee(a) {
    return (a ? a > 0 : a < 0 );
  }
  
  console.log(getFee(5));
  // expected output: "$2.00"
  
  console.log(getFee(-5));
  // expected output: "$10.00"
  
  console.log(getFee(0));
  // expected output: "$10.00"
  