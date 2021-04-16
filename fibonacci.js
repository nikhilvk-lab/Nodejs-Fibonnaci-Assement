  
   function  fibonacci(n){
    const arr = [0,1];
    let a ,b ;
    
   console.log('Fibonacci Sequence:');

   for (let i = 2; i <= n; i++) {
       a = arr[i - 1];
       b = arr[i - 2];
       arr.push(a+b);
   }
   console.log(arr);
   return arr;

}

module.exports.fibonacci = fibonacci;
    

