   
    //     let b = parseInt (prompt(`nhap so`));
    //     const output = document.getElementById('ket-qua');
    //     let content = "";
    // for (let i=1; i<b; i++){
    //     if(i%2==0 && i%4==0){
    //         content+= (`chia het ${i} <br/>`);
    //     }else {
    //         content+= (` <p> <img src="nhi2.jpg" alt="anh" width="50px">${i}<p>`)
    //     }
    // }

    // output.innerHTML = content;
    
    // const btnClick = document.getElementById(`btn`);
    //     btnClick.addEventListener(`click`, function(){
    //         input =document.getElementById(`input`).value;
    //         console.log(typeof inputElm);
    //         if (isnan (input)){
    //             alert(`duwx liệu không hợp lệ`)
    //             return
    //         }
    //         let html="";
    //         if (input % 2 ===0){
    //             html+=`chia 2 ${input}`
    //         }else {
    //             html+= ` khong ${input}`
    //         }
    //         const emlketqua=document.getElementById(`ketqua`)
    //         emlketqua.innerHTML=html
    //     })
       

    // function toggleBulb() {
    //         let bulb = document.getElementById(`myBulb`);
    //         let btn = document.getElementById('btnControl');

    //         // Kiểm tra: Nếu nguồn ảnh đang chứa chữ "off"
    //         if (bulb.src.match(`off`)) {
    //             bulb.src = "nhi3.jpg"; // Đổi sang ảnh bật
    //             btn.innerHTML = `Tắt đèn đi`; // Đổi chữ trên nút
    //         } else {
    //             bulb.src = "nhi2.jpg"; // Đổi sang ảnh tắt
    //             btn.innerHTML = `Bật đèn lên`; // Đổi chữ trên nút
    //         }
    //     }

    // let askt = parseInt(prompt(` Mời nhập số`));
    //     const output=document.getElementById(`ketqua`);
    //     let inra="";
    //     if(askt >= 100){
    //         inra+=` Số này lớn hơn 100 ${askt}`;
    //     }else {
    //         inra+= ` Số này bé hơn 100 ${askt}`
    //     }
    //     output.innerHTML=inra;


    // const scnClick=document.getElementById(`submit`);
    //     scnClick.addEventListener(`click`, function(a){
    //         a.preventDefault();
    //         anhap=document.getElementById(`input`).value;
    //         const output=document.getElementById(`ketqua`);
    //         inra="";
    //         if(isNaN(anhap)){
    //             alert(` Dữ liệu không hợp lệ`);
    //             return;
    //         }
    //         if (anhap >=100){
    //             inra+=(` Số ${anhap} lớn hơn 100`);
    //         }else {
    //             inra+= (` Số ${anhap} bé hơn 100`);
    //         }
    //         output.innerHTML=inra;
    //     })

    // const namClick=document.getElementById(`submit`);
    //     namClick.addEventListener(`click`,function(b){
    //     b.preventDefault();
    //     namnhap=document.getElementById(`input`).value;
    //     const output=document.getElementById(`ketqua`);
    //     inra="";

    //     if(isNaN(namnhap)){
    //         alert(` Dữ liệu không hợp lệ`);
    //         return;
    //     }

    //     if (namnhap % 4=== 0 || namnhap % 4=== 0 && namnhap % 100 !=0){
    //         inra+= (` năm ${namnhap} là năm nhuận`);
    //     }else {
    //         inra+=(` năm ${namnhap} không phải là năm nhuận`)
    //     }
    //     output.innerHTML=inra;
    //     })

    // const thangClick=document.getElementById(`submit`);
    //     thangClick.addEventListener(`click`,function(a){
    //         a.preventDefault();
    //         thang=Number( document.getElementById(`input`).value);
    //         nam= Number(document.getElementById(`nam`).value);
    //         const output=document.getElementById(`ketqua`);
    //         inra="";
    //         if(isNaN(thang)){
    //             alert(` Dữ liệu không hợp lệ`);
    //             return;
    //         }

            

    //         switch(thang){
    //             case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    //                 inra+=  (` tháng ${thang} có 31 ngày`);
    //                 break;
    //             case 4: case 6: case 9: case 11:
    //                 inra+=(` tháng ${thang} có 30 ngày`)
    //                 break;
    //             case 2:
    //                 if( nam % 400 ===0 || nam % 4===0 && nam % 100 !=0){
    //                     inra+=(` tháng ${thang} có 29 ngày (năm nhuận)`)
    //                 }else {
    //                     inra+=(` tháng ${thang} có 28 ngày ( năm thường)`)
    //                 }
    //                 break;
    //                 default:
    //         inra += (`Tháng không hợp lệ! Vui lòng nhập từ 1 đến 12.`);
    //         break;
    //         }
    //         output.innerHTML=inra;
    //     })

    // const nhapClick=document.getElementById(`submit`);
    //     nhapClick.addEventListener(`click`, function(a){
    //         a.preventDefault();
    //         tk=document.getElementById(`tk`).value;
    //         mk=document.getElementById(`mk`).value;
    //         const output=document.getElementById(`ketqua`);
    //         inra="";

            

    //         if(tk==="admin" && mk==="123"){
    //             inra+=(` thành công`);
    //         }else {
    //             inra+=(` thất bại`);
    //         }
    //         output.innerHTML=inra;
    //     })

    // const bccClick=document.getElementById(`submit`)
    //     bccClick.addEventListener(`click`, function(a){
    //         a.preventDefault();
    //      let   output=document.getElementById(`ketqua`);
    //         // tk=document.getElementById(`tk`).value;
    //         // mk=document.getElementById(`mk`).value;
    //     let    inra="";
    // for(let i=1;i<=10;i++){
    //     inra+=(`${i}`);
    //     for(let j=1;j<=10;j++){
    //         inra+=(`${i} x ${j} = ${i * j}`)
    //     }
    // }
    // output.innerHTML=inra
    // })



        // const nhapClick=document.getElementById(`submit`)
        //     nhapClick.addEventListener(`click`, function(a){
        //         a.preventDefault();
        //         tk=document.getElementById(`tk`).value;
        //         mang=tk.sliit(",".map(Number));
        //         output=document.getElementById(`ketqua`);
        //         inra="";
                
        //         output.innerHTML=inra
        //     })

        // const maytinh={
        //     id: "1",
        //     color: "den",
        //     hang: "asus",
        //     ram: "8gb",
        // };

        const products = [
  {
    id: 1,
    name: "Laptop Dell Inspiron",
    price: 15000000,
    category: "Laptop",
    stock: 10,
    image: "images/laptop-dell.jpg"
  },
  {
    id: 2,
    name: "Chuột Logitech M331",
    price: 350000,
    category: "Phụ kiện",
    stock: 25,
    image: "images/logitech-m331.jpg"
  },
  {
    id: 3,
    name: "Bàn phím cơ AKKO",
    price: 1200000,
    category: "Phụ kiện",
    stock: 8,
    image: "images/akko-keyboard.jpg"
  },
  {
    id: 4,
    name: "Màn hình LG 24 inch",
    price: 3200000,
    category: "Màn hình",
    stock: 5,
    image: "images/lg-24inch.jpg"
  }
]
