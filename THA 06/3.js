var arr=[7, 9, 0, -2];
var n=0;



function check(arr,n){
    if(n<0)
    return[];

    if(n==null)
    return arr[0]

    var ans = arr.slice(0,n);
    return ans;
}
console.log(check([7, 9, 0, -2]));
console.log(check([7, 9, 0, -2],-3));

