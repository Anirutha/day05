//1. Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array
//Ans:
//Anonymous function:
//Input:
var numbers=[11,12,13,14,15,16];
var foo=function (arr){
   var odd=[];
   for(var i=0;i<arr.length;i++){
       if(arr[i]%2!==0){
           odd.push(arr[i]);
       }
   }
    return odd;
};
console.log(foo(numbers));
//Output:
[ 11, 13, 15 ]
//IIFE:
//Input:
var arr = [11,12,13,14,15,16];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 != 0) {
 console.log(arr[i]);
 }}
})();
//Output:
11
13
15
//b. Convert all the strings to title caps in a string array
//Ans:
//Anonymous function:
//Input:
var foo=function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
   }
    return str.join(' ');
  };
  console.log(foo("WELCOME TO W3DOCS"));
//Output:
//Welcome To W3docs
//IIFE:
//Input:
(function () {
    var fun="hey how are you?";
    var word =fun.toUpperCase();
    console.log([word]);
})();
//Output:
[ 'HEY HOW ARE YOU?' ]
//c. Sum of all numbers in an array
//Ans:
//Anonymous function:
//Input:
var numbers=[12,13,14,25,36];
var foo=function(arr){
    let sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
};
console.log(foo(numbers));
//Output:
100
//IIFE:
//Input:
var arr=[12,13,14,25,36];
(function() {
    let sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
})();
    console.log(sum);

//Output:
100
//d. Return all the prime numbers in an array
//Ans:
//Anonymous function:
//Input:
var foo=function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
};
console.log(foo(5));
//Output:
[ 2, 3, 5 ]
//IIFE:
//Input:
(function (l,r)
{
    let arr = [];
    for (i=l;i<r;i++)
    {
        arr.push(i);
    }
arr = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
    console.log(arr);
})(10,20);
//Output:
[ 11, 13, 17, 19 ]
//e.Return all the palindromes in an array
//Ans:
//Anonymous function:
//Input:
var str=("car","racecar");
var foo=function palindrome(str) {
    let len = str.length;
    for(var i=0;i<len/2;i++){
        if(string[i] !=string[len-1-i]){
           return "It is not a palindrome";
        }
    } 
    return "It is a palindrome";
};
console.log([str + " " +"is a palindrome"]);
//Output:
[ 'racecar is a palindrome' ]
//IIFE:
//Input:
(function(){
    var string =("car","racecar");
    var len=string.length;
    for(var i=0;i<len/2;i++){
        if(string[i] !=string[len-1-i]){
            console.log("It is not a palindrome");
        }
    }
    console.log([string + " " +"is a palindrome"]);
})();
//Output:
[ 'racecar is a palindrome' ]
//f. Return median of two sorted arrays of the same size.
//Ans:
//Anonymous function:
//Input:
var getMedian=function(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 return (m1 + m2)/2;
};
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");
    //Output:
    //Median is 16 
    //IIFE:
    //Input:
    (function()
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 return (m1 + m2)/2;
});
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");
//Output:
//Median is 16 
//g. Remove duplicates from an array
//Ans:
//Anonymous function:
//Input:
var arr = ["apple", "mango", 
        "apple", "orange", "mango", "mango"];
  
    var removeDuplicates=function (arr) {
        var unique = [];
        for(i=0; i < arr.length; i++){  
            if(unique.indexOf(arr[i]) === -1) {  
                unique.push(arr[i]);  
            }  
        }
        return unique;
    };
    console.log(removeDuplicates(arr));
    //Output:
    //[ 'apple', 'mango', 'orange' ]
    //IIFE:
    //Input:
    ( function(){
        const amarArray = [1, 1, 2, 3, 4, 5, 5];
        
        const amarArrayWithoutDuplicates = [...new Set(amarArray)];
        
        let duplicates = [...amarArray];
        amarArrayWithoutDuplicates.forEach((item) => {
          const i = duplicates.indexOf(item);
          duplicates = duplicates
            .slice(0, i)
            .concat(duplicates.slice(i + 1, duplicates.length));
        });
        
        console.log(duplicates);
        }) () ;
        //Output:
        //[ 1, 5 ]
        //h. Rotate an array by k times
        //Ans:
        //Anonymous function:
        //Input:
        var rotateArray2 = function(nums, k) {
            function reverse(arr, start, end) {
                while (start < end) {
                  [arr[start], arr[end]] = [arr[end], arr[start]];
                  start++;
                  end--;
                }
              }
            
              k %= nums.length;
            
              reverse(nums, 0, (nums.length - 1));
              reverse(nums, 0, (k - 1));
              reverse(nums, k, (nums.length - 1));
            
              return nums;
            };
            nums = [1, 2, 3, 4, 5];
            k = 2;
            console.log(rotateArray2(nums,2));
            Output:
            [ 4, 5, 1, 2, 3 ]
            //IIFE:
            //Input:
            (function(nums, k) {
                function reverse(arr, start, end) {
                    while (start < end) {
                      [arr[start], arr[end]] = [arr[end], arr[start]];
                      start++;
                      end--;
                    }
                  }
                
                  k %= nums.length;
                
                  reverse(nums, 0, (nums.length - 1));
                  reverse(nums, 0, (k - 1));
                  reverse(nums, k, (nums.length - 1));
                
                  console.log(nums);
                });
                nums = [1, 2, 3, 4, 5];
                k = 2;
                console.log(nums,2);
                Output:
                [ 4, 5, 1, 2, 3 ]

                //3. Do the below programs in arrow functions.
                //a. Print odd numbers in an array
                //Ans:
                //Input:
                var numbers=[11,12,13,14,15,16];
                var foo=(arr)=>{
                var odd=[];
                for(var i=0;i<arr.length;i++){
                if(arr[i]%2!==0){
                odd.push(arr[i]);
                }
                }
                return odd;
                };
                console.log(foo(numbers));
                //Output:
                [ 11, 13, 15 ]
                //b. Convert all the strings to title caps in a string array
                //Ans:
                //Input:
                var foo=(str)=> {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
                   }
                    return str.join(' ');
                  };
                  console.log(foo("WELCOME TO W3DOCS"));
                  //Output:
                  //Welcome To W3docs
                  //c. Sum of all numbers in an array
                  //Ans:
                  //Input:
                  var numbers=[12,13,14,25,36];
                  var foo=(arr)=>{
                  let sum=0;
                  for(var i=0;i<arr.length;i++){
                  sum=sum+arr[i];
                  }
                  return sum;
                  };
                  console.log(foo(numbers));
                  //Output:
                  //100
                  //d. Return all the prime numbers in an array
                  //Ans:
                  //Input:
                  var foo=(max)=>
                  {
                  var store  = [], i, j, primes = [];
                  for (i = 2; i <= max; ++i) 
                  {
                  if (!store [i]) 
                  {
                  primes.push(i);
                  for (j = i << 1; j <= max; j += i) 
                  {
                  store[j] = true;
                  }
                  }
                  }
                  return primes;
                  };
                  console.log(foo(5));
                  //Output:
                  [ 2, 3, 5 ]
                  //e. Return all the palindromes in an array
                  //Ans:
                  //Input:
                  var str=("car","racecar");
                  var foo=(str)=> {
                  let len = str.length;
                  for(var i=0;i<len/2;i++){
                  if(string[i] !=string[len-1-i]){
                  return "It is not a palindrome";
                  }
                  } 
                  return "It is a palindrome";
                  };
                  console.log([str + " " +"is a palindrome"]);
                  //Output:
                  [ 'racecar is a palindrome' ]
    

                  


  


