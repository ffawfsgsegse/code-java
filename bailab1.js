// Nhập vào 1 số n kiểm tra số là chẵn lẻ    <psan  style:"codor: red"

    let acl = parseInt (prompt(` Nhập để kiểm tra số là chẵn lẻ`));
    if (acl % 2 == 0){
        alert (` Số chẵn là ${acl}`);
    }else{
        alert (` Số lẻ là ${acl}`);
    }

// Kiểm tra chính phương.. (Số chính phương là số bằng bình phương của một số nguyên... 4 là số chính phương vì 4 = 2^2)

    let acp = parseInt (prompt(`Kiểm tra chính phương`));
    let bcp = Math.sqrt(acp);
    if (bcp % 1 ===0){
        alert (` Là số chính phương ${acp}`);
    }else {
        alert (` Không phải số chính phương ${acp}`);
    }

// Kiểm tra nguyên tố

    while (true) {
        let asnt = parseInt (prompt(` Nhập số nguyên dương`)); // nhập số dương
        while (!parseInt(asnt) || asnt <=0) { // kiểm tra âm - dương
            asnt = parseInt (prompt(` Nhập lại, Phải là số nguyên dương`));
        }
        alert (` Giá trị hợp lệ: ${asnt}`);
        let kiemtrasnt = true;
        for (let i = 2; i < asnt; i++){  // kiểm tra xem phải số nguyên tố hay không
            if (asnt % i === 0){
                kiemtrasnt = false;
                break;
            }
        }
        if (kiemtrasnt){
            alert (` Số nguyên tố là : ${asnt}`);
        }else {
            alert (` Không phải số nguyên tố ${asnt}`);
        }
        let thoat = prompt (`                   
            Bạn có muốn tiếp tục không ????
             Nhập  " no " để thoát.
             Bấm phím bất kì để tiếp tục.
            `);                                 // lệnh để thoát chương trình
            if (thoat= "no"){
                break;
            }
    }

// Kiểm tra hoàn thiện

    let tongshh = 0;
    let shh = parseInt (prompt(` Mời nhập số`));
    for ( let i =1 ; i< shh ; i++){
        if (shh % i===0){  
            
            tongshh += i;
        }
    }
        
    if (tongshh = shh){
        alert (` Số hoàn thiện là ${shh}`);
    }else {
        alert (` Không phải số hoàn thiện ${shh}`);
    }


// Kiểm tra năm nhuận

    let nam = parseInt (prompt(` Mời nhập năm`));
if ( nam % 4 == 0 && nam % 100 !=0 || nam % 400 ===0){
    alert (` Năm nhuận ${nam}`);
}else {
    alert (` Năm thường ${nam}`);
}

// Vé xem phim

    let tuoi = parseInt (prompt(` Mời nhập độ tuổi`));
    let songuoi = parseInt( prompt (` Mời nhập số người`));
    let tien = 0;
    if (tuoi <14 ){
        tien= songuoi * 30000;
        alert (` Trả tiền: ${tien}`);
    }else if ( 14 <= tuoi <= 60) {
         tien= songuoi * 50000;
         alert (` Trả tiền: ${tien}`);
    }else {
         tien= songuoi * 20000;
        alert (` Trả tiền: ${tien}`);
    }

// Đăng nhập

    let taikhoan = prompt (` Mời nhập tài khoản`);
    let matkhau = prompt (` Mời nhập mật khẩu`);

    if ( taikhoan === "admin" && matkhau === "123"){
        alert (` Đăng nhập thành công`);
    }else {
        alert (` Đăng nhập thất bại`);
    }