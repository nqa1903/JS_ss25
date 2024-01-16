var a = prompt("Nhap vao so a ");
var b = prompt("Nhap vao so b ");
var array = [];
if (a > b) {
    var temp = a;
    a = b;
    b = temp;
}
for(var i = 1; i < a ; i++){
    if( i % b == 0){
        array.push(i);
    }
}
console.log(array);