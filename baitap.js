//Tạo 2 biến để người dùng nhập vào
var a = null;
var b = null;
// Biến value lưu giá trị người dùng nhập vào
var value = '';

// While chạy là trong khi người dùng chưa nhấn nút hủy
// Nếu hủy thì giá trị sẽ là null và vòng lặp dùng lại
while (value != null) {
  // Hiện khung nhập để lấy giá trị
    value = prompt ("Nhập số vào đây, nếu muốn dừng thì bấm hủy");
    // Nếu nhấn hủy thì không thực thi code bên trong
      if(value != null){
        if(value == null){
          // Gán min và max = value khi nhập giá trị lần đầu
            min = value;
            max = value;
        }
        else{
          // Nếu ngược lại thì kiểm tra giá trị min - max
            if(min > value){
              min = value;
            }
            if(max < value){
              max = value;
              }
          }
      }
}
document.write("Min là " + min +", Max là " + max);
