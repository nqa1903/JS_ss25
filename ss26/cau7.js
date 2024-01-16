var array = [1,5,6,3,2,1,1,5,6,7];
var input = +prompt("Nhap so nguyen bat ky : ");
var found = false;
for(let start = 0 ; start < array.length ; start++){
    let sum = 0;
    for(let end = start ; end < array.length ; end++){
        sum += array[end];
        if(sum === input){
            let foundArray = array.slice(start, end+1);
            console.log(`Mang con dau tien co tong bang ${input} la ${foundArray}`);
            found = true;
            break;
        }
    }
    if(found){
        break;
    }
}
if(!found){
    console.log("Khong co mang con thoa man");
}