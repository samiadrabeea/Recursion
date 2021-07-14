// Recursion 
/* --------------------------------------
Recursion is a method of solving problems that can be broken down in to smaller ,
 its good for working on problems that have many branches and too complex for an iterative approach . */


 /* here some examples about recursion*/

 /*----------example #1 : double list of  numbers  -------------*/
// make array with length n contains double of the numbers start from num; 
 function arrayDoubleofNumbers(num,n,arr){
     arr.push(2*num);
     n=n-1;
     if(n!==0){
       arrayDoubleofNumbers(num-1,n,arr)  ;
     }
    return arr;
 }

 let arr=[];
 console.log(arrayDoubleofNumbers(5,4,arr));

 /*----------example #2 : computing the Fibonaccia sequence  -------------*/
 // make each subsequent number is the sum of the previous two numbers 
 // F{n}=F{n-1}+F{n-2};

 function fibonaccia(num){
     if (num<=1){
         return num;
     }
     return fibonaccia(num-1)+fibonaccia(num-2);
 }

 console.log(fibonaccia(8));

  /*----------example #3 : Array flaten function  -------------*/
// function take a nested array and return one array [[1,2,3],[1,[1]]] return [1,2,3,1,1]
function arrayFlaten (array) {
  let FlatArr=[];
  for(let i=0;i<array.length;i++){
      if(Array.isArray(array[i])){
      arrayFlaten (array[i]) ;
      }else{
        FlatArr.push(array[i]);
      }
  }
  return FlatArr;
}

console.log(arrayFlaten([[1,2,3],[1,[1]]]));


 /*----------example #4 : Factorial function  -------------*/
// finding factorial of number 
function factorialNumber(num){
  if (num===0){
    return 1;
  }else{
    return num*factorialNumber(num-1);
  }
}

console.log(factorialNumber(3));


