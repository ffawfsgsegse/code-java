// nhập vào 1 số kiểm tra số đó có >=100 hay không

    const scnClick=document.getElementById(`cau1`);
        scnClick.addEventListener(`click`, function(a){
        a.preventDefault();
        anhap=document.getElementById(`bai1`).value;
        const output1=document.getElementById(`ketqua1`);
        inra1="";
            if(isNaN(anhap)){
                alert(` Dữ liệu không hợp lệ`);
                return;
            }
            if (anhap >=100){
                inra1+=(` Số ${anhap} lớn hơn 100`);
            }else {
                inra1+= (` Số ${anhap} bé hơn 100`);
            }
            output1.innerHTML=inra1;
        })

// nhập vào 1 năm kiểm tra xem có phải năm nhuận hay không

    const namClick=document.getElementById(`cau2`);
        namClick.addEventListener(`click`,function(b){
        b.preventDefault();
        namnhap=document.getElementById(`bai2`).value;
        const output2=document.getElementById(`ketqua2`);
        inra2="";

        if(isNaN(namnhap)){
            alert(` Dữ liệu không hợp lệ`);
            return;
        }

        if (namnhap % 4=== 0 || namnhap % 4=== 0 && namnhap % 100 !=0){
            inra2+= (` năm ${namnhap} là năm nhuận`);
        }else {
            inra2+=(` năm ${namnhap} không phải là năm nhuận`)
        }
        output2.innerHTML=inra2;
        })

    // nhập vào 1 tháng kiểm tra tháng bao nhiêu ngày (1-12)

        const thangClick=document.getElementById(`cau3`);
            thangClick.addEventListener(`click`, function(c){
                c.preventDefault();
                thang=Number (document.getElementById(`bai3`).value);
                nam=Number (document.getElementById(`bai3.1`).value);
                const output3=document.getElementById(`ketqua3`);
                inra3="";

                if (isNaN(thang)){
                    alert(` Dữ liệu không hợp lệ`);
                    return;
                }

                switch(thang){
                    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                        inra3+=(` tháng ${thang} có 31 ngày`);
                        break;
                    case 4: case 6: case 9: case 11:
                        inra+=(` tháng ${thang} có 30 ngày`);
                        break;
                    case 2:
                        if(nam % 400 === 0 || nam % 4 ===0 && nam % 100 !=0 ){
                            inra3+=(` tháng ${thang} có 29 ngày ( năm nhuận)`);
                        }else{
                            inra3+=(` tháng ${thang} có 28 ngày ( năm thường)`)
                        }
                        break;
                    default:
                        inra+=(` mời nhập lại, tháng từ 1 đến 12`);
                }
                output3.innerHTML=inra3;
            })

// Kiểm tra mật khẩu

    const dangnhapClick=document.getElementById(`cau4`);
            dangnhapClick.addEventListener(`click`,function(d){
            d.preventDefault();
            tk=document.getElementById(`tk`).value;
            mk=document.getElementById(`mk`).value;
            output4=document.getElementById(`ketqua4`);
            inra4="";

           

            if(tk==="admin" && mk==="123"){
                inra4+=(` đăng nhập thành công`);
            }else {
                inra4+=(` đăng nhập thất bại`);
            }
            output4.innerHTML=inra4;
            })
