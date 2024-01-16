let arrs = [1, 2, 3, 4, 5, "a", "b", "c", "d"];
let flag = 0;
for (arr of arrs) {
    if (!isNaN(arr)) {
        flag = 1;
        break;
    }
}
if (flag === 1) {
    console.log(arrs);
} else {
    console.log("Trong mang khong co so nguyen");
}
