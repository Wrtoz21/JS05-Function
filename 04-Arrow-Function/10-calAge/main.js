let checkDay = (year) =>
{   nowYear = 2020;
    DayOfYear = 365;
    let leapCheck = nowYear - year;
    if (leapCheck % 4 ==0) 
    {
        DayOfYear = 366;
    }
    return((nowYear - year) * DayOfYear)
}
console.log(checkDay(2015))