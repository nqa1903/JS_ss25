let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
let find = prompt("Nhap phan tu muon tim : ");
let count = 0;
for(let i = 0 ; i < array.length; i++){
    if(array[i] == find){
        count++;
    }
}
console.log(`So lan xuat hien cua ${find} la ${count} lan`);