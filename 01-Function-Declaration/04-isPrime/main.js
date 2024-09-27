function primeNumber(a)
{
    let Prime = true; 
    for(let divide =2;divide< a ;divide++)
    {
        if ( a % divide == 0) {Prime = false;}
    }
    if (Prime) alert((a)+' is Prime number')
    else{alert((a)+' is not Prime number')}
}

let number = +(prompt());
primeNumber(number)