
var solution = function(isBadVersion) {
  
    return function(n) {
        
if(n==1) return 1

let low=0

let high=n

let mid=Math.floor((low+high)/2)

while(low <=high){

if(isBadVersion(mid) && !isBadVersion(mid-1)) return mid
    
if(!isBadVersion(mid)) low = mid

else{
    high=mid-1
}
}




    };
};