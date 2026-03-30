let users = [
    { username: "admin", name: "Quản trị viên", status: "Active" },
    { username: "hoang_nv", name: "Nguyễn Văn Hoàng", status: "Active" }
];

// Hàm hiển thị danh sách (Xem danh sách)
function renderTable(data = users) {
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = ""; // Xóa bảng cũ

    data.forEach(user => {
        const row = `
            <tr>
                <td><strong>${user.username}</strong></td>
                <td>${user.name}</td>
                <td class="${user.status === 'Disabled' ? 'status-disabled' : ''}">${user.status}</td>
                <td>
                    <button onclick="handleUpdate('${user.username}')" class="btn btn-sm btn-outline-primary">Sửa</button>
                    <button onclick="handleDeactivate('${user.username}')" class="btn btn-sm btn-outline-danger">Vô hiệu hóa</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Xử lý Thêm mới (Validation)
function handleFormAdd() {
    const username = document.getElementById('usernameInput').value.trim();
    const name = document.getElementById('nameInput').value.trim();

    if (!username || !name) return alert("Vui lòng nhập đầy đủ thông tin!");

    // Ràng buộc dữ liệu (Validation)
    const exists = users.find(u => u.username === username);
    if (exists) {
        alert("Lỗi: Username đã tồn tại trong hệ thống!");
        return;
    }

    users.push({ username, name, status: "Active" });
    renderTable(); // Cập nhật lại giao diện
    
    // Clear input
    document.getElementById('usernameInput').value = "";
    document.getElementById('nameInput').value = "";
}

// Xử lý Tìm kiếm
function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredUsers = users.filter(u => u.name.toLowerCase().includes(query));
    renderTable(filteredUsers);
}

// Xử lý Cập nhật (Prompt nhanh)
function handleUpdate(username) {
    const newName = prompt("Nhập tên mới cho tài khoản " + username + ":");
    if (newName) {
        const user = users.find(u => u.username === username);
        if (user) {
            user.name = newName;
            renderTable();
        }
    }
}

// Xử lý Vô hiệu hóa (Soft Delete)
function handleDeactivate(username) {
    if (confirm(`Bạn có chắc muốn vô hiệu hóa tài khoản ${username}?`)) {
        const user = users.find(u => u.username === username);
        if (user) {
            user.status = "Disabled";
            renderTable();
        }
    }
}

// Gọi hàm hiển thị lần đầu khi load trang
renderTable();