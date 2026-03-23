let products = [
    {
        sku: "IP15",
        name: "iPhone 15 Pro Max",
        importPrice: 28000000,
        exportPrice: 32000000,
        image: "https://vcdn-sohoa.vnecdn.net/2023/09/13/iphone-15-pro-finish-select-202309-6-6332-1694548133.jpg",
        description: "Điện thoại Apple cao cấp nhất 2023"
    }
];

// Hàm hiển thị danh sách
function renderProducts() {
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = "";

    products.forEach((p, index) => {
        tableBody.innerHTML += `
            <tr>
                <td><strong>${p.sku}</strong></td>
                <td><img src="${p.image || 'https://via.placeholder.com/60'}" class="product-img"></td>
                <td>${p.name}</td>
                <td>${Number(p.importPrice).toLocaleString()} đ</td>
                <td class="text-danger fw-bold">${Number(p.exportPrice).toLocaleString()} đ</td>
                <td><small class="text-muted">${p.description}</small></td>
                <td>
                    <button onclick="deleteProduct('${p.sku}')" class="btn btn-sm btn-outline-danger">Xóa</button>
                </td>
            </tr>
        `;
    });
}

// Hàm thêm sản phẩm (Có kiểm tra Validation SKU)
function addProduct() {
    const sku = document.getElementById('sku').value.trim();
    const name = document.getElementById('productName').value.trim();
    const importPrice = document.getElementById('importPrice').value;
    const exportPrice = document.getElementById('exportPrice').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;

    // 1. Kiểm tra để trống
    if (!sku || !name || !importPrice || !exportPrice) {
        alert("Vui lòng điền đầy đủ các thông tin bắt buộc!");
        return;
    }

    // 2. Ràng buộc dữ liệu: Kiểm tra SKU không được trùng lặp
    const isDuplicate = products.some(p => p.sku.toLowerCase() === sku.toLowerCase());
    if (isDuplicate) {
        alert("Lỗi: Mã sản phẩm (SKU) này đã tồn tại!");
        return;
    }

    // 3. Thêm vào mảng
    const newProduct = { sku, name, importPrice, exportPrice, image, description };
    products.push(newProduct);

    // 4. Cập nhật giao diện và reset form
    renderProducts();
    document.getElementById('productForm').reset();
    alert("Thêm sản phẩm thành công!");
}

// Hàm xóa sản phẩm
function deleteProduct(sku) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        products = products.filter(p => p.sku !== sku);
        renderProducts();
    }
}

// Chạy lần đầu khi load trang
renderProducts();