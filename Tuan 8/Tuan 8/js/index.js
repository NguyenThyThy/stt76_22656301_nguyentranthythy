$(document).ready(function () {
  var i = 2;
  function kiemTraMa() {
    var reg = /[0-9]{9}$/;
    if ($("#txtMa").val() == "") {
      $("#tbMa").html("Bắt buộc nhập");
      $("#tbMa").addClass("mauDo");
      return false;
    }
    if (!reg.test($("#txtMa").val())) {
      $("#tbMa").html("Nhập sai");
      $("#tbMa").addClass("mauDo");
      return false;
    }
    $("#tbMa").html("*");
    return true;
  }
  $("#txtMa").blur(kiemTraMa);

  function kiemTraHT() {
    var kt = /(^[A-Z]{1}[a-z]+)(\s[A-Z]{1}[a-z]*)_$/;
    if ($("#txtHT").val() == "") {
      $("#tbHT").html("Bắt buộc nhập");
      $("#tbHT").addClass("mauDo");
      return false;
    }
    if (!kt.test($("#txtHT").val())) {
      $("#tbHT").html("Chữ cái đầu của mỗi từ phải viết hóa !!");
      $("#tbHT").addClass("mauDo");
      return false;
    }
    $("#tbHT").html("*");
    return true;
  }

  $("#txtHT").blur(kiemTraHT);

  function kiemTraEmail() {
    var mauKT1 = /^[a-z0-9-_]{3,15}$/;
    var mauKT = /(abc)$/;
    if ($("#txtEmail").val() == "") {
      $("#tbEmail").html("Bắt buộc nhập");
      $("#tbEmail").addClass("mauDo");
      return false;
    }
    if (!mauKT.test($("#txtEmail").val())) {
      $("#tbEmail").html("Nhập sai");
      $("#tbEmail").addClass("mauDo");
      return false;
    }
    $("#tbEmail").html("*");
    return true;
  }

  $("#txtEmail").blur(kiemTraEmail);

  $("#slDV").change(function () {
    $("#slDV option:selected").each(function () {
      $("#txtGiaTien").val($(this).val());
    });
  });

  $(".chkDoDung").click(function () {
    var tien = 0;
    var n = $(".chkDoDung:checked").length;
    if (n == 0) {
      $(".chkDoDung:unchecked").each(function () {
        tien = 0;
        $("#txtTDD").val(tien);
      });
    }
    if (n > 0) {
      $(".chkDoDung:checked").each(function () {
        tien += parseFloat($(this).val());
        $("#txtTDD").val(tien);
      });
    }
    var tongTien =
      parseFloat($("#txtTDD").val()) + parseFloat($("#txtGiaTien").val());
    $("#txtTongTien").val(tongTien);
  });

  $("#btnSave").click(function () {
    var ma = $("#txtMa").val();
    var ht = $("#txtHT").val();
    var dc = $("#txtEmail").val();
    var tdv = $("#txtGiaTien").val();
    var tdd = $("#txtTDD").val();
    var tong = $("#txtTongTien").val();
    var them = `<tr>
                  <td>${i++}</td>
                  <td>${ma}</td>
                  <td>${ht}</td>
                  <td>${dc}</td>
                  <td>${tdv}</td>
                  <td>${tdd}</td>
                  <td>${tong}</td>
                </tr>`;
    $("#tbDanhSach").append(them);
    $(".btn-close").click();
    return true;
  });
});
