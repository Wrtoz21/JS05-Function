// let leapYear = a =>
// {
//     if(a % 4 == 0)
//     {   
//         if(a % 100 ==0)
//         {
//             return(a+'is not leapyear');
//         }
//         return(a+'is leapYear');
//     }
//     return(a+'is not leapyear');
// }
// console.log(leapYear(400))

// const isLeapYear = (year) => {
//     // #1
//     if (year % 4 === 0 && year % 100 !== 0) {
//         return true;
//     } else if (year % 100 === 0 && year % 400 !== 0) {
//         return false;
//     } else if (year % 400 == 0) {
//         return true;
//     } else {
//         return false;
//     }
//     // #2
//     if (year % 400 == 0) {
//         return true;
//     } else if (year % 100 == 0) {
//         return false;
//     } else if (year % 4 == 0) {
//         return true;
//     } else {
//         return false;
//     }
//     // #3
//     if (year % 400 == 0) {
//         return true;
//     }
//     if (year % 100 == 0) {
//         return false;
//     }
//     if (year % 4 === 0) {
//         return true;
//     }
//     return false;
//     // #4
//     if (year % 100 === 0) {
//         // 100,200,300,400,...
//         return year % 400 == 0;
//     }
//     return year % 4 === 0;
//     // #5
//     return year % 100 === 0 ? year % 400 == 0 : year % 4 === 0;
//     };
    
    const isLeapYear = (year) => (year % 100 === 0 ? year % 400 == 0 : year % 4 === 0);