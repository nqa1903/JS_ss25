let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
let newArray = [];
let positiveArray = [];
let negativeArray = [];

for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
        negativeArray.push(array[i]);
    }else{
        positiveArray.push(array[i]);
    }
}

negativeArray.sort((a,b) => a - b);
positiveArray.sort((a,b) => a -b);

newArray = negativeArray.concat(positiveArray);
console.log(newArray);