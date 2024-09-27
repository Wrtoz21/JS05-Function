function prime(a)
{
    let primeNumber = true;
    for(let divide =2;divide<a;divide++)
    {
        if (a % divide==0) primeNumber = false;
    }
    if (primeNumber) console.log(a)
}


function printPrime(limit){
    for(let n =2;n<=limit; n++){
        prime(n);
    }
}

printPrime(10)