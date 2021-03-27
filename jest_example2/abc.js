
  for (var i = 1; i < 5; i++) {
    console.log(i)
    
    setTimeout(function () {
        console.log(i)
      }, 1000)
  };
  let array = [1,7,98,21,5,4,2]

  // ES5 way
//   var moreThan20 = array.filter(function (num) {
//     return num > 20
//   })
  
  // ES6 way

  let moreThan20 = array.filter(num => num > 20)
  
  console.log(moreThan20);


  let scores = ['98', '95', '93', '90', '87', '85']
  let [first, second, ...rest] = scores
  
  console.log(first) // 98
  console.log(second) // 95
//   console.log(third) // 93
  console.log(rest) // [90, 87, 85]
  
//   const button = document.querySelector('button')
// button.addEventListener('click', function(e) {
//   // Adds clicked class to button
//   this.classList.add('clicked')
// })


//call back function
const num1=[1,2,3,5,8,7];

const gretherthenfive= num1.filter(num=>num>5 );
console.log(gretherthenfive);


// this is example fo call back function
const ex1= (fn)=>{
    return fn(2,4,6)
}
const ex2=(arg1, arg2, agr3)=>{
    return arg1+arg2+agr3
}

const result=ex1(ex2)
console.log(result);