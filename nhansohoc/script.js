var arrows = [{
        name: "1-4-7: Mũi tên thực tế",
        nums: [1, 4, 7],
        status: false,
        description: "Hay nắm phần việc, giỏi giang, tháo vát." +
            "<br> Chỉ cảm thấy vui và vừa ý với cuộc sống khi họ được nhúng mình vào những khía cạnh thực tiễn của công việc." +
            "<br>Với các lĩnh vực tâm linh, thường khó tin cho đến khi nào đích thân kinh qua."
    },
    {
        name: "1-2-3: Mũi tên kế hoạch",
        nums: [1, 2, 3],
        status: false,
        description: "Rất yêu thích trật tự, có phương pháp thực hiện, có thấu hiểu sâu vấn đề." +
            "<br>Thường đặt mình vào vị trí ‘người tổ chức chung’ hơn là ‘người thực hiện’." +
            "<br>Cần chú ý kỹ hơn vào các chi tiết nhỏ nhỏ và đừng phó mặc cho mọi chuyện."
    },
    {
        name: "2-5-8: Mũi Tên Cân bằng cảm xúc",
        nums: [2, 5, 8],
        status: false,
        description: "Cảm xúc chưa chắc đã thực sự gọi là ‘Cân bằng’ mọi lúc mọi nơi." +
            "<br>Sỡ hữu khả năng cân bằng tự nhiên trong đời sống cảm xúc và một nhận thức khá sâu sắc về các giá trị tinh thần / tâm linh."
    },
    {
        name: "3-6-9: Mũi tên sáng trí",
        nums: [3, 6, 9],
        status: false,
        description: "Trí nhớ vượt trội, học khá giỏi, nhớ dai và nhớ chi tiết." +
            "<br>Nếu không được sử dụng sẽ bị mai một, hoặc nếu không biết lấy ra dùng sẽ bị bứt rứt." +
            "<br>Sống khá tích cực, nhanh nhạy, sáng sủa, thích những gì mang tính học thuật hơn nghệ thuật."
    },
    {
        name: "4-5-6: Mũi tên ý chí",
        nums: [4, 5, 6],
        status: false,
        description: "Nhận thức và biết áp dụng thế mạnh sẽ có đủ mãnh lực và can trường để phá bỏ mọi cản trở khi họ hành động với sự khôn ngoan và thông thái."
    },
    {
        name: "7-8-9: Mũi tên hoạt động",
        nums: [7, 8, 9],
        status: false,
        description: "Giàu biểu cảm." +
            "<br>Dễ trở nên bị kích động bởi năng lượng bồn chồn, bức bối ngày càng leo thang." +
            "<br>Cần sự bình an và hòa hợp với môi trường xung quanh."
    },
    {
        name: "3-5-7: Mũi tên sự nhạy bén tâm linh",
        nums: [3, 5, 7],
        status: false,
        description: "Thích tự nhúng mình vào, trải nghiệm, cảm nhận và tự rút ra bài học." +
            "<br>Nhận nhiều bài học buồn đau trong chặng đầu tiên của cuộc đời, đó trở thành nguồn cơn luyện rèn chí can cường nơi họ, chính vì thế họ có cảm thụ sâu sắc về triết lý sống ở đời."
    },
    {
        name: "1-5-9: Mũi tên quyết tâm",
        nums: [1, 5, 9],
        status: false,
        description: "Kiên trì thực hiện bất kỳ điều gì họ muốn làm nên đôi khi cố chấp bướng bỉnh. Chinh Bài học lớn nhất: Không phải vấn đề nào cũng cần giải quyết." +
            "<br>Tư chất tuyệt vời: tính quyết đoán."
    },

    {
        name: "1-4-7: Mũi tên trống thiếu trật tự",
        nums: [1, 4, 7, 0],
        status: false,
        description: "Cần những trải nghiệm thực tế và kiên nhẫn." +
            "<br>Đưa được sự nhạy cảm vào thực tế, sẽ cảm nhận được niềm vui sướng khi được nhìn thấy những thành quả lao động có cơ hội phát triển."
    },
    {
        name: "2-5-8: Mũi Tên trống nhạy cảm",
        nums: [2, 5, 8, 0],
        status: false,
        description: "Sự bảo vệ phần tâm hồn của người này không được mạnh, vì vậy sự nhạy cảm họ lộ ra, tâm hồn mỏng manh yếu ớt." +
            "<br>Sự nhạy cảm, dễ tổn thương, đặc biệt là trong những năm tuổi nhỏ." +
            "<br>Dễ cảm thấy bị xúc phạm, dễ xuống tinh thần, chênh chao. Dễ tạo thành một cảm giác tự ti từ rất sớm."
    },
    {
        name: "3-6-9: Mũi tên trống trí nhớ ngắn hạn",
        nums: [3, 6, 9, 0],
        status: false,
        description: "Trí nhớ kém nên phải ý thức nỗ lực để bảo đảm trí nhớ của họ luôn trong trạng thái năng động và nhanh nhạy." +
            "<br>Không nhất thiết lúc nào cũng có trí nhớ kém, nhưng từ nửa chặng đời sau, chứng suy giảm trí nhớ bắt đầu có nhiều ảnh hưởng tương đối nặng nề."
    },
    {
        name: "4-5-6: Mũi tên trống uất hạn",
        nums: [4, 5, 6, 0],
        status: false,
        description: "Có khả năng chịu khá nhiều vấn đề lớn trong cuộc sống." +
            "<br>Hay kỳ vọng ở người khác quá nhiều thứ."
    },
    {
        name: "7-8-9: Mũi tên trống thụ động",
        nums: [7, 8, 9, 0],
        status: false,
        description: "Sẽ rất thụ động, không tự đẩy mình đi được về phía trước." +
            "<br>Nhiều khả năng trở thành những người tư duy, lên kế hoạch và người dẫn dắt sau-hậu-trường cho cả kỷ nguyên mới nên cần được đào luyện về sự kiên trì, và kỷ cương."
    },
    {
        name: "3-5-7: Mũi tên trống hoài nghi",
        nums: [3, 5, 7, 0],
        status: false,
        description: "Hay hoài nghi về cuộc sống, khá đa nghi." +
            "<br>Cuộc sống khá mệt, có vẻ hơi tiêu cực." +
            "<br>Có máu tìm hiểu, lục lọi." +
            "<br>Khá nóng nảy, dễ rơi vào thế bị động, cần ý thức tự điều chỉnh."
    },
    {
        name: "1-5-9: Mũi tên trống trì hoãn",
        nums: [1, 5, 9, 0],
        status: false,
        description: "Tính thiếu quyết tâm, hay lần lữa, trì hoãn thực hiện những điều cần làm." +
            "<br>Cần nhìn ra khắc phục sớm, thì những mất mát tổn thất này không còn lặp lại nữa." +
            "<br>Thiếu thực tế, thiếu ngăn nắp cần phải điều chỉnh sớm khi còn bé."
    },
];

$(document).ready(function() {
    var fullName = '';
    var fullNameRemoveTones = '';
    var arrNumOfName = [];
    var soChuDao = 0;
    var arrNameAndBirthDay = [];
    var arrBirthDay = [];

    $("#BirthDay").keyup(function(e){ 
      var code = e.key; // recommended to use e.key, it's normalized across devices and languages
      if(code==="Enter") e.preventDefault();
      if(code===" " || code==="Enter" || code===","|| code===";"){
        $("#confirm").click()
      }
  });

    $("#confirm").click(function() {
        $("#general").html('');

        fullName = $("#Name").val();
        fullNameRemoveTones = removeVietnameseTones(fullName);
        lastName = fullNameRemoveTones.split(' ').pop();
        arrNumOfName = ConvertCharToNumber(lastName).split("").map(i => Number(i));
        birthDay = $("#BirthDay").val();
        arrBirthDay = birthDay.match(/\d/g).map(Number);
        arrNameAndBirthDay = arrNumOfName.concat(arrBirthDay);

        soChuDao = SoChuDao(arrBirthDay);
        namCaNhan = NamCaNhan(arrBirthDay);

        KiemTraMuiTenCatinh(arrNameAndBirthDay);
        var information = '';
        information += "<b>Họ và Tên: </b>" + fullName;
        information += "<br><b>Ngày sinh: </b>" + birthDay;
        information += "<br><b>Số chủ đạo: </b>" + soChuDao + "&nbsp;&nbsp;&nbsp;<a href='https://tracuuthansohoc.com/than-so-hoc-so-" + soChuDao + "' target='_blank'>Xem chi tiết</a>";
        information += "<br><b>Năm cá nhân: </b>" + namCaNhan + "&nbsp;&nbsp;&nbsp;<a href='https://downtownholidayhappening.com/nam-ca-nhan-so-" + namCaNhan + "-nam-2022-theo-than-so-hoc/' target='_blank'>Xem chi tiết</a>";

        information += "<br><br><b>Các đường mũi tên cá tính:</b>";
        arrows.forEach(a => {
            if (a.status) {
                information += "<br>&nbsp;&nbsp;&nbsp;<i class='fas fa-caret-right' style='font-size:15px'></i><b> " + a.name + "</b>";
                information += "<p>" + a.description + "</p>";
            }
        });
        $("#general").append(information);

        arrNameAndBirthDay.forEach(e => {
            $("#cell" + e).append(e);
        });
        $("#table").show();
        console.log("Các số của tên: " + arrNumOfName)
        console.log("Các số ngày sinh: " + arrBirthDay)
        console.log("Tổng hợp các số: " + arrNameAndBirthDay)
    });

    $("#clear").click(function() {
        clear();
    });

    function clear() {
        $("#Name").val('');
        $("#BirthDay").val('');
        $("#general").html('');
        console.clear()
    }

    function SoChuDao(arrBirthDay) {
        var result = arrBirthDay.reduce((a, b) => a + b, 0);

        while (result > 12) {
            result = result.toString().split('').map(Number).reduce((a, b) => a + b, 0);
        }
        return result;
    }

    function NamCaNhan(arrBirthDay) {
        var birthDay = arrBirthDay;
        var getdate = birthDay.splice(0, birthDay.length - 4)
        var getthisYear = new Date().getFullYear().toString().split('');
        var fullDate = getdate.concat(getthisYear);
        console.log("Ngày tính năm cá nhân: " + fullDate);
        var result = fullDate.reduce((a, b) => a + b, 0);

        while (result > 9) {
            result = result.toString().split('').map(Number).reduce((a, b) => a + b, 0);
        }
        return result;
    }

    function KiemTraMuiTenCatinh(arr) {
        arrows.forEach(a => {
            a.status = KiemTraMuiTen(a.nums, arr)
        });
    }

    function KiemTraMuiTen(arrNum, arr) {
        return arrNum[3] == 0 ?
            !(arr.includes(arrNum[0]) || arr.includes(arrNum[1]) || arr.includes(arrNum[2])) :
            arr.includes(arrNum[0]) && arr.includes(arrNum[1]) && arr.includes(arrNum[2])
    }

    function ConvertCharToNumber(str) {
        str = str.toUpperCase();
        str = str.replace(/A|J|S/g, "1");
        str = str.replace(/B|K|T/g, "2");
        str = str.replace(/C|L|U/g, "3");
        str = str.replace(/D|M|V/g, "4");
        str = str.replace(/E|N|W/g, "5");
        str = str.replace(/F|O|X/g, "6");
        str = str.replace(/G|P|Y/g, "7");
        str = str.replace(/H|Q|Z/g, "8");
        str = str.replace(/I|R/g, "9");
        return str;
    }

    function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư

        return str;
    };
});