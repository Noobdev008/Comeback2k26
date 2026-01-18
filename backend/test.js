// find maxx and minn
let arr= [2,4,11,1,6]
let max = arr[0]
for(let i =0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
}
console.log(max);

let min = arr[0]
for(let i =0; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i]
        }
}

console.log(min);
