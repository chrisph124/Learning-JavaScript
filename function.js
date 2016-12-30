// Hàm(Function) là 1 khối xử lý rất linh động và tiện dụng trong việc tái sử dụng 1 đoạn code nào đó
// Thay vì code lại từng đoạn code xử lý trong 100, 1000 trường hợp đến 100, 1000 lần, chỉ cần gọi 1 hàm vào là được.
// Hàm(function) gom 1 số đoạn code lại vào 1 khối xử lý để gọi ra khi cần.

// Tạo 1 if-else đơn giản làm ví dụ:

var a = 1;
var b = 2;
if (a>b) {
  console.log("a lớn hơn b")
} else {
  console.log("a nhỏ hơn b")
}

// Tạo 1 function để gom lại ví dụ trên để làm được nhiều phép so sánh hơn

//function : là từ khóa của javascript nên bắt buộc phải viết đúng
//so_sanh_ab : là tên của function, có thể đặt bất cứ tên gì cũng được
//(a,b) : a và b trong ngoặc đơn là các tham số truyền vào


function so_sanh_ab(a,b){
  if (a>b) {
    console.log("a lớn hơn b")
  } else {
    console.log("a nhỏ hơn b")
  }
}

// làm phép so sánh bằng function với 4 ví dụ khác nhau
so_sanh_ab(1,2);
so_sanh_ab(2,1);
so_sanh_ab(8,9);
so_sanh_ab(10,5);


// Function return và Function không return
// Hàm có return được sử dụng từ khóa return ở cuối hàm mục đích để sử dụng tiếp kết quả trả về ở những đoạn code bên ngoài hàm
// Hàm không có return thì ngược lại ... thế thôi :D


function tinh_tong(a,b){
  return a+b;
}

var tong = tinh_tong(1,2);
console.log("Tổng là : " + tong);


function tinh_hieu(a, b)
{
    console.log('Hiệu là : ' + (a + b));
}

var so1 = 1;
var so2 = 2;
tinh_hieu(so1, so2);

// Tùy trường hợp mà dùng return hay không return.
// Return chỉ sử dụng khi muốn lấy kết quả trả về để xử lý tiếp
