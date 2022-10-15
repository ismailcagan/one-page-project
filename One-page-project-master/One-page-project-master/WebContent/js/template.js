//alert("Merhabalar Güzel insanlar")

function name(params) {
  console.log("console");
  return "hello";
}

function dateShow() {
  document.getElementById("dateId").innerHTML = Date();
}

function dateShow2() {
  document.getElementById("dateId").innerHTML = Date();
}

//jquery acordion
$(document).ready(function () {
  $("#accordion4").accordion();
});

//search autocomplete
$(document).ready(function () {
  var auto = ["html", "css", "bootstrap", "JavaScript", "jquery", "responsive"];
  $("#tags").autocomplete({
    source: auto,
  });
});

//form tarih
$(document).ready(function () {
  $("#tarih").datepicker();
});

//selectable

//selectable
$(document).ready(function () {
  $("#selectable").selectable();
});

//form
$(document).ready(function () {
  $("#btnSubmit").click(function () {
    let email, phone, adSoyad;

    email = $("#email").val();
    email = jQuery.trim(email);

    phone = $("#telefonunuz").val();
    phone = jQuery.trim(phone);

    adSoyad = $("#adinizSoyadiniz").val();
    adSoyad = jQuery.trim(adSoyad);

    //validation adsoyad
    if (adSoyad == "") {
      $("#validation_adiniz").html("<b>Ad soyad boş geçilemez</b>");
    } else if (adSoyad != null) {
      $("#validation_adiniz").html("");
    }

    //validation email
    //regex javascript email
    if (email == "") {
      $("#validation_emailiniz").html("<b>Email boş geçilemez</b>");
    } else if (validationEmail(email) == false) {
      $("#validation_emailiniz").html("<b>Email uygun formatta değildir</b>");
    }else if (adSoyad != null) {
      $("#validation_emailiniz").html("");
    }

    //validation phone
    //regex javasscript telefon
    if (phone == "") {
      $("#validation_telefonunuz").html("<b>Telefon boş geçilemez</b>");
    } else if (adSoyad != null) {
      $("#validation_telefonunuz").html("");
    }
    
    
    else if (isNumeric(phone) == false) {
      $("#validation_telefonunuz").html("<b>sayı girmediniz</b>");
    } else if (validationPhone(phone) == false) {
      $("#validation_telefonunuz").html(
        "<b>Telefon uygun formatta değildir</b>"
      );
    }
  });

  function validationEmail(email) {
    var regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  function validationPhone(phone) {
    var regex = /^\(?([0-9]{3})\)?([0-9]{3})?([0-9]{4})$/;
    return regex.test(phone);
  }
});
