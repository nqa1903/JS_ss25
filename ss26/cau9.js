let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
let arrangeArray = array.sort((a, b) => a - b);
let smallest = 1;
for(let i = 0 ; i < arrangeArray.length ; i++){
    if(arrangeArray[i] > 0 && arrangeArray[i].length === smallest){
        smallest++;
    }
}
console.log(smallest);