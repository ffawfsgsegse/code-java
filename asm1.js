   const users = [
    { username: "admin", password: "123", role: "Quản trị viên" },
    { username: "user01", password: "abc", role: "Người dùng thường" }
];
   const dangnhapClick=document.getElementById(`ok`);
            dangnhapClick.addEventListener(`click`,function(d){
            d.preventDefault();
            tk=document.getElementById(`tk`).value;
            mk=document.getElementById(`mk`).value;
            output4=document.getElementById(`ketqua`);
           

           const check = users.find(u => u.username === tk && u.password === mk); // u - đại diện cho đối tượng người dùng, .fin duyệt từng phần tử của mảng
                            
            if(check){
                alert(` đăng nhập thành công
                    thông tin:`+check.username +
                    ` Quyền hạn: `+check.role );
                window.location.href = "asm1-qltk.html";

            }else {
                alert(` Tài khoản hoặc mật khẩu không chính xác`);
            }
            
            })
    