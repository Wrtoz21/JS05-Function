let func = (prime) =>{
    let aPrime = true;
   for(let divide = 2;divide<prime;divide++)
    {
        if (prime % divide == 0 ) aPrime = false;
        
    }
    if ( aPrime ) {
        return console.log( prime + 'is prime number')
    }
    else {
        return console.log( prime + 'is not prime number')
    }
}
    


func(8)