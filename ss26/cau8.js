let length = +prompt("Nhap chieu dai cua hinh chu nhat: ");
let width = +prompt("Nhap chieu rong cua hinh chu nhat: ");
let a = length;
let b = width;
while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
}
const commonFactor = a;
const squareSize = commonFactor;
const minimumSquares = Math.pow((length / squareSize) + (width / squareSize), 2);
console.log(`Kich thuoc hinh vuong: ${squareSize}`);
console.log(`So luong hinh vuong toi thieu co the cat duoc: ${minimumSquares}`);
