window.onload = function() {
    const modal = document.getElementById("metaModal");
    const closeBtn = document.querySelector(".close-btn");

    // Hiện modal ngay khi vào trang
    modal.style.display = "flex";

    // Đóng modal khi click vào dấu X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Đóng modal khi click ra ngoài vùng trắng (click lên vùng nền tối)
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}