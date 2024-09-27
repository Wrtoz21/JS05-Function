{
    // GOLBAL SCOPE
    let message = 'hi';
    
    function sayHi()
    {
        let message = 'hello';
        console.log(`${message}`)
    }
    sayHi();
    console.log(message);
}