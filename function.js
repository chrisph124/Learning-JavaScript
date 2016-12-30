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


// Giá trị mặc định của tham số
// Trong 1 số trường hợp, tham số có thể được truyền vào hoặc không cần truyền đều được
// Lúc này chỉ cần sử dụng nó như 1 tham số mặc định
// Trong Javascript không có cú pháp gán giá trị mặc định nên thay vào đó, dùng toán tử ||

function Msg(message){
  message = message || "Không có tin nhắn";
  console.log(message);
}

Msg();
Msg("tin nhắn : bla bla bla");


//Toán tử || gồm hai vế, trong đó nếu vế phải có giá trị rỗng (undefined, null, false, ...) kết quả sẽ trả về vế trái, ngược lại nó sẽ trả về vế phải.

//Ví dụ kiểm tra năm trong các tạo hàm function

function kiem_tra_nam_nhuan(nam){
  if(nam % 100 == 0){
    if(nam % 400 ==0){
      return true;
    }else{
      return false;
    }
  }else if(nam % 4 == 0){
    return true;
  }else{
    return false;
  }
}
var nam = 2020;
var kiemtra = kiem_tra_nam_nhuan(nam);
if (kiemtra) {
  console.log( nam + " là năm nhuận");
} else {
  console.log( nam + " không phải năm nhuận");
}
