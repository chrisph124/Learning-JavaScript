//Vòng lặp for trong Javascript thường dùng để lặp 1 mảng hoặc 1 khoảng (min max)


// 1 : Lặp với bước nhảy tăng 1 đơn vị
for (var i = 0; i < 5; i++) {
  console.log( "Đây là số bước nhảy tăng từ  : " + i );
}

// var i : khai báo biến i
// i = 0 : điểm bắt đầu vòng lặp là 0
// i < 5 : điều kiện để dừng vòng lặp, điều kiện i < 5 để i lặp từ 0 đến 4
// Có thể dùng bất kì toán tử nào để tạo ra 1 điều kiện miễn trả về true/false
// i++ : i tăng lên ( có thể dùng i-- : giảm dần hoặc các điều kiện khác )

// 2 : Lặp với bước nhảy giảm 1 đơn vị

for (var i = 7; i >= 0; i--) {
  console.log( "Đây là số bước nhảy giảm từ : " + i );
}


// 3 : Lặp với bước nhảy tăng theo 1 biến khác

var a = 2;
for (var i = 0; i < 15; i+=a) {
    // Vòng lặp bắt đầu từ 0 và bước nhảy là 2 theo biến a
    console.log( "Đây là số bước nhảy tăng theo 1 biến khác từ : " + i );
}

// 4 : Vòng lặp lồng nhau

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
        console.log("[" + i + "]" + "[" + j + "]")
  }
}
