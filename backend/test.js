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


/// sorting via loop decendng

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j]<arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}

console.log(arr);

/// sorting via loop accending
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}

console.log(arr);