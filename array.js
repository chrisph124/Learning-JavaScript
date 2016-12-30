//Array : Mảng
//Có 2 cách để khai báo 1 mảng :
// 1 : sử dụng từ khóa new Array(); với A viết hoa
// 2 : sử dụng dấu ngoặc vuông [ ]
var array1 = new Array(1,2,3);
var array2 = [4,5,6];
console.log(array1 + " " + array2);

//Có thể lấy được từng phần tử trong mảng
console.log(array1[1]);
console.log(array2[2]);

//Trong mảng, giá trị đầu tiên được hiểu là 0 chứ ko phải bắt đầu là 1
//Nếu các phần tử được gọi là n thì thứ tự các phần tử luôn là n-1

// 1 số ví dụ về mảng
var mang1=["a","b","c"]
for (var i = 0; i < mang1.length; i++) {
  mang1[i]
}
console.log(mang1);
//-----------
var mang2 = ["a",1,"b",2,"c",3];
var num = 0;
while(num < mang2.length){
  console.log(mang2[num]);
  num++;
}
//---------
var mang3 = ["q",1,"w",2,"e",3,"r","t","y"];
var num3 = 0;
do {
  console.log(mang3[num3]);
  num3++;
} while (num3 < mang3.length);

//Trong 3 trường hợp trên
//Vòng lặp for là được dùng nhiều nhất và hữu ích nhất để lặp mảng
//Khuyến cáo ko nên dùng do-while vì tính chất luôn lặp ít nhất 1 lần
//khi đó mảng cần lặp mang giá trị rỗng thì sẽ báo lỗi
