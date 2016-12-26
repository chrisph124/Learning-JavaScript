/**
 * Created by chris on 27/12/2016.
 */

// if else dùng để kiểm tra một mệnh đề nào đó có đúng hay không (true/false)
// Đúng thì thực thi những câu lệnh bên trong và ngược lại nếu sai thì nó sẽ bỏ qua những câu lệnh đó

// if(condition){ statement }
// condition là điều kiện và phải luôn thỏa 1 trong 2 giá trị true/false

var a = 1;
var b = 1;
if(a == b){
    console.log(" a bằng b");
}

// có thể bỏ cặp nhọn nếu if là 1 câu lệnh đơn.

// Lệnh else sẽ được thực thi nếu lệnh if không thỏa, khi dùng lệnh else thì BẮT BUỘC phải có một lệnh if trước nó.

var c = 12;
var d = 10;

if (c == d){
    console.log('a và b bằng nhau');
}
else{
    console.log('a và b khác nhau');
}

// Có thể kết hợp nhiều lệnh if/else với nhau để xét nhiều trường hợp

var q = 12;
var e = 15;
if (q > e){
    console.log('q lớn hơn e');
}
else if (q < e){
    console.log('q nhỏ hơn e');
}
else{
    console.log('q bằng e');
}

// Các cặp if-else có thể lồng nhau được

var t = 20;
if(t == 20){
    console.log("t bằng 20");
    var y = 25;
    if(t > y){
        console.log("t lớn hơn y");
    }else if(t < y){
        console.log("t nhỏ hơn y");
    }else{
        console.log("t bằng y");
    }
}else{
    console.log("t không bằng 20");
}