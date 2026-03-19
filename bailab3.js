        const nhapClick=document.getElementById(`submit`);
            nhapClick.addEventListener(`click`, function(a){
            a.preventDefault();
            chuoi=document.getElementById(`so`).value;
            mang=chuoi.split(',').map(Number); // chuyển mảng thành chuỗi
            output=document.getElementById(`ketqua`);
            inra="";
            sochan=" số chẵn: "
            sole=" số lẻ: "
            chia3va5=" số chia hết cho 3 và 5: "
            scp="Số chính phương: "
            snt="Số nguyên tố: "
            shh=" số hoàn hảo: "
            tong= 0;
            daysochan=" Số phần tử chẵn: ";
            demchan=0;
            daysole=" Số phần tử lẻ: ";
            demle=0;
                       
                //yêu cầu nhập vào một số nếu ko phải số yêu cầu nhập lại

            // if(isNaN(chuoi)){
            //     alert(` Dữ liệu không đúng`);
            //     return;
            // }   
    
            for(i=0; i< mang.length; i++){ // length đếm phần tử trong mảng
                if (mang[i] % 2=== 0){
                    sochan+=(` ${mang[i]}  `);    // số chẵn 
                    // x=mang[i]; 
                    // daysochan+=(`${x}`);
                    demchan++;               // số phần tử chẵn
                }else {
                    sole+= (` ${mang[i]}`);      // số lẻ
                    demle++;        // phần tử lẻ
                }

                // chia hết cho 3 và 5

                if (mang[i] % 3===0 && mang[i] % 5===0){
                    chia3va5+=(` ${mang[i]}`);
                }

                // tổng của mảng
                tong+=mang[i];
                
                //tính trung bình cộng

                tbc= tong / mang.length

                // số chính phương

                if(mang[i] >= 0 && Number.isInteger(Math.sqrt(mang[i]))){
                    scp+=(` ${mang[i]}`)
                }
                
                // số nguyên tố

                songuyento=true;
                if(mang[i] <2 ){
                    songuyento = false;   // không phải số nguyên tố
                }else{
                    for(j =2; j<=Math.sqrt(mang[i]);j++){
                        if(mang[i] % j===0){
                            songuyento=false;  // tìm thấy ước khác nên không phải là số nguyên tố
                            break;
                        }
                    }
                }
                if (songuyento){   // kiểm tra vẫn đúng thì cộng vào
                    snt+=(` ${mang[i]}`);
                }

                // số hoàn hảo

                tongcacuoc=0;
            for(k=1; k<=mang[i]/2; k++){
                if(mang[i] % k===0){
                    tongcacuoc+=k;
                }
                if(mang[i]> 0 && tongcacuoc===mang[i]){
                    shh+=(` ${mang[i]}`);
                }
            }            
            }

            // sắp xếp tăng dần

          let mangTangDan = [...mang].sort((a, b) => a - b);

          // sắp xếp giảm dần
          
          let mangGiamDan = [...mang].sort((a, b) => b-a);
        
            output.innerHTML=
            sochan+"<br>"+ 
            sole + "<br>" + 
            chia3va5 + "<br>" +
            "Tổng cả mảng là:" + tong  +"<br>" +
            "trung bình công:" + tbc + "<br>"+
            scp +"<br>"+
            snt+"<br>"+
            shh + "<br>"+
            daysochan + demchan +"<br>"+
            daysole + demle +"<br>" + 
            `Mảng sau khi sắp xếp tăng dần: ${mangTangDan.join(", ")}`+ "<br>"+
            `Mảng sau khi sắp xếp giảm dần: ${mangGiamDan.join(", ")}`                                   
            })
            
            // in ra số trong khoảng

            const insoClick=document.getElementById(`soab`);
                insoClick.addEventListener(`click`,function(b){
                    a=document.getElementById(`soa`).value;
                    b=document.getElementById(`sob`).value;
                    const output1=document.getElementById(`ketqua1`);
                    inra1="";

                    if(isNaN(a)||isNaN(b)){
                        alert(` dữ liệu sai`);
                        return;
                    }
                    if (a<=b){
                        for(i=a;i<=b;i++){
                            inra1+=i;
                        }
                    }else {
                        for (i=a;i>=b;i--){
                            inra1+=i;
                        }
                    }
                    output1.innerHTML=inra1;
                })
