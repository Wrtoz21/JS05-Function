function isPrime(num) {
    for (let d = 2; d < num; d++) {
        // console.log(d);
        if (num % d == 0) {
            return false;
        }
    }

    return true;
}