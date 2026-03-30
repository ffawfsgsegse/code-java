//  const users = [
//     { username: "admin", password: "12345678", role: "Quản trị viên" },
//     { username: "user01", password: "abc135645456", role: "Người dùng thường" }
// ];

// const aClick = document.getElementById(`ok`);

// aClick.addEventListener(`click`, function(a) {
//     a.preventDefault();

//     const email = document.getElementById(`tk`).value;
//     const mk = document.getElementById(`mk`).value;

//     1. Sửa lỗi lấy localStorage (thêm nháy và đưa [] ra ngoài parse)
//     const listuser = JSON.parse(localStorage.getItem("listuser")) || [];

//     2. Sửa lỗi sai tên biến listUser thành listuser
//     function login(email, password) {
//         return listuser.find(user => user.email === email && user.mk === password);
//     }

//     function checkmail(email) {
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailPattern.test(email);
//     }

//     Kiểm tra điều kiện
//     if (email === "" || mk === "") {
//         alert(`Không được để trống`);
//         return false;
//     }
//     if (!checkmail(email)) {
//         alert(`Email không đúng định dạng`);
//         return false;
//     }
//     if (mk.length < 8) {
//         alert(`Mật khẩu phải từ 8 ký tự trở lên`);
//         return false;
//     }

//     Thực hiện đăng nhập  
//     const adangnhap = user(email, mk);

//     if (adangnhap) {
//         localStorage.setItem(`adangnhap`, JSON.stringify(adangnhap));
//         alert(`Đăng nhập thành công!`); 
//         window.location.href = "asm1-qlsp.html";  Thay đổi link trang chủ của bạn ở đây
//     } else {
//         alert(`Email hoặc mật khẩu không chính xác`);
//     }
// });


const aClick = document.getElementById(`ok`);

aClick.addEventListener(`click`, function(a) {
    a.preventDefault();

    const email = document.getElementById(`tk`).value;
    const mk = document.getElementById(`mk`).value;

    // 1. Lấy đúng key 'users' đã lưu bên trang đăng ký
    const listuser = JSON.parse(localStorage.getItem("users")) || [];

    // 2. Hàm kiểm tra email
    function checkmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // 3. Kiểm tra các điều kiện bỏ trống/định dạng
    if (email === "" || mk === "") {
        alert(`Không được để trống`);
        return;
    }
    if (!checkmail(email)) {
        alert(`Email không đúng định dạng`);
        return;
    }

    // 4. Tìm kiếm người dùng (Sửa user.mk thành user.password cho khớp bên đăng ký)
    const adangnhap = listuser.find(user => user.email === email && user.password === mk);

    if (adangnhap) {
        // Lưu thông tin người dùng hiện tại đang đăng nhập
        localStorage.setItem(`userCurrent`, JSON.stringify(adangnhap));
        alert(`Đăng nhập thành công!`); 
        window.location.href = "asm1-qlsp.html"; 
    } else {
        alert(`Email hoặc mật khẩu không chính xác`);
    }
});