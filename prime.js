//prime -> if any number is not equal to 1 and is not divided any number except 1 and its number

// 2, 3, 5, 7, 11, 13,...

function prime(n) {
    if(n===1){
        return false;
    }
    else if(n===2){
        return true;
    }
    else{
        for(var x=2; x<n; x++){
            if(n%x===0){
                return true;
            }
        }
    }
}
// = -> assign --- x = 5
// == -> check ---x ==5
// === -> type check ---x===5

console.log(prime(1))