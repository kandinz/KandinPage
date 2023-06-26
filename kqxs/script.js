let data = [];


$(document).ready(function(){
  init();

  var currentDate = $("#box_kqxs_ngay").val();
  var count = 0;
  function performActions() {
    setTimeout(function() {
      currentDate = getPrevDate(currentDate);
      $("#box_kqxs_ngay").val(currentDate);
      $("#box_kqxs_ngay").change();
    }, 1000);
    setTimeout(function() {
      $("button").click();
      count++;
    }, 2000);
  }

  for (var i = 0; i < 10; i++) {
    setTimeout(performActions, i * 2000); 
  }

  $("button").click(function(){
    init();
  });


  function init(){
    $('table.results-table').remove();
    let table = $('table.bkqtinhmienbac_mini')[0];
    let object = convertTableToObject(table)
    let lastTwo = convertLastTwo(object)

    var date = $("#box_kqxs_ngay").val();
    var num = getNumberSuggest(object);
    var result = convertKeyValue(lastTwo, date, num);

    data = data.filter(obj => obj.date !== date);
    data.push(result);
    generateTable(data);
    //cal(object);

    //var date = $("#box_kqxs_ngay").val();
    // var service = $("#box_kqxs_tinh").val();
    // getKQXS(date, service);

    console.log(object); 
  }

  $('.cau1').click(function() {
    alert('Hovering over second column!');
  });
  
  function generateTable(data){
    let table = $('<table>').addClass('results-table');

    // Tạo header của bảng
    let headerRow = $('<tr>');
    headerRow.append($('<th>').text('Ngày'));
    headerRow.append($('<th>').text('Cầu 1'));
    headerRow.append($('<th>').text('Cầu 2'));
    headerRow.append($('<th>').text('0'));
    headerRow.append($('<th>').text('1'));
    headerRow.append($('<th>').text('2'));
    headerRow.append($('<th>').text('3'));
    headerRow.append($('<th>').text('4'));
    headerRow.append($('<th>').text('5'));
    headerRow.append($('<th>').text('6'));
    headerRow.append($('<th>').text('7'));
    headerRow.append($('<th>').text('8'));
    headerRow.append($('<th>').text('9'));

    table.append(headerRow);

    // Thêm các dòng dữ liệu cho bảng
    for(let item of data ){
      let row = $('<tr>');
      row.append($('<td>').text(item["date"].substring(0, 5)));
      row.append($('<td>').text(item["num1"]));
      row.append($('<td onClick="find()">').addClass('cau1').text(item["num2"]));
      for (var i = 0; i < 10; i++) {
        row.append($('<td>').text(item[i].join(" - ")));
      }
      table.append(row);
    }
    
    // Thêm bảng vào phần tử HTML cần hiển thị
    $('#table-container').html(table);
  }

  function find(e){
    confirm.log(e);
  }

  function convertKeyValue(obj, date, num){
    var result = {};
    result["date"] = date;
    result["num1"] = num[0];
    result["num2"] = num[1];
    for (let i = 0; i < 10; i++) {
      let key = i;
      let values = obj.filter((value) => 
        parseInt(value.charAt(0)) === i)
        .map((value) => value);
      result[key] = values;
    }
    return result; 
  }


  function cal(object){
    var arrNum = [];
    arrNum.push(parseInt(object[0][0].charAt(2)));
    arrNum.push(parseInt(object[1][0].charAt(0)));
    arrNum.push(parseInt(object[1][0].charAt(4)));

    var num1 = object[3][3].charAt(0);
    var num2 = object[7][2].charAt(0);

    var calNum = calNumber(arrNum);

    var title = $("div.title").text();
    var date = $("#box_kqxs_ngay").val()

    $("#info").html(title + " " + date);
    $("#num").html("- Đặt biệt số thứ 3: " + arrNum[0] + "<br>- Giải nhất số thử 1: " + arrNum[1] + "<br>- Giải nhất số thứ 5: " + arrNum[2] + "<br>- Tổng: " + calNum);
    $("#num2").html("Số gợi ý: " + calNum + num1 + " - " + calNum + num2);

  }

  function getNumberSuggest(object){
    var arrNum = [];
    arrNum.push(parseInt(object[0][0].charAt(2)));
    arrNum.push(parseInt(object[1][0].charAt(0)));
    arrNum.push(parseInt(object[1][0].charAt(4)));

    var num1 = object[3][3].charAt(0);
    var num2 = object[7][2].charAt(0);

    var calNum = calNumber(arrNum);
    var result = [];
    result[0] = calNum + num1;
    result[1] = calNum + num2;
    return result;
  }

  function calNumber(arr) {
    var result = arr.reduce((a, b) => a + b, 0);
    return result%10;
  }

  function getNextDate(date){
    const dateParts = date.split("-");
    var nextDate = new Date(dateParts[2], dateParts[1]-1, dateParts[0]);;
    nextDate.setDate(nextDate.getDate() + 1);

    let day = ("0" + nextDate.getDate()).slice(-2); // pad with leading zero if needed
    let month = ("0" + (nextDate.getMonth() + 1)).slice(-2); // add 1 to month index to account for zero-based indexing, and pad with leading zero if needed
    let year = nextDate.getFullYear();
    let dateString = `${day}-${month}-${year}`;

    return dateString;
  }

  function getPrevDate(date){
    const dateParts = date.split("-");
    var nextDate = new Date(dateParts[2], dateParts[1]-1, dateParts[0]);;
    nextDate.setDate(nextDate.getDate() - 1);

    let day = ("0" + nextDate.getDate()).slice(-2); // pad with leading zero if needed
    let month = ("0" + (nextDate.getMonth() + 1)).slice(-2); // add 1 to month index to account for zero-based indexing, and pad with leading zero if needed
    let year = nextDate.getFullYear();
    let dateString = `${day}-${month}-${year}`;

    return dateString;
  }

  function convertTableToJson(table) {
    var data = [];
    // Lặp qua từng hàng của bảng
    $(table).find('tr').each(function(rowIndex, row) {
      var rowData = {};
      // Lặp qua từng ô trong hàng
      $(row).find('td').each(function(cellIndex, cell) {
        // Lấy giá trị của ô và đặt tên cho trường dữ liệu tương ứng
        rowData[table.rows[0].cells[cellIndex].className] = $(cell).text().trim();
      });
      // Thêm hàng dữ liệu vào mảng
      if ($.isEmptyObject(rowData) === false) {
        data.push(rowData);
      }
    });
    // Chuyển đổi dữ liệu sang JSON và trả về
    return JSON.stringify(data);
  }

  function convertJsonToKqxsList(jsonData) {
    var kqxsList = [];
    var data = JSON.parse(jsonData);
    // Bắt đầu từ phần tử thứ hai, bỏ qua phần tử đầu tiên vì là tiêu đề
    for (var i = 1; i < data.length; i++) {
      var kqxs = {
        thu: data[i].thu,
        ngay: data[i].ngay.split(" - "),
      };
      kqxsList.push(kqxs);
    }
    return kqxsList;
  }

  function convertTableToObject(table) {
    var data = [];
    $(table).find('tbody tr').each(function(i, row) {
      if(i > 0){
        var $row = $(row);
        var $td = $row.find('td');
        var result = $td[1].textContent.trim().split(' - ');
        data.push(result);
      }
    });
    return data;
  }

  function convertLastTwo(obj){
    var data = [];
    for (let i = 0; i < obj.length; i++) {
      for(let j = 0; j < obj[i].length ; j++){
        let lastTwo = obj[i][j].slice(-2);
        data.push(lastTwo);
      }
    }
    return data
  }



});