// 0,1,1,2,3,5,8,13,21,...


function fibonacci(num){
    var fibo = [0,1];

    for(var i=2; i<num; i++){
        fibo[i] = fibo [i-1] +fibo [i-2];
    }
    return fibo;
}

// console.log(fibonacci(13))

//recursive

function recursiveFibonacci(num){
    if(num==0 || num==1){
        return 1;
    }
        else{
            recursiveFibonacci(num-1) + recursiveFibonacci(num-2)
        }
   
}

console.log(recursiveFibonacci(5))