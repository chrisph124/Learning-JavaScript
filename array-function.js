// Các hàm được sử dụng trong mảng, chỉ dùng trong array object
// Vì thực chất mảng(array) cũng là 1 đối tượng(object) trong javascript
// Nên các hàm trong mảng cũng chỉ là 1 phương thức(method)

// 1. array.join()
// có thể dùng để hiển thị phần tử ra trình duyệt
//  join() dùng để truyền vào 1 tham số nào đó, nếu ta không truyền gì cả thì mặc định join() sẽ thêm vào dấu phẩy( ngăn giữa các phần tử khi in ra trình duyệt)
var arr1=["h","e","l","l","o"];
console.log(arr1.join("-"));

// 2. array.valueOf()
// valueOf() lấy giá trị của một biến hoặc một giá trị khác
// Hàm này thực chất không sử dụng nhiều vì thông thường ta lấy giá trị trực tiếp luôn.
var arr2=["Node.js","o","d","e",".","j","s"];
console.log(arr2.valueOf());

// 3. array.pop() - array.push() - array.shift() - array.unshift()
// push() -> thêm 1 phần tử vào cuối mảng ( phải có 1 giá trị truyền vào )
// pop() -> xóa 1 phần tử ở cuối mảng
// shift() -> xóa 1 phần tử ở đầu mảng
// unshift() -> thêm 1 phần tử vào đầu mảng và đẩy các phần tử phía sau lên 1 bậc
var arr3 = [2,3,4];
console.log("arr3 : " + arr3);
arr3.push(5);
console.log("arr3 dùng push thêm phần tử vào cuối mảng : " + arr3);
arr3.pop();
console.log("arr3 dùng pop xóa 1 phần tử ở cuối mảng : " + arr3);
arr3.shift();
console.log("arr3 dùng shift xóa 1 phần tử ở đầu mảng : " + arr3);
arr3.unshift(1,2);
console.log("arr3 dùng unshift thêm phần tử ở đầu mảng : " + arr3);

// 4. array.splice()
// splice() có 3 tham số truyền vào
// spilice(position_add,num_element_remove,value1,value2,...)
// position_add : vị trí sẽ thêm phần tử ( vị trí đầu tiên là 0 )
// num_element_remove : số phần tử sẽ xóa ( vị trí xóa bắt đầu từ position_add )
// value1,value2,... : danh sách các phần tử sẽ thêm vào vị trí position_add và sau khi xóa num_element_remove phần tử
var arr4 = ["Các giá trị gồm có : ",1,2,3,4,5];
console.log(arr4);
arr4.splice(0,1,"Các phần tử trong arr4 bao gồm :");
console.log(arr4);

// 5. array.sort()
// sort() sắp xếp các phần tử trong mảng lại theo thứ tự chữ cái alpha
var arr5 = ["c","e","a","d","b"];
console.log("arr5 chưa dùng sort : " + arr5);
arr5.sort();
console.log("arr5 sau khi dùng sort : " + arr5);

// 6. array.reverse()
// reverse() đảo ngược vị trí các phần tử, phần tử đầu mảng sẽ được đẩy xuống cuối mảng và ngược lại
var arr6 = ["Vị","trí","chưa","đảo","ngược"];
console.log(arr6);
arr6.reverse();
console.log(arr6);

// 7. array.concat()
// concat() nối 2 mảng với nhau và trả về 1 mảng với tổng số giá trị phần tử của 2 mảng đó
var arr7 = ["Phần","tử","mảng","arr7"]
var arr8 = ["Phần","tử","mảng","arr8"]
console.log(arr7+arr8);
var arr78 = arr7.concat(arr8);
console.log(arr78);

// 8. array.slice()
// slice() để lấy 1 số phần tử nào đó trong mảng
// slice() có 2 tham số truyền vào được hiểu như là slice(start,end)
// start : vị trí bắt đầu - phần tử đầu tiên được tính là 0
// end : vị trí kết thúc - phần tử đầu tiên được tính là 1
// nếu muốn lấy từ 1 vị trí nào đó đến cuối mảng thì chỉ cần truyền vào 1 tham số start thôi
var arr9 = ["A","r","r","a","y"]
console.log(arr9);
var noi_arr9 = arr9.slice(1,4);
console.log(noi_arr9);
