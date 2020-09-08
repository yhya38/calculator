$(document).keypress(function (event) {
  if (event.key === "Enter") {
    var currentValue = $(".calc-display").val();
    $(".calc-display").val(eval(currentValue));
  } else {
      $(".calc-display").val($(".calc-display").val() + event.key);
      
  }
});

function insert(num) {
  var currentValue = $(".calc-display").val();

  $(".calc-display").val(currentValue + num);
}

function equal() {
  var currentValue = $(".calc-display").val();
  $(".calc-display").val(eval(currentValue));
}

function c() {
  $(".calc-display").val("");
}

function del() {
  var currentValue = $(".calc-display").val();
  $(".calc-display").val(currentValue.substring(0, currentValue.length - 1));
}
