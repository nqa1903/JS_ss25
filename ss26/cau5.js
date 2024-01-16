let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
// cach 1 : dung reverse va slide => khong lam thay doi mang goc
var newArray = array.slice().reverse();
// for(let i = array.length -1 ; i >= 0 ; i--){
//     newArray.push(array[i]);
// }
console.log(newArray);