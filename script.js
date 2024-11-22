//Task1
const arr=[1,2,3,2,5,3,2,8,3,2,1];
function CalculateSumAndAvg(){
    let avg=0;
    let sum=0;
    sum =arr.reduce((acc,e)=>
        acc+e,0
    )
    avg= arr.length>0 ? sum/arr.length:0 ;

    return {avg:avg,sum:sum} ;

       
    
  

}
console.log(CalculateSumAndAvg());

//remove duplicates(Task2)
let arr2=["a","b","a","c","d","e","f","a","m"];
let uniqueArr=[...new Set(arr2)];
console.log(uniqueArr);