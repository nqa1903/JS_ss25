let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
let find = prompt("Nhap phan tu muon tim: ");
let found = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] === find) {
        found = true;
        console.log(`Phan tu ${find} co trong mang`);
        break;
    }
}

if (!found) {
    console.log(`Phan tu ${find} khong co trong mang`);
}
