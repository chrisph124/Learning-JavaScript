// Vòng lặp while và do while dùng để lặp khi không biết chính xác số lần lặp và điều kiện dừng phức tạp
// Khi lặp while và do while cực kì dễ bị LẶP VÔ HẠN nên cẩn thận khi sử dụng
// Khi có điều kiện ko phức tạp và biết được số lần lặp, ta nên dùng vòng lặp For


// 1 : vòng lặp while
var a = 1;
while (a<=5) {
    console.log(a);
    a++;
    // Trong trường hợp này a = 1 và điều kiện là a <= 5 nên đừng cho a giảm dần
    // nếu không while sẽ lặp vô hạn vì a giảm nên không thỏa điều kiện ban đầu và sẽ không bao giờ dừng vòng lặp
    // Suy nghĩ tính logic thật kĩ trước khi chạy vòng lặp
}


// Biến lưu giá trị người dùng nhập vào
var value = null;

// Trong khi giá trị bé hơn 1 hoặc giá trị lớn hơn 10
// thì chạy thân vòng lặp
while (value < 1 || value > 10){
    value = prompt("Nhập vào số từ 1 -> 10");
}

// Sau khi nhập đúng thì in ra màn hình
// Nếu giá trị nhập nhỏ hơn 1 hoặc lớn hơn 10 thì không in ra màn hình và phải nhập lại giá trị khác
alert("Số bạn vừa nhập là " + value);


// 2 : vòng lặp do-while

// Khác với while thì do-while sẽ chạy vòng lặp trước rồi mới kiểm tra điều kiện
// Từ đấy nên sẽ luôn chắc 1 điều rằng do-while luôn chạy vòng lặp ít nhất 1 lần

do {
    alert(1);
}
while (false);

// Ví dụ ở trên chứng minh rằng do-while luôn lặp ít nhất 1 lần
// Vì false thì sẽ ko chạy vòng lặp nhưng do-while chạy vòng lặp trước rồi mới kiểm tra điều kiện
// Nếu sử dụng vòng lặp while thì sẽ ko bao giờ chạy

//Viết lại ví dụ vòng lặp while ở trên theo cách của do-while
var value = null;
do{
  //Thực thi luôn
  value = prompt("Nhập vào số từ 1 -> 10");
}while(value < 1 || value > 10);

// Sau khi nhập đúng thì in ra màn hình
alert("Số bạn vừa nhập là : " + value);

// 3 : vòng lặp do-while lồng nhau

var i = 0;
//Vòng lặp bên ngoài
while (i <= 3) {
    //Mỗi lần lặp gắn j = 0
    var j = 0;
    while (j <= 5) {
      //In ra vòng lặp
      console.log('['+i+']['+j+'] ');
      //Tăng j để ko bị lặp vô hạn
      j++;
    }
    //Tương tự như j nếu ko tăng i sẽ bị lặp vô hạn
    i++;
}
