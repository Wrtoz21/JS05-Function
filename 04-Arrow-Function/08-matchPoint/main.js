let checkFootballPoint = a =>
{
    if( a === 'Win')
    {
        return ('You got 3 point')
    }
    else if (a === 'Draw')
    {
        return ('You got 1 point')
    }
    return ('You got 0 point')
}

console.log(checkFootballPoint('Win'))