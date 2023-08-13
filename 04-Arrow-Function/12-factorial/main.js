let fac = (a) => 
{
   if(a==0 || a==1){
    return 1;
   }else{
    return a*fac(a-1);
   }
}
console.log(fac(5))