// Bài tập tìm số Min và Max trong tất cả các số người dùng nhập vào

// Tạo 2 biến Min và Max để lưu giá trị nhỏ nhất - lớn nhất
var min = null;
var max = null;
// Tạo biến giá trị người dùng nhập vào
var value = "";

// Chạy vòng lặp while với điều kiện giá trị người dùng nhập vào khác null
// Trong khi người dùng chưa nhấn hủy thì vòng while vẫn chạy vì điều kiện vẫn khác null
// Null sẽ xuất hiện nếu người dùng nhấn hủy, lúc đó vòng lặp dừng
while (value != null) {
  // Xuất ra 1 prompt để hướng dẫn người dùng nhập giá trị
  value = prompt("Nhập 1 số bất kì, nếu muốn nhập tiếp bấm ok, nếu muốn dừng bấm hủy");
  // Kiểm tra điều kiện nếu giá trị người dùng nhập vào khác null
  if (value != null) {
  // Kiểm tra tiếp nếu người dùng chỉ nhập 1 giá trị hoặc các giá trị nhập vào bằng nhau
  // Lúc này sẽ hiểu là không có giá trị nhỏ nhất hoặc lớn nhất nên điều kiện == null là biến max hay min đều được
  // Khi đó ta cho 2 giá trị min và max cùng = value
    if (min == null) {
      min = value;
      max = value;
    }
  // Ngược lại nếu có các giá trị khác khau để có thể so sánh tìm ra min và max
  // Thì sẽ kiểm tra tiếp để tìm ra min - max
  // Điều kiện để tìm ra min - max sẽ được hiểu là :
    else {
        if (min > value) {
          min = value;
        }
        if (max < value) {
          max = value;
            }
        }
    }
}

document.write("Min là : "+ min + " " + "Max là : " + max);
