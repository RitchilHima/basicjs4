// 5! = 5*4*3*2*1
// 5! = 5*4*3*2*1

// 12! = 1*2*3*...11*12
// For Loop
function factorial (num){
    let fact =1;
    for(let i=1; i<=num; i++){
        fact*=i;
        // 2  = 1*2
    }
    return fact;
}
let n = factorial(12);
console.log(n)


// While Loop

function whileFactorial(num){
    let p = 1;
    let f = 1;
    while(p<=num){
        // f = f*p
        f*=p;
        p++
    }
    return f;
}
console.log(whileFactorial(4))

// Recursion

function factorize(num){
    if(num<0)
    return -1;
else if(num ==0){
    return 1;
}
else{
    return (num * factorize(num -1))
}
}
console.log(factorize(5))