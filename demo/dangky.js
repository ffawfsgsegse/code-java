const aClick=document.getElementById(`adangky`);
    aClick.addEventListener(`click`,function(a){
        a.preventDefault();
        // gọi từng biến ở bên trang đăng ký
        const name=document.getElementById(`dkname`).value;
        const email=document.getElementById(`dkemail`).value;
        const password=document.getElementById(`dkpassword`).value;
        const confirmpassword=document.getElementById(`dkconfirmpassword`).value;

        // hàm dùng để check mail cho đúng định dạng
        function checkemail(email){
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // hàm check emailPattern.test(email)
            return emailPattern.test(email);
        }
        // tìm xem đã có email này hay chưa
        function TimKiemUserFind(email) {
  return listuser.find(user => user.email === email)
}
        // bắt đầu xét điều kiện để đăng ký
        if (name==="" || email===""|| password==="" || confirmpassword ===""){ // không được để trống
            alert(` Không được để trống`);
            return false;
        }
        if (!checkemail(email)){                  // không đúng định dạng email
            alert(` Email không đúng định dạng`);
            return false;
        }
        if(password.length <8){                     // độ dài của mật khẩu 
            alert(` Độ dài phải hơn 8`);
            return false;

        }
        if(password!==confirmpassword){             // check mật khẩu có giống nhau không
            alert(` Mật khẩu không trùng khớp`);
            return false;
        }
        // tạo localstorage

        function data(){
            const username = localStorage.getItem(`users`)
                if(username){
                    return JSON.parse(username);
                }else {
                    const mockData = [{
      name: 'admin',
      email: 'admin@gmail.com',
      password: '123456'
    }]
    localStorage.setItem('users', JSON.stringify(mockData))
    return mockData
                }
            }
        const listuser = data()
        // tạo biến user để check xem đẫ tồn tại hay chưa

        const user={
            name, email ,password
        };

        // kiểm tra email này đã có ai đăng ký chưa

        const kiemuser=TimKiemUserFind(user.email); 
        if(kiemuser=== undefined){   // chưa có tài khoản
            listuser.push(user)     // thêm mới

            // lưu vào localstorage

            localStorage.setItem(`user`,JSON.stringify(listuser));
                alert(` Đăng ký thành công`);
                return;
        }else {
            alert(` Email đã tồn tại`);
        }

            

        
        
    })